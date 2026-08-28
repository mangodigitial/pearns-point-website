'use client'

import PageHero from '@/components/global/PageHero'
import ScrollReveal from '@/components/global/ScrollReveal'
import StaggerReveal from '@/components/global/StaggerReveal'
import GoldRule from '@/components/global/GoldRule'
import QuoteStrip from '@/components/global/QuoteStrip'
import CTABand from '@/components/global/CTABand'
import FeatureCard from '@/components/cards/FeatureCard'

/* ─── Accommodation ─── */
const accommodation = [
  {
    label: 'Resort Suites',
    count: '20',
    description:
      'Single-storey suites set low among the hillside, each framed by the landscape and open to the Caribbean Sea.',
  },
  {
    label: 'Resort Villas',
    count: '20',
    description:
      'Two-bedroom villas with panoramic views, served by the full collection of resort amenities.',
  },
  {
    label: 'Villas for Sale',
    count: '36',
    description:
      'Nature-framed three- and four-bedroom villas available for purchase, from US$3M to US$6M.',
  },
]

/* ─── Amenity Cards ─── */
const amenities = [
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 34 C10 30 14 38 20 34 C26 30 30 38 40 33"/><path d="M22 30 V12"/><path d="M22 12 C28 12 34 16 36 22 L22 22 Z"/></svg>',
    title: 'Beach Club by Boat',
    description:
      'A beach club reached by boat — the kind of arrival that defines a stay, open to resort guests and Pearns Point owners alike.',
  },
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 6 V20 a4 4 0 0 0 8 0 V6"/><path d="M17 20 V38"/><path d="M31 6 C27 12 27 20 31 22 V38"/></svg>',
    title: 'Signature Restaurant',
    description:
      'A signature restaurant supplied by its own organic farm, rooted in Antiguan produce and the island’s culinary confidence.',
  },
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="18" cy="16" rx="10" ry="12"/><path d="M11 9 L25 23 M25 9 L11 23"/><path d="M26 25 L36 37"/></svg>',
    title: 'Racquet Club',
    description:
      'A state-of-the-art racquet club at the heart of one of the Caribbean’s most comprehensive sports and wellness offerings.',
  },
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 34 C14 28 8 22 8 15 a7 7 0 0 1 14 -3 a7 7 0 0 1 14 3 C36 22 30 28 22 34 Z"/><path d="M6 39 H38"/></svg>',
    title: 'Ocean-View Spa & Fitness',
    description:
      'A spa and fitness centre positioned for the view — wellness treated as part of the landscape, not an afterthought.',
  },
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 6 L22 28"/><path d="M22 10 L34 24 L22 26 Z"/><path d="M5 33 C11 29 15 37 22 33 C29 29 33 37 39 32"/></svg>',
    title: 'Watersports Hub',
    description:
      'A dedicated watersports hub on a coastline made for it — calm turquoise water, steady trade winds, world-class sailing.',
  },
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 5 L36 10 V21 C36 30 30 36 22 39 C14 36 8 30 8 21 V10 Z"/><path d="M22 15 v10 M17 20 h10"/></svg>',
    title: 'Privacy, Preserved',
    description:
      'The design respects and accommodates public beach access while protecting the privacy of Pearns Point owners, residents and resort guests.',
  },
]

/* ─── Shamoon portfolio ─── */
const portfolio = [
  'Hermitage Bay, Antigua',
  'Marbella Club',
  'Puente Romano Marbella',
  'Nobu Hotel Ibiza Bay',
  'Nobu Marbella',
  'Nobu Marrakech',
  'Teranka Hotel Formentera',
  'Hyde Miami',
  'Small Luxury Hotels of the World',
]

