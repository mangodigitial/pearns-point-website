/* Structured-data builders.

   Everything here is derived from what the pages already say — no new claims.
   The site URL is the canonical www host, matching the canonical tags. */

export const SITE_URL = 'https://www.pearnspoint.com'

const LOGO = `${SITE_URL}/opengraph-image`

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'Orange Limited',
    alternateName: 'Pearns Point',
    url: SITE_URL,
    logo: LOGO,
    description:
      'Developer of Pearns Point, a 160-acre private peninsula on the west coast of Antigua offering luxury beachfront lots and bespoke villas.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pearns Point, Five Islands',
      addressLocality: "St. John's",
      addressCountry: 'AG',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-268-720-2225',
        contactType: 'sales',
        areaServed: 'AG',
        availableLanguage: 'English',
        email: 'info@orangelimited.com',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+44-7957-208978',
        contactType: 'sales',
        areaServed: 'GB',
        availableLanguage: 'English',
        email: 'info@orangelimited.com',
      },
    ],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'Pearns Point',
    inLanguage: 'en-GB',
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

/* Breadcrumbs. `trail` is ordered from the item nearest the home page
   outwards; home is prepended here so callers never repeat it. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
    })),
  }
}

export function articleSchema(post: {
  title: string
  slug: string
  description?: string
  image?: string
  publishedAt?: string
  updatedAt?: string
  authorName?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image ? [post.image] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/news/${post.slug}` },
    author: post.authorName
      ? { '@type': 'Person', name: post.authorName }
      : { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}
