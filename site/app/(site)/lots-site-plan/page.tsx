import type { Metadata } from 'next'
import { fetchPage } from '@/lib/sanity'
import { lotsSitePlanPageQuery } from '@/lib/queries'
import LotsSitePlanPage from './LotsSitePlanContent'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPage(lotsSitePlanPageQuery)
  const d = data as Record<string, any>
  return {
    title: d?.seo?.title || 'Lots & Site Plan — Explore the Peninsula',
    description:
      d?.seo?.description ||
      'Browse eight distinct areas across the Pearns Point peninsula — from beachfront lots to elevated ocean-view positions with 360\u00b0 panoramas.',
  }
}

export default async function Page() {
  const cmsData = await fetchPage(lotsSitePlanPageQuery)
  return <LotsSitePlanPage cmsData={cmsData as Record<string, any> | null} />
}
