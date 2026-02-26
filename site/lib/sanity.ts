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
