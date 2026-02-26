import type { Metadata } from 'next'
import { fetchPage } from '@/lib/sanity'
import { villasPageQuery } from '@/lib/queries'
import TheVillasPage from './VillasContent'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPage(villasPageQuery)
  const d = data as Record<string, any>
  return {
    title: d?.seo?.title || 'The Villas — Architecture & Design',
    description:
      d?.seo?.description ||
      'Discover the design philosophy behind Pearns Point villas — horizontal architecture, natural materials, and world-class creative partners.',
  }
}

export default async function Page() {
  const cmsData = await fetchPage(villasPageQuery)
  return <TheVillasPage cmsData={cmsData as Record<string, any> | null} />
}
