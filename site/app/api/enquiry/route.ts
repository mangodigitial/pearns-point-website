import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'
import { isKnownCountry } from '@/lib/countries'

/**
 * POST /api/enquiry
 * ---------------------------------------------------------------------------
 * Receives a submission from the website contact form or newsletter form.
 *
 * Delivery is deliberately belt-and-braces:
 *   1. Write the enquiry into Sanity  (durable record, survives email failure)
 *   2. Send a notification email      (gets a human's attention)
 *
 * If either one succeeds the visitor is told the message was sent, because
 * from their point of view it was. Only a total failure of both returns an
 * error, so the form can tell them to phone instead - which is far better
 * than the previous behaviour of silently discarding the lead.
 *
 * Brevo is called over its REST API (v3/smtp/email) rather than an SDK so
 * that this route adds no new npm dependencies.
 */

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const SANITY_WRITE_TOKEN = process.env.SANITY_API_WRITE_TOKEN || ''

const BREVO_API_KEY = process.env.BREVO_API_KEY || ''
const TO_EMAIL = process.env.ENQUIRY_TO_EMAIL || 'info@orangelimited.com'
const FROM_EMAIL = process.env.ENQUIRY_FROM_EMAIL || 'info@pearnspoint.com'
const FROM_NAME = process.env.ENQUIRY_FROM_NAME || 'Pearns Point, Antigua'

const MAX = { name: 120, email: 200, phone: 60, country: 120, interest: 200, message: 5000 }

// A real visitor cannot fill in name, email and a message faster than this -
// a submission below it either skipped rendering the page entirely (the
// timestamp is simply absent) or filled every field programmatically in one
// pass. See the matching loadedAtRef in ContactForm.tsx / NewsletterForm.tsx.
const MIN_ELAPSED_MS = 1200

type Payload = Record<string, unknown>

/** Trim, coerce to string and hard-cap length. */
function clean(value: unknown, max: number): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, max)
}

