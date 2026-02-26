import type { Metadata } from 'next'
import { fetchPage } from '@/lib/sanity'
import { newsPageQuery, allBlogPostsQuery } from '@/lib/queries'
import LatestNewsPage from './NewsContent'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPage(newsPageQuery)
  const d = data as Record<string, any>
  return {
    title: d?.seo?.title || 'Latest News — Pearns Point',
    description:
      d?.seo?.description ||
      'Development updates, island events, lifestyle features, and investment insights from Pearns Point, Antigua.',
  }
}

export default async function Page() {
  const [cmsData, cmsPosts] = await Promise.all([
    fetchPage(newsPageQuery),
    fetchPage<any[]>(allBlogPostsQuery),
  ])
  return (
    <LatestNewsPage
      cmsData={cmsData as Record<string, any> | null}
      cmsPosts={cmsPosts as any[] | null}
    />
  )
}
