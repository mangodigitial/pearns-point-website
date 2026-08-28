import type { Metadata } from 'next'
import { fetchPage } from '@/lib/sanity'
import { plotAndPlanPageQuery } from '@/lib/queries'
import PlotAndPlanPage from './PlotAndPlanContent'
import JsonLd from '@/components/global/JsonLd'
import { breadcrumbSchema } from '@/lib/structuredData'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPage(plotAndPlanPageQuery)
  const d = data as Record<string, any>
  return {
    title: d?.seo?.title ? { absolute: d.seo.title } : 'Plot & Plan — Turnkey Luxury Villas',
    description:
      d?.seo?.description ||
      'Choose from three pre-designed luxury villa styles delivered turnkey at a final price by world-class architects at Pearns Point, Antigua.',
    alternates: { canonical: '/plot-and-plan' },
  }
}

export default async function Page() {
  const cmsData = await fetchPage(plotAndPlanPageQuery)
  const crumbs = breadcrumbSchema([{ name: 'Plot and Plan', path: '/plot-and-plan' }])
  return (
    <>
      <JsonLd data={crumbs} />
      <PlotAndPlanPage cmsData={cmsData as Record<string, any> | null} />
    </>
  )
}
