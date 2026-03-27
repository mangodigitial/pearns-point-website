'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from '@/components/global/PageHero'
import ScrollReveal from '@/components/global/ScrollReveal'
import GoldRule from '@/components/global/GoldRule'
import QuoteStrip from '@/components/global/QuoteStrip'
import LifestyleCard from '@/components/cards/LifestyleCard'
import { deepMerge } from '@/lib/data-utils'

/* ─── Fallback Data (used when Sanity is not configured) ─── */
const heroData = {
  eyebrow: "Antigua's Exclusive Western Peninsula",
  title: 'Shared by Few,<br>Rivalled by <em>None</em>',
  subtitle: "Discover the Caribbean's most prestigious address — where seven pristine beaches, endless sunshine, and an extraordinary lifestyle await the discerning few.",
  backgroundImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80',
}

const introData = {
  title: 'A Peninsula of<br><em>Extraordinary</em> Beauty',
  body: "Stretching along Antigua's celebrated western coast, Pearns Point is a rare and unspoilt peninsula offering spectacular ocean views, seven white sand beaches, and an unmatched sense of privacy. Every detail has been considered to respect and enhance the island's natural beauty. Undeniably some of Antigua's most exciting and prime real estate, an exquisite selection of beach and oceanfront lots remain.",
  mainImage: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
  stats: [
    { number: '49', label: 'Exclusive Plots' },
    { number: '7', label: 'Private Beaches' },
    { number: '360°', label: 'Ocean Views' },
  ],
}

