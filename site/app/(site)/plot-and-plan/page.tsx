import type { Metadata } from 'next'
import { fetchPage } from '@/lib/sanity'
import { plotAndPlanPageQuery } from '@/lib/queries'
import PlotAndPlanPage from './PlotAndPlanContent'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPage(plotAndPlanPageQuery)
  const d = data as Record<string, any>
  return {
    title: d?.seo?.title || 'Plot & Plan — Turnkey Luxury Villas',
    description:
      d?.seo?.description ||
      'Choose from three pre-designed luxury villa styles delivered turnkey at a final price by world-class architects at Pearns Point, Antigua.',
  }
}

export default async function Page() {
  const cmsData = await fetchPage(plotAndPlanPageQuery)
  return <PlotAndPlanPage cmsData={cmsData as Record<string, any> | null} />
}
