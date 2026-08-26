import type { Metadata } from 'next'
import ResortVillasPage from './ResortVillasContent'

export const revalidate = 60

// DRAFT PAGE — not linked from the navigation and excluded from the sitemap.
// `noindex, nofollow` stays until the press release is out and the page is signed off.
export const metadata: Metadata = {
  title: { absolute: 'Hotel & Resort Villas in Antigua | Pearns Point' },
  description:
    'A luxury boutique resort at Pearns Point, Antigua — 20 suites, 20 two-bedroom villas and 36 turnkey resort villas for sale from US$3M, with a beach club, spa, racquet club and watersports hub.',
  alternates: { canonical: '/resort-villas' },
  robots: { index: false, follow: false },
}

export default function Page() {
  return <ResortVillasPage />
}