export default function ResortVillasPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <PageHero
        backgroundImage="/images/resort-villas/hero-peninsula.jpg"
        eyebrow="Hotel and resort villas at Pearns Point, Antigua"
        title="Hotel &amp; <em>Resort Villas</em>"
        subtitle="A luxury boutique resort within Pearns Point — an intimate collection of suites, turnkey villas for sale, and world-class amenities shared by guests and owners alike."
      />

      {/* ── THE PARTNERSHIP ── */}
      <section className="py-[100px] pb-[120px] px-[60px] max-lg:px-7 max-lg:py-[80px]">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[100px] items-center max-lg:grid-cols-1 max-lg:gap-[60px]">
          <ScrollReveal>
            <img loading="lazy" decoding="async"
              src="/images/resort-villas/beach-and-access.jpg"
              alt="The resort site at Pearns Point — beach and shoreline access as it stands today"
              className="w-full aspect-[4/5] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
            />
          </ScrollReveal>
          <ScrollReveal>
            <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
              The Partnership
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5">
              A Global Hotelier<br />Comes to <em className="font-light italic">Pearns Point</em>
            </h2>
            <GoldRule className="my-7" />
            <p className="text-[1.1rem] font-light leading-[1.85] text-prose-mid max-w-[560px]">
              Renowned hotelier Daniel Shamoon has entered a joint venture with Dutch entrepreneur Albert Hartog
              to create a luxury boutique resort within the Pearns Point development on Antigua&rsquo;s coveted
              western peninsula.
            </p>
            <p className="text-[1.1rem] font-light leading-[1.85] text-prose-mid max-w-[560px] mt-4">
              As co-owner of Luxury Hotel Partners and Small Luxury Hotels of the World, Shamoon is recognised for
              creating some of the most iconic luxury hospitality destinations in the world. Hartog has led the
              development of Pearns Point since its inception through his company, Orange Limited.
            </p>
            <p className="text-[1.1rem] font-light leading-[1.85] text-prose-mid max-w-[560px] mt-4">
              The tropical, low-density resort &mdash; nestled among lush hillsides and white-sand beaches &mdash;
              will be seamlessly integrated into the existing development, overlooking the Caribbean Sea across a
              dramatic 160-acre peninsula.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ACCOMMODATION NUMBERS ── */}
      <section className="py-[90px] px-[60px] max-lg:px-7 bg-white">
        <div className="max-w-content mx-auto">
          <ScrollReveal className="text-center mb-[60px]">
            <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
              The Resort
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5">
              An Intimate<br /><em className="font-light italic">Collection</em>
            </h2>
            <p className="text-[1.1rem] font-light leading-[1.85] text-prose-mid max-w-[620px] mx-auto">
              Plans introduce 76 residences and suites in total &mdash; low-rise, widely spaced and framed by the
              landscape, in keeping with the low-density character of the peninsula.
            </p>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
            {accommodation.map((item) => (
              <div
                key={item.label}
                className="p-12 px-10 bg-sand-light rounded-[4px] border border-black/[0.04] text-center"
              >
                <p className="font-display text-[3.4rem] leading-none text-ocean mb-4">{item.count}</p>
                <h3 className="font-display text-[1.35rem] font-normal text-navy mb-3">{item.label}</h3>
                <p className="text-[0.8rem] font-light leading-[1.75] text-prose-mid">{item.description}</p>
              </div>
            ))}
          </StaggerReveal>
          <ScrollReveal className="mt-10 text-center">
            <p className="text-[0.78rem] font-light leading-[1.7] text-prose-mid/70">
              Pricing is indicative and subject to change.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FULL-WIDTH SHOWCASE ── */}
      <ScrollReveal className="px-[60px] py-[80px] max-lg:px-7">
        <img loading="lazy" decoding="async"
          src="/images/resort-villas/islands-and-sailboat.jpg"
          alt="The Pearns Point peninsula and its offshore islets, Antigua's west coast"
          className="w-full h-[55vh] min-h-[360px] object-cover rounded-[4px] max-w-content mx-auto"
        />
      </ScrollReveal>

      {/* ── AMENITIES ── */}
      <section className="pb-[140px] px-[60px] max-lg:px-7">
        <div className="max-w-content mx-auto">
          <ScrollReveal className="text-center mb-[72px]">
            <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
              Amenities
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5">
              Shared by Guests,<br />Enjoyed by <em className="font-light italic">Owners</em>
            </h2>
            <p className="text-[1.1rem] font-light leading-[1.85] text-prose-mid max-w-[620px] mx-auto">
              Pearns Point owners and resort guests will enjoy privileged access to an exceptional collection of
              amenities &mdash; among the most comprehensive sports and wellness experiences in the Caribbean.
            </p>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {amenities.map((card, i) => (
              <FeatureCard key={i} {...card} />
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── SHAMOON QUOTE ── */}
      <QuoteStrip
        text="I’m thrilled to partner with Albert Hartog to create a resort that feels deeply connected to Antigua's rich island culture, extraordinary beauty and vibrant spirit. Our vision is to create a thoughtful destination that complements the existing Pearns Point community through timeless design, genuine hospitality and an authentic sense of place."
        attribution="Daniel Shamoon, Pearns Point Partner"
      />

      {/* ── SIGNATURE RESIDENCES ── */}
      <section className="py-[140px] px-[60px] max-lg:px-7 bg-white">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[100px] items-center max-lg:grid-cols-1 max-lg:gap-12">
          <ScrollReveal>
            <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
              Signature Residences
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5">
              Two Homes by<br /><em className="font-light italic">James Hamilton</em> Architects
            </h2>
            <GoldRule className="my-7" />
            <p className="text-[1.1rem] font-light leading-[1.85] text-prose-mid max-w-[560px]">
              Orange Limited and Shamoon also plan to develop two signature residences designed by James Hamilton
              Architects, showcasing the architectural quality, indoor-outdoor living and connection to the
              landscape that are pillars of Pearns Point.
            </p>
            <p className="text-[1.1rem] font-light leading-[1.85] text-prose-mid max-w-[560px] mt-4">
              The partners are committed to preserving the island&rsquo;s raw beauty while establishing a new
              benchmark for luxury living in the Caribbean.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <img loading="lazy" decoding="async"
              src="/images/resort-villas/coastline-aerial.jpg"
              alt="The Pearns Point coastline, setting for the two signature residences"
              className="w-full aspect-[4/3] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── HARTOG PULL QUOTE ── */}
      <section className="py-[120px] px-[60px] max-lg:px-7">
        <ScrollReveal className="max-w-[820px] mx-auto text-center">
          <GoldRule className="mx-auto mb-9" />
          <blockquote className="font-display text-[clamp(1.4rem,2.6vw,2rem)] font-light italic leading-[1.5] text-navy">
            &ldquo;Pearns Point was conceived as one of the Caribbean&rsquo;s finest low-density residential
            communities, combining privacy, natural beauty and long-term quality. The partnership with Daniel
            Shamoon represents an important next step in that vision.&rdquo;
          </blockquote>
          <cite className="block mt-8 font-body not-italic text-[0.6rem] font-medium tracking-[0.35em] uppercase text-prose-mid">
            Albert Hartog, Owner of Orange Limited
          </cite>
        </ScrollReveal>
      </section>

      {/* ── ABOUT DANIEL SHAMOON ── */}
      <section className="py-[140px] px-[60px] max-lg:px-7 bg-white">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[100px] items-center max-lg:grid-cols-1 max-lg:gap-12">
          <ScrollReveal>
            <img loading="lazy" decoding="async"
              src="/images/resort-villas/peninsula-from-the-air.jpg"
              alt="The Pearns Point peninsula on Antigua's west coast"
              className="w-full aspect-[3/2] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
            />
          </ScrollReveal>
          <ScrollReveal>
            <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
              The Hotelier
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5">
              Three Decades of<br /><em className="font-light italic">Understated</em> Luxury
            </h2>
            <GoldRule className="my-7" />
            <p className="text-[1.1rem] font-light leading-[1.85] text-prose-mid max-w-[560px]">
              For more than thirty years, Daniel Shamoon has cultivated a portfolio of celebrated hospitality
              destinations defined by understated luxury, exceptional service and an enduring sense of place &mdash;
              combining meticulous design, authentic lifestyle experiences and long-term stewardship.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 max-sm:grid-cols-1">
              {portfolio.map((name) => (
                <li key={name} className="text-[0.85rem] font-light leading-[1.6] text-prose-mid flex gap-3">
                  <span className="text-ocean">&mdash;</span>
                  {name}
                </li>
              ))}
            </ul>
            <p className="text-[0.85rem] font-light leading-[1.8] text-prose-mid/80 max-w-[560px] mt-8">
              Shamoon continues to lead new developments across Europe, Africa, North America and the Caribbean,
              including The Beach Club, Barbuda &mdash; the island resort opening in partnership with Robert De Niro
              in 2027.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="py-[120px] px-[60px] max-lg:px-7">
        <div className="max-w-content mx-auto">
          <ScrollReveal className="text-center mb-[60px]">
            <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
              The Location
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5">
              Antigua&rsquo;s<br /><em className="font-light italic">West Coast</em>
            </h2>
            <p className="text-[1.1rem] font-light leading-[1.85] text-prose-mid max-w-[640px] mx-auto">
              Located just outside Jolly Harbour, one of Antigua&rsquo;s liveliest communities, Pearns Point offers
              effortless access to the island&rsquo;s most celebrated attractions &mdash; world-class watersports, a
              stellar culinary scene, 365 beaches and famously warm hospitality.
            </p>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
            {[
              { title: '35 Minutes', description: 'From V.C. Bird International Airport' },
              { title: 'Nonstop', description: 'Service from New York, Miami and London' },
              { title: 'Golden Sunsets', description: 'Calm turquoise water and scenic coastal landscapes' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <p className="font-display text-[2.2rem] leading-tight text-navy mb-2">{item.title}</p>
                <p className="text-[0.85rem] font-light leading-[1.7] text-prose-mid">{item.description}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── GALLERY PLACEHOLDERS ── */}
      <section className="pb-[140px] px-[60px] max-lg:px-7">
        <ScrollReveal className="text-center mb-16 max-w-content mx-auto">
          <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
            Gallery
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5">
            The Site <em className="font-light italic">Today</em>
          </h2>
          <p className="text-[1.1rem] font-light leading-[1.85] text-prose-mid max-w-[560px] mx-auto">
            The peninsula as it stands today — the land the resort will be set into.
          </p>
        </ScrollReveal>
        <ScrollReveal className="max-w-content mx-auto">
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {[
              {
                src: '/images/resort-villas/peninsula-aerial.jpg',
                alt: 'Aerial of the Pearns Point peninsula and the resort site',
                className: 'col-span-2 aspect-[2/1] max-sm:col-span-1',
              },
              {
                src: '/images/resort-villas/beach-aerial.jpg',
                alt: 'The beach and shoreline at the resort site',
                className: 'col-span-2 aspect-[2/1] max-sm:col-span-1',
              },
              {
                src: '/images/resort-villas/beach-and-access.jpg',
                alt: 'Beach access and the bay beyond at Pearns Point',
                className: 'col-span-2 aspect-[2/1] max-sm:col-span-1',
              },
              {
                src: '/images/resort-villas/coastline-aerial.jpg',
                alt: 'The west-coast beaches of the Pearns Point peninsula from the air',
                className: 'col-span-2 aspect-[2/1] max-sm:col-span-1',
              },
            ].map((item) => (
              <div
                key={item.src}
                className={`group relative overflow-hidden rounded-[4px] ${item.className} max-sm:aspect-[3/2]`}
              >
                <img loading="lazy" decoding="async"
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── CTA BAND ── */}
      <CTABand
        eyebrow="Register Interest"
        title='Be First to Hear<br /><em>More</em>'
        subtitle="Resort villas will be released in a limited collection. Speak to the Pearns Point sales team to register your interest ahead of launch."
        primaryCTA={{ label: 'Contact the Team', href: '/contact' }}
        secondaryCTA={{ label: 'Explore the Peninsula', href: '/the-development' }}
      />
    </>
  )
}
