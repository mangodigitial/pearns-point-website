import { NextResponse, type NextRequest } from 'next/server'

/**
 * Gate for the draft Resort Villas page.
 *
 * Controlled entirely by the RESORT_PREVIEW_PASSWORD environment variable
 * (Vercel → Project → Settings → Environment Variables → Production):
 *
 *   <any password>  the page asks for a password (any username) and stays noindex
 *   "public"        the gate is open — the page is live and indexable
 *   unset           the page is unavailable (503), so it can never leak by accident
 *
 * Going live is therefore a one-value change plus a redeploy; no code edit.
 */
const PASSWORD = process.env.RESORT_PREVIEW_PASSWORD
const NOINDEX = { 'X-Robots-Tag': 'noindex, nofollow' }

export function middleware(request: NextRequest) {
  if (PASSWORD === 'public') return NextResponse.next()

  if (!PASSWORD) {
    return new NextResponse('This page is not available.', { status: 503, headers: NOINDEX })
  }

  const header = request.headers.get('authorization')
  if (header?.startsWith('Basic ')) {
    const decoded = atob(header.slice(6))
    const password = decoded.slice(decoded.indexOf(':') + 1)
    if (password === PASSWORD) {
      const response = NextResponse.next()
      response.headers.set('X-Robots-Tag', 'noindex, nofollow')
      return response
    }
  }

  return new NextResponse('Password required.', {
    status: 401,
    headers: {
      ...NOINDEX,
      'WWW-Authenticate': 'Basic realm="Pearns Point Resort Villas (draft)", charset="UTF-8"',
    },
  })
}

export const config = { matcher: ['/resort-villas'] }
