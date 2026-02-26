import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

/**
 * Returns true when a real Sanity project ID is configured.
 * The placeholder value and empty strings are treated as "not configured".
 */
export const isSanityConfigured = /^[a-z0-9-]+$/.test(projectId) && projectId !== 'your-project-id'

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null

const builder = isSanityConfigured && client
  ? imageUrlBuilder(client)
  : null

export function urlFor(source: SanityImageSource) {
  if (!builder) throw new Error('Sanity is not configured — set NEXT_PUBLIC_SANITY_PROJECT_ID')
  return builder.image(source)
}

/* ─── Internal fields to strip from Sanity documents ─── */
const STRIP_FIELDS = new Set(['_id', '_rev', '_createdAt', '_updatedAt'])

/**
 * Recursively processes a Sanity document:
 * - Converts `{ _type: 'image', asset }` objects to plain URL strings
 * - Strips internal metadata fields (_id, _rev, _createdAt, _updatedAt)
 * - Preserves _key and _type (needed for Portable Text)
 */
export function processSanityDocument(doc: unknown): unknown {
  if (doc === null || doc === undefined) return doc
  if (Array.isArray(doc)) return doc.map(processSanityDocument)
  if (typeof doc !== 'object') return doc

  const obj = doc as Record<string, unknown>

  // Convert Sanity image references to URL strings
  if (obj._type === 'image' && obj.asset) {
    try {
      return urlFor(obj as unknown as SanityImageSource).url()
    } catch {
      return null
    }
  }

  const result: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(obj)) {
    if (STRIP_FIELDS.has(key)) continue
    result[key] = processSanityDocument(value)
  }
  return result
}

/**
 * Fetch a page document from Sanity with full error handling.
 * Returns the processed document, or null if Sanity is not configured or fetch fails.
 */
export async function fetchPage<T = Record<string, unknown>>(
  query: string,
  params?: Record<string, unknown>
): Promise<T | null> {
  if (!isSanityConfigured || !client) return null
  try {
    const doc = await client.fetch(query, params ?? {})
    if (!doc) return null
    return processSanityDocument(doc) as T
  } catch (err) {
    console.error('[Sanity] fetchPage error:', err)
    return null
  }
}