const lifestyleCards = [
  { image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=700&q=80', tag: 'On the Water', title: 'Yacht & Sail', description: 'Set sail from your doorstep into the sapphire waters of the Antiguan coastline and surrounding islands.' },
  { image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80', tag: 'Culinary', title: 'World-Class Dining', description: "From beachfront seafood grills to Michelin-calibre kitchens — Antigua's culinary scene is flourishing." },
  { image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=700&q=80', tag: 'Beaches', title: 'Seven Beaches', description: 'Seven private white sand beaches line the peninsula — each offering a different shade of paradise.' },
  { image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=80', tag: 'Evenings', title: 'Sunsets & Serenity', description: "Antigua's western coast is renowned for the most breathtaking sunsets in the entire Caribbean." },
  { image: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?w=700&q=80', tag: 'Under the Water', title: 'Marine Life', description: 'Discover the vibrant underwater world of Antigua — crystal-clear waters teeming with turtles, reef fish, and pristine coral.' },
]

const villaCards = [
  { image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80', category: 'Premium Collection', title: 'Ocean View Estates', isHero: true },
  { image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=700&q=80', category: 'Waterfront', title: 'Beachfront Retreats', isHero: false },
  { image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80', category: 'Architecture', title: 'Bespoke Design with KSR', isHero: false },
]

const antiguaDetails = [
  { title: '4 Hours', description: 'Direct from New York' },
  { title: '8 Hours', description: 'Direct from Europe' },
  { title: '365 Beaches', description: 'One for every day' },
  { title: 'Stable', description: 'Growing economy & government' },
]

interface HomePageProps {
  cmsData?: Record<string, any> | null
}

export default function HomePage({ cmsData }: HomePageProps) {
  const hero = deepMerge(heroData, cmsData?.hero)
  const intro = deepMerge(introData, cmsData?.intro)
  const lifestyle = cmsData?.lifestyle?.cards?.length ? cmsData.lifestyle.cards : lifestyleCards
  const villas = cmsData?.villas?.cards?.length ? cmsData.villas.cards : villaCards
  const antigua = cmsData?.antigua?.details?.length ? cmsData.antigua.details : antiguaDetails

  // Quote section
  const quoteText = cmsData?.quote?.text || "An investment in Pearns Point is an investment in an unparalleled way of life — where every sunrise brings possibility and every sunset is a masterpiece."
  const quoteAttribution = cmsData?.quote?.attribution || "Pearns Point, Antigua & Barbuda"

  // Antigua section text
  const antiguaSection = cmsData?.antigua || {}
  const antiguaEyebrow = antiguaSection.eyebrow || 'The Island'
  const antiguaTitle = antiguaSection.title || 'Antigua, Jewel of<br />the <em className="font-light italic">Caribbean</em>'
  const antiguaBody = antiguaSection.body || 'A hidden jewel of pure tranquility and immense beauty. Antigua offers exceptional cuisine, world-class sailing, a vibrant culture, and a growing economy backed by a politically stable government — making it an ideal destination for lifestyle and investment alike.'
  const antiguaImage = antiguaSection.image || 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80'
  const antiguaBadgeNumber = antiguaSection.badgeNumber || '365'
  const antiguaBadgeLabel = antiguaSection.badgeLabel || 'beaches'

  // Lifestyle section text
  const lifestyleTitle = cmsData?.lifestyle?.title || 'More Than a Home.<br />A Way of <em className="font-light italic">Living.</em>'
  const lifestyleSubtitle = cmsData?.lifestyle?.subtitle || 'Pearns Point is an invitation to an extraordinary life — where turquoise waters, world-class dining, and unhurried luxury define every single day.'

  return (
    <>
      {/* HERO */}
      <PageHero
        backgroundImage={hero.backgroundImage}
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        isHome={true}
        youtubeId="46A0w8iI8hs"
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex gap-4 justify-center max-sm:flex-col max-sm:items-center"
        >
          <Link
            href="/the-development"
            className="inline-block font-body text-[0.62rem] font-semibold tracking-[0.25em] uppercase text-navy bg-white px-11 py-4 transition-all duration-400 hover:bg-ocean hover:text-white hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(0,0,0,0.15)]"
            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
          >
            Explore the Peninsula
          </Link>
          <Link
            href="/lots-site-plan"
            className="inline-block font-body text-[0.62rem] font-medium tracking-[0.25em] uppercase text-white bg-transparent border-[1.5px] border-white/60 px-11 py-4 transition-all duration-400 hover:bg-white/15 hover:border-white"
            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
          >
            Discover the Lifestyle
          </Link>
        </motion.div>
      </PageHero>

      {/* INTRO */}
      <section className="py-[140px] px-[60px] max-lg:px-7 max-lg:py-[100px]">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[100px] items-start max-lg:grid-cols-1 max-lg:gap-[60px]">
          <ScrollReveal>
            <img
              src={intro.mainImage}
              alt="Caribbean waterfront"
              className="w-full aspect-[5/4] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
            />
          </ScrollReveal>
          <ScrollReveal>
            <h2
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
              dangerouslySetInnerHTML={{ __html: intro.title }}
            />
            <GoldRule className="my-7" />
            <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[520px]">
              {intro.body}
            </p>
            <div className="flex gap-10 mt-12 pt-9 border-t border-sand max-sm:flex-col max-sm:gap-5">
              {intro.stats.map((stat, i) => (
                <div key={i}>
                  <div className="font-display text-[2.6rem] font-normal text-ocean leading-none">
                    {stat.number}
                  </div>
                  <div className="text-[0.6rem] font-medium tracking-[0.15em] uppercase text-prose-light mt-1.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FULL-WIDTH IMAGE */}
      <section className="px-[60px] max-lg:px-7 pb-[60px]">
        <ScrollReveal>
          <img
            src="https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=1600&q=80"
            alt="Pearns Point peninsula aerial view"
            className="w-full aspect-[21/9] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
          />
        </ScrollReveal>
      </section>

      {/* LIFESTYLE */}
      <section className="bg-white overflow-hidden">
        <ScrollReveal className="text-center py-[120px] pb-16 px-[60px] max-lg:px-7">
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5" dangerouslySetInnerHTML={{ __html: lifestyleTitle }} />
          <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[580px] mx-auto">
            {lifestyleSubtitle}
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-5 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {lifestyle.map((card: any, i: number) => (
            <Link key={i} href="/the-antigua-experience" className="block">
              <LifestyleCard {...card} />
            </Link>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <QuoteStrip
        text={quoteText}
        attribution={quoteAttribution}
      />

      {/* RESIDENCES */}
      <section className="py-[140px] px-[60px] max-lg:px-7">
        <div className="max-w-content mx-auto">
          <ScrollReveal className="grid grid-cols-2 gap-[60px] items-end mb-16 max-lg:grid-cols-1">
            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy">
                Homes Designed for<br /><em className="font-light italic">Exceptional</em> Living
              </h2>
            </div>
            <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid">
              With only 49 plots available, homeowners join an exclusive enclave — each property commanding breathtaking panoramic views from ocean view or coastline positions. Build your dream home with total creative freedom, or collaborate with our award-winning architects at KSR to craft a residence that is uniquely yours.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-[1.3fr_1fr] grid-rows-[1fr_1fr] gap-5 h-[700px] max-lg:grid-cols-1 max-lg:h-auto">
              {villas.map((card: any, i: number) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-[4px] cursor-pointer ${
                    card.isHero ? 'row-span-2 max-lg:row-auto max-lg:min-h-[400px]' : 'max-lg:min-h-[320px]'
                  }`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-9"
                    style={{ background: 'linear-gradient(to top, rgba(26,47,58,0.8) 0%, transparent 100%)' }}
                  >
                    <span className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-white/65">
                      {card.category}
                    </span>
                    <h3 className="font-display text-[1.35rem] font-normal text-white">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ANTIGUA */}
      <section className="py-[140px] px-[60px] max-lg:px-7 bg-white">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[100px] items-center max-lg:grid-cols-1 max-lg:gap-[60px]">
          <ScrollReveal>
            <div className="relative">
              <img
                src={antiguaImage}
                alt="Antigua harbour"
                className="w-full aspect-[4/5] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
              />
              <div className="absolute -top-6 -right-6 w-[130px] h-[130px] rounded-full bg-ocean flex items-center justify-center text-center shadow-[0_8px_24px_rgba(26,122,138,0.3)]">
                <div>
                  <strong className="block font-display text-[2rem] font-normal text-white leading-none">{antiguaBadgeNumber}</strong>
                  <span className="text-[0.6rem] font-normal tracking-[0.1em] text-white/70">{antiguaBadgeLabel}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
              {antiguaEyebrow}
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5" dangerouslySetInnerHTML={{ __html: antiguaTitle }} />
            <GoldRule className="my-7" />
            <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[520px]">
              {antiguaBody}
            </p>
            <div className="grid grid-cols-2 gap-7 mt-11">
              {antigua.map((detail: any, i: number) => (
                <div key={i} className="pt-5 border-t-2 border-sand">
                  <h4 className="font-display text-[1.3rem] font-normal text-ocean mb-1">{detail.title}</h4>
                  <p className="text-[0.72rem] font-light text-prose-light leading-[1.5]">{detail.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DEVELOPER STRIP */}
      <section className="py-20 px-[60px] max-lg:px-7 bg-navy text-center">
        <div className="max-w-[1000px] mx-auto flex items-center justify-center gap-[60px] flex-wrap max-sm:flex-col max-sm:gap-6">
          <p className="font-body text-[0.62rem] font-normal tracking-[0.25em] uppercase text-white/40">
            Developed by
          </p>
          <span className="font-display text-[1.1rem] font-normal text-white/50 tracking-[0.08em] px-1 border-b border-white/10">
            Orange Limited
          </span>
        </div>
      </section>
    </>
  )
}
