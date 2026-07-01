import type { Metadata } from 'next'
import { fetchPage } from '@/lib/sanity'
import { galleryPageQuery } from '@/lib/queries'
import GalleryPage from './GalleryContent'

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPage(galleryPageQuery)
  const d = data as Record<string, any>
  return {
    title: d?.seo?.title ? { absolute: d.seo.title } : 'Gallery — Aerial Views, Beaches & Villas',
    description:
      d?.seo?.description ||
      'Explore aerial views, pristine beaches, luxury villas, and island lifestyle photography from Pearns Point peninsula.',
    alternates: { canonical: '/gallery' },
  }
}

export default async function Page() {
  const cmsData = await fetchPage(galleryPageQuery)
  return <GalleryPage cmsData={cmsData as Record<string, any> | null} />
}
