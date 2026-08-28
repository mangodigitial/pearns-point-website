import type { Metadata } from 'next'
import { fetchPage } from '@/lib/sanity'
import { newsPageQuery, allBlogPostsQuery } from '@/lib/queries'
import LatestNewsPage from './NewsContent'
import JsonLd from '@/components/global/JsonLd'
import { breadcrumbSchema } from '@/lib/structuredData'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPage(newsPageQuery)
  const d = data as Record<string, any>
  return {
    title: d?.seo?.title ? { absolute: d.seo.title } : 'Latest News',
    description:
      d?.seo?.description ||
      'Development updates, island events, lifestyle features, and investment insights from Pearns Point, Antigua.',
    alternates: { canonical: '/latest-news' },
  }
}

export default async function Page() {
  const [cmsData, cmsPosts] = await Promise.all([
    fetchPage(newsPageQuery),
    fetchPage<any[]>(allBlogPostsQuery),
  ])
  const crumbs = breadcrumbSchema([{ name: 'Latest News', path: '/latest-news' }])
  return (
    <>
      <JsonLd data={crumbs} />
      <LatestNewsPage
        cmsData={cmsData as Record<string, any> | null}
        cmsPosts={cmsPosts as any[] | null}
      />
    </>
  )
}
