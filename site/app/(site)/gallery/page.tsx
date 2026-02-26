import type { Metadata } from 'next'
import GalleryPage from './GalleryContent'

export const metadata: Metadata = {
  title: 'Gallery — Pearns Point, Antigua',
  description:
    'Explore aerial views, pristine beaches, luxury villas, and island lifestyle photography from Pearns Point peninsula.',
}

export default function Page() {
  return <GalleryPage />
}
