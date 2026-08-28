import PageHero from '@/components/global/PageHero'
import GoldRule from '@/components/global/GoldRule'

/* Shared shell for the Privacy Policy and Terms & Conditions pages.

   These are long-form text documents rather than marketing pages, so they use
   a narrow single column and the site's prose scale instead of the wide
   sectioned layout the rest of the site uses. The body is passed as plain
   structured data — headings and paragraphs — so the two documents stay easy
   to edit without touching layout. */

export interface LegalBlock {
  heading?: string
  paragraphs?: string[]
  bullets?: string[]
}

interface LegalPageProps {
  eyebrow: string
  title: string
  intro: string
  updated: string
  blocks: LegalBlock[]
  heroImage?: string
}

const DEFAULT_HERO =
  'https://images.unsplash.com/photo-1476673160081-cf065607f449?w=1920&q=85'

export default function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  blocks,
  heroImage = DEFAULT_HERO,
}: LegalPageProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        subtitle={intro}
        backgroundImage={heroImage}
        heightClass="h-[45vh] min-h-[340px]"
      />

      <section className="py-[100px] max-lg:py-20 px-[60px] max-lg:px-7 max-w-[820px] mx-auto">
        <p className="text-[0.6rem] font-medium tracking-[0.25em] uppercase text-prose-light mb-5">
          Last updated {updated}
        </p>
        <GoldRule />

        <div className="mt-10">
          {blocks.map((block, i) => (
            <div key={i} className="mb-10 last:mb-0">
              {block.heading && (
                <h2 className="font-display text-[1.5rem] max-lg:text-[1.3rem] font-normal text-navy mb-4">
                  {block.heading}
                </h2>
              )}
              {block.paragraphs?.map((p, j) => (
                <p
                  key={j}
                  className="text-[0.98rem] font-light leading-[1.9] text-prose-mid mb-4 last:mb-0"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
              {block.bullets && (
                <ul className="mt-3 mb-1 pl-5 list-disc marker:text-ocean">
                  {block.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="text-[0.98rem] font-light leading-[1.9] text-prose-mid mb-2"
                      dangerouslySetInnerHTML={{ __html: b }}
                    />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
