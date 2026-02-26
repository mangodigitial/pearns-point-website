import type { Metadata } from 'next'
import { fetchPage } from '@/lib/sanity'
import { contactPageQuery } from '@/lib/queries'
import ContactPage from './ContactContent'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPage(contactPageQuery)
  const d = data as Record<string, any>
  return {
    title: d?.seo?.title || 'Contact Us — Pearns Point',
    description:
      d?.seo?.description ||
      'Get in touch with the Pearns Point sales team. Call, email, or book a site visit to Antigua\u2019s premier luxury development.',
  }
}

export default async function Page() {
  const cmsData = await fetchPage(contactPageQuery)
  return <ContactPage cmsData={cmsData as Record<string, any> | null} />
}
