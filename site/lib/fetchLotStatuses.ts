import type { LotStatusOverride } from './sitePlanData'

/* ─── Google Sheets → lot-status overrides ────────────────────────────────
 *
 *  How it works
 *  ────────────
 *  1. The user keeps a Google Sheet with columns:
 *       Plot  |  Status  |  Area sq ft  |  Price USD
 *
 *  2. They publish it:  File → Share → Publish to web → CSV.
 *     Google returns a URL like:
 *       https://docs.google.com/spreadsheets/d/e/2PACX-…/pub?output=csv
 *
 *  3. That URL goes into the Vercel env var GOOGLE_SHEET_CSV_URL.
 *
 *  4. This module fetches it server-side at ISR time (every 60 s) and
 *     converts the rows into LotStatusOverride[], ready for
 *     applyLotStatuses().
 *
 *  No API key, no OAuth, no service account — the sheet just needs to be
 *  "published to web". It's read-only and the CSV endpoint is public.
 * ──────────────────────────────────────────────────────────────────────── */

type LotStatus = 'available' | 'reserved' | 'sold' | 'hotel'

const VALID_STATUSES = new Set<LotStatus>(['available', 'reserved', 'sold', 'hotel'])

function normaliseStatus(raw: string): LotStatus | undefined {
  const s = raw.trim().toLowerCase() as LotStatus
  return VALID_STATUSES.has(s) ? s : undefined
}

/** Parse a CSV string (no external dependency). Handles quoted fields. */
function parseCSV(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let inQuotes = false

  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') { field += '"'; i++ }
        else inQuotes = false
      } else {
        field += ch
      }
    } else if (ch === '"') {
      inQuotes = true
    } else if (ch === ',') {
      row.push(field); field = ''
    } else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++
      row.push(field); field = ''
      if (row.some((c) => c.trim())) rows.push(row)
      row = []
    } else {
      field += ch
    }
  }
  // last line (no trailing newline)
  row.push(field)
  if (row.some((c) => c.trim())) rows.push(row)
  return rows
}

/**
 * Find column indices by scanning the header row for known synonyms.
 * This makes the sheet resilient to column ordering and minor renames.
 */
function detectColumns(header: string[]) {
  const h = header.map((c) => c.trim().toLowerCase().replace(/[^a-z0-9]/g, ''))
  return {
    plot:   h.findIndex((c) => c === 'plot' || c === 'plotid' || c === 'lotnumber' || c === 'lot' || c === 'number' || c === 'plotnumber'),
    status: h.findIndex((c) => c === 'status'),
    sqft:   h.findIndex((c) => c.includes('sqft') || c.includes('area') || c === 'areasqft' || c === 'size'),
    price:  h.findIndex((c) => c.includes('price') || c.includes('priceusd') || c === 'priceusdusd'),
  }
}

/**
 * Fetch lot status overrides from a published Google Sheet.
 *
 * Returns an empty array (never throws) when:
 *  - the env var is missing (feature not configured)
 *  - the sheet can't be reached (network blip — fall back to hardcoded data)
 *  - the CSV is malformed
 *
 * This means the map always renders, worst case with its compiled-in data.
 */
export async function fetchLotStatusesFromSheet(): Promise<LotStatusOverride[]> {
  const url = process.env.GOOGLE_SHEET_CSV_URL
  if (!url) return []

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },         // ISR: re-fetch at most once per minute
      headers: { Accept: 'text/csv' },
    })

    if (!res.ok) {
      console.warn(`[fetchLotStatuses] Google Sheet returned ${res.status}`)
      return []
    }

    const text = await res.text()
    const rows = parseCSV(text)
    if (rows.length < 2) return []         // header only, or empty

    const cols = detectColumns(rows[0])
    if (cols.plot < 0 || cols.status < 0) {
      console.warn('[fetchLotStatuses] Could not detect Plot / Status columns in header:', rows[0])
      return []
    }

    const overrides: LotStatusOverride[] = []

    for (let i = 1; i < rows.length; i++) {
      const r = rows[i]
      const num = parseInt(r[cols.plot], 10)
      if (isNaN(num) || num < 1) continue

      const status = normaliseStatus(r[cols.status] || '')
      if (!status) continue                // skip rows with no recognisable status

      const override: LotStatusOverride = { number: num, status }

      if (cols.sqft >= 0) {
        const sq = parseInt(r[cols.sqft]?.replace(/[^0-9]/g, '') || '', 10)
        if (!isNaN(sq) && sq > 0) override.sqft = sq
      }

      if (cols.price >= 0) {
        const p = parseInt(r[cols.price]?.replace(/[^0-9]/g, '') || '', 10)
        if (!isNaN(p) && p > 0) override.price = p
      }

      overrides.push(override)
    }

    return overrides
  } catch (err) {
    console.warn('[fetchLotStatuses] Failed to fetch Google Sheet:', err)
    return []
  }
}
