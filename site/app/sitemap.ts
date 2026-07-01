import type { MetadataRoute } from 'next'
import { fetchPage } from '@/lib/sanity'
import { blogPostSlugsQuery } from '@/lib/queries'

const SITE_URL = 'https://pearnspoint.com'

// Static routes, mapped to their (site) segment paths. '' is the home page.
const STATIC_ROUTES = [
  '',
  'the-development',
  'the-villas',
  'plot-and-plan',
  'lots-site-plan',
  'the-antigua-experience',
  'citizenship-by-investment',
  'gallery',
  'latest-news',
  'contact',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: path ? `${SITE_URL}/${path}` : SITE_URL,
    lastModified: now,
    changeFrequency: path === '' || path === 'latest-news' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))

  // Blog posts live at /news/<slug>. Falls back to static routes only if Sanity
  // is unreachable (fetchPage returns null on error / when unconfigured).
  let postEntries: MetadataRoute.Sitemap = []
  try {
    const slugs = await fetchPage<string[]>(blogPostSlugsQuery)
    if (Array.isArray(slugs)) {
      postEntries = slugs
        .filter((slug): slug is string => typeof slug === 'string' && slug.length > 0)
        .map((slug) => ({
          url: `${SITE_URL}/news/${slug}`,
          lastModified: now,
          changeFrequency: 'monthly',
          priority: 0.6,
        }))
    }
  } catch {
    // ignore — return static routes only
  }

  return [...staticEntries, ...postEntries]
}
