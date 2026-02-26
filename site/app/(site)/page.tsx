import type { Metadata } from 'next'
import { fetchPage } from '@/lib/sanity'
import { homePageQuery } from '@/lib/queries'
import HomePage from './HomeContent'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPage(homePageQuery)
  const seo = (data as Record<string, any>)?.seo
  return {
    title: seo?.title || 'Pearns Point — Luxury Caribbean Living in Antigua',
    description:
      seo?.description ||
      'Discover Pearns Point, an exclusive 137-acre peninsula on Antigua\u2019s west coast offering luxury plots, bespoke villas, and Caribbean citizenship by investment.',
  }
}

export default async function Page() {
  const cmsData = await fetchPage(homePageQuery)
  return <HomePage cmsData={cmsData as Record<string, any> | null} />
}
