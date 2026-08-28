import type { Metadata } from 'next'
import ResortVillasPage from './ResortVillasContent'
import JsonLd from '@/components/global/JsonLd'
import { breadcrumbSchema } from '@/lib/structuredData'

export const revalidate = 60

// While RESORT_PREVIEW_PASSWORD holds a password, this page is gated by
// middleware.ts, kept out of the sitemap and marked noindex. Set the variable
// to "public" and redeploy to take it live. See middleware.ts.
const isPublic = process.env.RESORT_PREVIEW_PASSWORD === 'public'

export const metadata: Metadata = {
  title: { absolute: 'Hotel & Resort Villas in Antigua | Pearns Point' },
  description:
    'A luxury boutique resort at Pearns Point, Antigua — 20 suites, 20 two-bedroom villas and 36 resort villas for sale from US$3M, with a beach club, spa, racquet club and watersports hub.',
  alternates: { canonical: '/resort-villas' },
  robots: isPublic ? undefined : { index: false, follow: false },
}

export default function Page() {
  const crumbs = breadcrumbSchema([{ name: 'Resort Villas', path: '/resort-villas' }])
  return (
    <>
      <JsonLd data={crumbs} />
      <ResortVillasPage isPublic={isPublic} />
    </>
  )
}
