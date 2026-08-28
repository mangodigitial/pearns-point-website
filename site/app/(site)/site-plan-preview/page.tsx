import type { Metadata } from 'next'
import PageHero from '@/components/global/PageHero'
import SitePlanMap from '@/components/interactive/SitePlanMap'
import { ALL_SHAPES, BASE_LAYERS } from '@/lib/sitePlanData'

/* Unlisted approval page.

   Not linked from anywhere on the site, not in the sitemap, disallowed in
   robots.txt and noindex/nofollow here — but deliberately NOT behind the basic
   auth that gates /resort-villas, so the URL can be sent round for sign-off
   without a password. Anyone with the link can open it; nobody will find it. */

export const metadata: Metadata = {
  title: 'Site Plan — Preview',
  description: 'Internal preview of the interactive Pearns Point site plan.',
  robots: { index: false, follow: false, nocache: true,
            googleBot: { index: false, follow: false } },
}

const NOTE =
  'Lot 66 is on the site’s Five Islands Bay tab but appears on no price list, ' +
  'which is why this shows 43 available rather than 42. Its status needs confirming.'

export default function Page() {
  return (
    <>
      {/* The navbar is white-on-transparent until you scroll, so this page needs a
          dark hero behind it the way every other page has one — without it the
          navigation is invisible against the cream background. */}
      <PageHero
        eyebrow="Interactive Site Plan"
        title="Explore the <em>Peninsula</em>"
        subtitle="Every lot on the peninsula, drawn from Studio RHE&rsquo;s master plan and coloured by its status."
        backgroundImage="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=85"
        heightClass="h-[52vh] min-h-[380px]"
      />

      <section className="pt-[70px] pb-9 px-[60px] max-lg:px-7 max-w-content mx-auto text-center">
        <p className="text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-gold-deep mb-5">
          Preview &middot; not linked from the site
        </p>
        <p className="text-[1.05rem] font-light leading-[1.85] text-prose-mid max-w-[660px] mx-auto">
          Every lot is drawn from Studio RHE&rsquo;s master plan, grouped by the site&rsquo;s own
          area tabs and coloured by its status in the August 2026 price list. Hover a lot for a
          summary, click it for the full details. Once this is signed off the status moves into the
          CMS, so a sale becomes a dropdown change rather than a new drawing.
        </p>
      </section>

      <section className="pb-[100px] px-[60px] max-lg:px-7 max-w-content mx-auto">
        <SitePlanMap shapes={ALL_SHAPES} base={BASE_LAYERS} note={NOTE} />

        <p className="text-[0.72rem] font-light text-prose-light leading-[1.7] mt-8 max-w-[76ch]">
          Geometry extracted from Studio RHE drawing M01, <em>Pearns Point Site Plan</em>, 1:2000.
          Boundaries and areas are indicative and subject to confirmation by survey — the drawing
          is schematic and not to be scaled. Lots 29&ndash;33 and 37 are drawn as a single block on
          the master plan and are shown here the same way. Areas follow the site&rsquo;s area tabs,
          extended to cover the sold lots those tabs leave out; prices and availability come from
          the August 2026 price list.
        </p>
      </section>
    </>
  )
}
