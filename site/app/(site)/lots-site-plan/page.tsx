import type { Metadata } from 'next'
import { fetchPage } from '@/lib/sanity'
import { lotsSitePlanPageQuery } from '@/lib/queries'
import LotsSitePlanPage from './LotsSitePlanContent'
import JsonLd from '@/components/global/JsonLd'
import { breadcrumbSchema } from '@/lib/structuredData'
import { fetchLotStatusesFromSheet } from '@/lib/fetchLotStatuses'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPage(lotsSitePlanPageQuery)
  const d = data as Record<string, any>
  return {
    title: d?.seo?.title ? { absolute: d.seo.title } : 'Lots & Site Plan — Explore the Peninsula',
    description:
      d?.seo?.description ||
      'Browse eight distinct areas across the Pearns Point peninsula — from beachfront lots to elevated ocean-view positions with 360° panoramas.',
    alternates: { canonical: '/lots-site-plan' },
  }
}

export default async function Page() {
  /* Fetch CMS content and Google Sheet lot statuses in parallel. The sheet
     overrides take priority over any Sanity-managed statuses — this lets the
     team update lot status from a simple spreadsheet without touching the CMS. */
  const [cmsData, sheetOverrides] = await Promise.all([
    fetchPage(lotsSitePlanPageQuery),
    fetchLotStatusesFromSheet(),
  ])

  // Merge: sheet overrides replace CMS lot statuses when present.
  const cms = (cmsData as Record<string, any>) ?? {}
  if (sheetOverrides.length > 0) {
    cms.lotStatuses = sheetOverrides
  }

  const crumbs = breadcrumbSchema([{ name: 'Lots & Site Plan', path: '/lots-site-plan' }])
  return (
    <>
      <JsonLd data={crumbs} />
      <LotsSitePlanPage cmsData={cms} />
    </>
  )
}