/** Deliberately permissive - just enough to reject obvious rubbish. */
function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: Request) {
  let body: Payload

  try {
    body = (await request.json()) as Payload
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid-json' }, { status: 400 })
  }

  // --- Spam ----------------------------------------------------------------
  // All three checks answer 200 with the normal success shape so a bot has no
  // signal to tell it apart from a real submission and adapt - the same
  // reasoning as the pre-existing honeypot below.
  //
  // 1. Hidden 'company' field. Humans never fill it in; a bot that renders
  //    the page and blindly completes every input does.
  if (clean(body.company, 100)) {
    return NextResponse.json({ ok: true })
  }

  // 2. Elapsed time since the form mounted (loadedAt, set client-side). Not
  //    signed - it doesn't need to be, since the point isn't to stop a bot
  //    that specifically targets this site, it's to stop the current wave,
  //    which POSTs straight to this endpoint and never renders the page at
  //    all, so the field is simply absent from its payload.
  const loadedAt = typeof body.loadedAt === 'number' ? body.loadedAt : NaN
  const elapsed = Date.now() - loadedAt
  if (!Number.isFinite(loadedAt) || !(elapsed >= MIN_ELAPSED_MS)) {
    return NextResponse.json({ ok: true })
  }

  const source = clean(body.source, 40) === 'newsletter' ? 'newsletter' : 'contact-form'

  const enquiry = {
    name: clean(body.name, MAX.name),
    email: clean(body.email, MAX.email),
    phone: clean(body.phone, MAX.phone),
    country: clean(body.country, MAX.country),
    interest: clean(body.interest, MAX.interest),
    message: clean(body.message, MAX.message),
    consent: body.consent === true,
  }

  // 3. Country must be one of the dropdown's own options - the previous free
  //    text version was a field bots filled with gibberish ("Rvfqe") since
  //    there was nothing to match.
  if (enquiry.country && !isKnownCountry(enquiry.country)) {
    return NextResponse.json({ ok: true })
  }

  // Email is the only field we genuinely cannot proceed without, and the
  // contact form additionally requires a name.
  if (!looksLikeEmail(enquiry.email)) {
    return NextResponse.json({ ok: false, error: 'invalid-email' }, { status: 400 })
  }
  if (source === 'contact-form' && !enquiry.name) {
    return NextResponse.json({ ok: false, error: 'missing-name' }, { status: 400 })
  }

  const attribution = {
    pageUrl: clean(body.pageUrl, 500) || undefined,
    referrer: clean(body.referrer, 500) || undefined,
    gclid: clean(body.gclid, 300) || undefined,
    utmSource: clean(body.utmSource, 200) || undefined,
    utmMedium: clean(body.utmMedium, 200) || undefined,
    utmCampaign: clean(body.utmCampaign, 200) || undefined,
    utmTerm: clean(body.utmTerm, 200) || undefined,
    utmContent: clean(body.utmContent, 200) || undefined,
  }

  const submittedAt = new Date().toISOString()

  // --- 1. Durable record --------------------------------------------------
  let storedId: string | null = null
  let storeError: string | null = null

  if (SANITY_PROJECT_ID && SANITY_WRITE_TOKEN) {
    try {
      const writeClient = createClient({
        projectId: SANITY_PROJECT_ID,
        dataset: SANITY_DATASET,
        apiVersion: '2024-01-01',
        token: SANITY_WRITE_TOKEN,
        useCdn: false,
      })

      const created = await writeClient.create({
        _type: 'enquiry',
        submittedAt,
        source,
        status: 'new',
        ...enquiry,
        ...attribution,
      })

      storedId = created._id
    } catch (error) {
      storeError = error instanceof Error ? error.message : 'unknown'
      console.error('[enquiry] Sanity write failed:', storeError)
    }
  } else {
    storeError = 'not-configured'
    console.warn('[enquiry] Sanity write skipped - project ID or write token missing')
  }

  // --- 2. Notification ----------------------------------------------------
  let emailed = false
  let emailError: string | null = null

  if (BREVO_API_KEY) {
    const rows: Array<[string, string]> = [
      ['Name', enquiry.name],
      ['Email', enquiry.email],
      ['Phone', enquiry.phone],
      ['Country', enquiry.country],
      ['Interested in', enquiry.interest],
      ['Consented to contact', enquiry.consent ? 'Yes' : 'No'],
      ['Submitted', new Date(submittedAt).toUTCString()],
      ['Page', attribution.pageUrl || ''],
      ['Referrer', attribution.referrer || ''],
      ['Campaign', attribution.utmCampaign || ''],
      ['Source / medium', [attribution.utmSource, attribution.utmMedium].filter(Boolean).join(' / ')],
      ['Keyword', attribution.utmTerm || ''],
      ['Google click ID', attribution.gclid || ''],
    ]

    const rowHtml = rows
      .filter(([, v]) => v)
      .map(
        ([label, value]) =>
          '<tr><td style="border-bottom:1px solid #eee;color:#777">' +
          label +
          '</td><td style="border-bottom:1px solid #eee"><strong>' +
          escapeHtml(value) +
          '</strong></td></tr>'
      )
      .join('')

    const adsFlag = attribution.gclid
      ? '<p style="margin:0 0 16px;color:#1a7a8a"><strong>This lead came from a Google Ads click.</strong></p>'
      : ''

    const messageHtml = enquiry.message
      ? '<p style="margin:0 0 6px;color:#777">Message</p>' +
        '<div style="white-space:pre-wrap;padding:14px;background:#faf8f4;border-left:3px solid #c9a961">' +
        escapeHtml(enquiry.message) +
        '</div>'
      : ''

    const footer = storedId
      ? 'Saved to Sanity as ' + storedId + '.'
      : 'WARNING: this enquiry could NOT be saved to Sanity - this email is the only copy.'

    const html =
      '<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;color:#2b2b2b;line-height:1.6">' +
      '<h2 style="font-weight:500;margin:0 0 4px">New ' +
      (source === 'newsletter' ? 'newsletter signup' : 'enquiry') +
      ' from pearnspoint.com</h2>' +
      adsFlag +
      '<table cellpadding="6" cellspacing="0" style="border-collapse:collapse;margin:16px 0">' +
      rowHtml +
      '</table>' +
      messageHtml +
      '<p style="margin-top:24px;font-size:12px;color:#999">' + footer + '</p>' +
      '</div>'

    const subject =
      source === 'newsletter'
        ? 'Newsletter signup - ' + enquiry.email
        : 'Website enquiry - ' + enquiry.name + (enquiry.interest ? ' (' + enquiry.interest + ')' : '')

    try {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'api-key': BREVO_API_KEY,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          sender: { name: FROM_NAME, email: FROM_EMAIL },
          to: TO_EMAIL.split(',')
            .map((address) => address.trim())
            .filter(Boolean)
            .map((address) => ({ email: address })),
          replyTo: { email: enquiry.email, name: enquiry.name || undefined },
          subject,
          htmlContent: html,
        }),
      })

      if (response.ok) {
        emailed = true
      } else {
        emailError = response.status + ' ' + (await response.text())
        console.error('[enquiry] Brevo rejected the message:', emailError)
      }
    } catch (error) {
      emailError = error instanceof Error ? error.message : 'unknown'
      console.error('[enquiry] Brevo request failed:', emailError)
    }
  } else {
    emailError = 'not-configured'
    console.warn(
      '[enquiry] Email notification skipped - BREVO_API_KEY not set. ' +
        'The lead is still stored in Sanity.'
    )
  }

  // --- Outcome ------------------------------------------------------------
  if (!storedId && !emailed) {
    // Nothing captured the lead. Log loudly so it is at least recoverable
    // from the Vercel runtime logs, and tell the visitor to phone instead.
    console.error('[enquiry] TOTAL DELIVERY FAILURE - lead not stored and not emailed', {
      storeError,
      emailError,
      enquiry,
    })
    return NextResponse.json({ ok: false, error: 'delivery-failed' }, { status: 500 })
  }

  // Stored but nobody notified. The lead is safe, but it is sitting in Sanity
  // unseen - which is how leads quietly rot. Log it loudly and greppably so
  // this window is visible in the Vercel logs rather than silent.
  if (storedId && !emailed) {
    console.warn(
      '[enquiry] LEAD STORED BUT NOT NOTIFIED - check Sanity Studio. id=' +
        storedId +
        ' reason=' +
        (emailError || 'unknown')
    )
  }

  return NextResponse.json({
    ok: true,
    stored: Boolean(storedId),
    emailed,
    // Surfaced so the delivery path can be verified from outside without
    // digging through logs: 'both' | 'stored-only' | 'emailed-only'
    delivery: storedId && emailed ? 'both' : storedId ? 'stored-only' : 'emailed-only',
  })
}
