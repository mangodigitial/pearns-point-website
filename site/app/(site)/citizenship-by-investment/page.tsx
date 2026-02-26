import type { Metadata } from 'next'
import { fetchPage } from '@/lib/sanity'
import { cbiPageQuery } from '@/lib/queries'
import CitizenshipByInvestmentPage from './CbiContent'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPage(cbiPageQuery)
  const d = data as Record<string, any>
  return {
    title: d?.seo?.title || 'Citizenship by Investment — Antigua & Barbuda',
    description:
      d?.seo?.description ||
      'Learn about Antigua\u2019s CBI programme — visa-free access to 150+ countries, fast processing, and full family inclusion through Pearns Point.',
  }
}

export default async function Page() {
  const cmsData = await fetchPage(cbiPageQuery)
  return <CitizenshipByInvestmentPage cmsData={cmsData as Record<string, any> | null} />
}
