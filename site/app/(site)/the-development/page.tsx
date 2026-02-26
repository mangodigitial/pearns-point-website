import type { Metadata } from 'next'
import { fetchPage } from '@/lib/sanity'
import { developmentPageQuery } from '@/lib/queries'
import TheDevelopmentPage from './DevelopmentContent'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPage(developmentPageQuery)
  const d = data as Record<string, any>
  return {
    title: d?.seo?.title || 'The Development — Pearns Point, Antigua',
    description:
      d?.seo?.description ||
      'Explore the vision behind Pearns Point — a rare peninsula development on Antigua\u2019s west coast with 49 exclusive plots across seven private beaches.',
  }
}

export default async function Page() {
  const cmsData = await fetchPage(developmentPageQuery)
  return <TheDevelopmentPage cmsData={cmsData as Record<string, any> | null} />
}
