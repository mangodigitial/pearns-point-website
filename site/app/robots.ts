import type { MetadataRoute } from 'next'

const SITE_URL = 'https://pearnspoint.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Keep the Sanity Studio out of the index.
      disallow: ['/studio', '/studio/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
