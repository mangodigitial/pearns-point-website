import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.pearnspoint.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Keep the Sanity Studio out of the index.
      // /site-plan-preview is an unlisted approval page: reachable by link,
      // but kept out of the index and out of the sitemap.
      disallow: ['/studio', '/studio/', '/site-plan-preview'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
