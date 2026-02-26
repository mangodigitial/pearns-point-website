import type { Metadata } from 'next'
import { fetchPage } from '@/lib/sanity'
import { antiguaPageQuery } from '@/lib/queries'
import TheAntiguaExperiencePage from './AntiguaContent'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPage(antiguaPageQuery)
  const d = data as Record<string, any>
  return {
    title: d?.seo?.title || 'The Antigua Experience — Island Life',
    description:
      d?.seo?.description ||
      'Discover Antigua — 365 beaches, world-class sailing, exceptional dining, year-round sunshine, and direct flights from London and New York.',
  }
}

export default async function Page() {
  const cmsData = await fetchPage(antiguaPageQuery)
  return <TheAntiguaExperiencePage cmsData={cmsData as Record<string, any> | null} />
}
