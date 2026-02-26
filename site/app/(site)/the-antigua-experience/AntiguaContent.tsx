'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/global/PageHero'
import ScrollReveal from '@/components/global/ScrollReveal'
import StaggerReveal, { staggerItem } from '@/components/global/StaggerReveal'
import GoldRule from '@/components/global/GoldRule'
import QuoteStrip from '@/components/global/QuoteStrip'
import CTABand from '@/components/global/CTABand'
import LifestyleCard from '@/components/cards/LifestyleCard'
import FlightRouteCard from '@/components/cards/FlightRouteCard'

/* ─── Data ─── */

const stats = [
  { num: '365', label: 'Beaches' },
  { num: '28', suffix: '\u00B0C', label: 'Avg Temperature' },
  { num: '8', suffix: 'hrs', label: 'From London' },
  { num: '4.5', suffix: 'hrs', label: 'From Miami' },
  { num: '300', suffix: '+', label: 'Days of Sunshine' },
]

const lifestyleCards = [
  {
    image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80',
    title: 'World-Class Sailing',
    description:
      'Home to Antigua Sailing Week \u2014 one of the world\u2019s premier regattas \u2014 and Nelson\u2019s Dockyard, a UNESCO World Heritage site.',
  },
  {
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    title: 'Exceptional Dining',
    description:
      'From beachside grills to sophisticated restaurants, the island\u2019s culinary scene blends Caribbean flavours with international cuisine.',
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    title: 'Pristine Beaches',
    description:
      'From the buzzing sands of Jolly Beach to hidden coves accessible only by boat \u2014 an endless variety of coastal paradise.',
  },
  {
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80',
    title: 'Yacht & Marina',
    description:
      'Antigua\u2019s marinas host superyachts from around the world. Charter a vessel for the day or moor your own at one of several luxury harbours.',
  },
]

const flightRoutes = [
  { city: 'London Gatwick', detail: '8h direct' },
  { city: 'New York JFK', detail: '4.5h direct' },
  { city: 'Miami', detail: '3.5h direct' },
  { city: 'Toronto', detail: '5h direct' },
]

const climateMonths = [
  { name: 'Jan', temp: 27 },
  { name: 'Feb', temp: 27 },
  { name: 'Mar', temp: 27 },
  { name: 'Apr', temp: 28 },
  { name: 'May', temp: 29 },
  { name: 'Jun', temp: 30 },
  { name: 'Jul', temp: 30 },
  { name: 'Aug', temp: 30 },
  { name: 'Sep', temp: 30 },
  { name: 'Oct', temp: 29 },
  { name: 'Nov', temp: 28 },
  { name: 'Dec', temp: 27 },
]

const experiences = [
  {
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    alt: "Nelson's Dockyard",
    title: 'Nelson\u2019s Dockyard &',
    titleItalic: 'English Harbour',
    text: 'A UNESCO World Heritage site and the only continuously working Georgian dockyard in the world. Explore restored naval buildings, waterfront restaurants, and a living piece of maritime history.',
    tags: ['UNESCO Heritage', 'Maritime History', 'Restaurants'],
  },
  {
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    alt: 'Golf and sports',
    title: 'Sport &',
    titleItalic: 'Wellness',
    text: 'From championship golf at Cedar Valley to kitesurfing, deep-sea fishing, tennis, and world-class spa retreats \u2014 Antigua caters to every level of sporting ambition and relaxation.',
    tags: ['Golf', 'Water Sports', 'Spa & Wellness'],
  },
  {
    image: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&q=80',
    alt: 'Island adventures',
    title: 'Nature &',
    titleItalic: 'Adventure',
    text: 'Hike to Shirley Heights for panoramic sunset views, kayak through mangrove reserves, snorkel coral reefs, or take a helicopter tour of the island\u2019s dramatic coastline.',
    tags: ['Shirley Heights', 'Snorkelling', 'Hiking', 'Eco Tours'],
  },
]


/* ─── Page ─── */

interface Props {
  cmsData?: Record<string, any> | null
}

export default function TheAntiguaExperiencePage({ cmsData }: Props) {
  const heroImage = cmsData?.heroImage || 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=85'
  const heroEyebrow = cmsData?.heroEyebrow || 'Island Life'
  const heroTitle = cmsData?.heroTitle || 'The Antigua <em>Experience</em>'
  const heroSubtitle = cmsData?.heroSubtitle || 'A Caribbean island of extraordinary natural beauty, rich culture, and world-class amenities \u2014 where every day feels like a holiday.'

  // Intro
  const introEyebrow = cmsData?.intro?.eyebrow || 'Discover Antigua'
  const introTitle = cmsData?.intro?.title || 'A Beach for<br>Every Day of <em class="font-light italic">the Year</em>'
  const introBody = cmsData?.intro?.body || null  // if null, keep hardcoded paragraphs
  const introImage = cmsData?.intro?.image || 'https://images.unsplash.com/photo-1509233725247-49e657c54213?w=800&q=80'
  const introBadgeNumber = cmsData?.intro?.badgeNumber || '365'
  const introBadgeLabel = cmsData?.intro?.badgeLabel || 'Beaches'

  // Stats
  const displayStats = cmsData?.stats?.length ? cmsData.stats.map((s: any) => ({
    num: s.number || '',
    suffix: s.suffix || '',
    label: s.label || '',
  })) : stats

  // Lifestyle
  const lifestyleEyebrow = cmsData?.lifestyle?.eyebrow || 'Island Lifestyle'
  const lifestyleTitle = cmsData?.lifestyle?.title || 'More Than<br>a <em class="font-light italic">Destination</em>'
  const lifestyleSubtitle = cmsData?.lifestyle?.subtitle || 'From world-class sailing regattas to sunset dining on the harbour, Antigua offers a lifestyle that blends Caribbean ease with international sophistication.'
  const displayLifestyleCards = cmsData?.lifestyle?.cards?.length ? cmsData.lifestyle.cards : lifestyleCards

  // Quote
  const quoteText = cmsData?.quote?.text || 'Antigua is a place where the pace of life slows, the sunsets never disappoint, and the sea is always just a few steps away.'

  // Getting Here
  const ghEyebrow = cmsData?.gettingHere?.eyebrow || 'Connectivity'
  const ghTitle = cmsData?.gettingHere?.title || 'Easy to Reach,<br>Hard to <em class="font-light italic">Leave</em>'
  const ghBody = cmsData?.gettingHere?.body || null
  const ghImage = cmsData?.gettingHere?.image || 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=800&q=80'
  const displayFlights = cmsData?.gettingHere?.flights?.length ? cmsData.gettingHere.flights.map((f: any) => ({
    city: f.city || '',
    detail: f.duration || '',
  })) : flightRoutes

  // Climate
  const climateEyebrow = cmsData?.climate?.eyebrow || 'Year-Round Sunshine'
  const climateTitle = cmsData?.climate?.title || 'The Perfect<br><em class="font-light italic">Climate</em>'
  const climateBody = cmsData?.climate?.body || null
  const climateImage = cmsData?.climate?.image || 'https://images.unsplash.com/photo-1476673160081-cf065607f449?w=800&q=80'
  const displayMonths = cmsData?.climate?.months?.length ? cmsData.climate.months.map((m: any) => ({
    name: m.name || '',
    temp: m.temp || 0,
  })) : climateMonths

  // Experiences
  const displayExperiences = cmsData?.experiences?.length ? cmsData.experiences.map((e: any) => ({
    image: e.image || '',
    alt: e.title || '',
    title: e.title?.split(' & ')?.[0] || e.title || '',
    titleItalic: e.title?.split(' & ')?.[1] || '',
    text: e.description || '',
    tags: e.tags || [],
  })) : experiences

  return (
    <>
      {/* HERO */}
      <PageHero
        backgroundImage={heroImage}
        eyebrow={heroEyebrow}
        title={heroTitle}
        subtitle={heroSubtitle}
      />

      {/* ═══ ISLAND INTRO ═══ */}
      <section className="py-[140px] px-[60px] max-lg:px-7 max-lg:py-[100px]">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[100px] items-center max-lg:grid-cols-1 max-lg:gap-12">
          {/* Visual */}
          <ScrollReveal>
            <div className="relative">
              <img
                src={introImage}
                alt="Antigua beach with palms"
                className="w-full aspect-[4/5] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
              />
              {/* 365 badge */}
              <div className="absolute -bottom-6 -right-6 w-[130px] h-[130px] rounded-full bg-ocean flex flex-col items-center justify-center shadow-[0_12px_40px_rgba(26,122,138,0.3)] max-sm:w-[100px] max-sm:h-[100px] max-sm:-bottom-4 max-sm:-right-2">
                <span className="font-display text-[2.2rem] font-light text-white leading-none max-sm:text-[1.6rem]">
                  {introBadgeNumber}
                </span>
                <span className="text-[0.5rem] font-semibold tracking-[0.2em] uppercase text-white/75 mt-1">
                  {introBadgeLabel}
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Copy */}
          <StaggerReveal>
            <motion.p
              variants={staggerItem}
              className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4"
            >
              {introEyebrow}
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
              dangerouslySetInnerHTML={{ __html: introTitle }}
            />
            <motion.div variants={staggerItem}>
              <GoldRule className="my-7" />
            </motion.div>
            {introBody ? (
              <motion.div
                variants={staggerItem}
                className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px]"
                dangerouslySetInnerHTML={{ __html: introBody }}
              />
            ) : (
              <>
                <motion.p
                  variants={staggerItem}
                  className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px]"
                >
                  Antigua is famed for its 365 beaches &mdash; one for every day of
                  the year. But beyond the powder-white sands and turquoise waters
                  lies a vibrant island of English Harbour history, world-class
                  sailing, exceptional dining, and a warm, welcoming culture.
                </motion.p>
                <motion.p
                  variants={staggerItem}
                  className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px] mt-4"
                >
                  With year-round sunshine, a stable economy, English-speaking
                  population, and excellent international connectivity, Antigua has
                  become one of the most desirable addresses in the Caribbean for
                  discerning investors and families alike.
                </motion.p>
              </>
            )}
          </StaggerReveal>
        </div>
      </section>

      {/* ═══ STATS BAND ═══ */}
      <ScrollReveal>
        <section className="py-20 px-[60px] max-lg:px-7 bg-navy flex justify-center gap-20 flex-wrap max-sm:gap-7">
          {displayStats.map((stat: any, i: number) => (
            <div key={i} className="text-center">
              <div className="font-display text-[clamp(2.4rem,4vw,3.6rem)] font-light text-white leading-none">
                {stat.num}
                {stat.suffix && (
                  <span className="text-[0.5em] align-super">{stat.suffix}</span>
                )}
              </div>
              <div className="text-[0.58rem] font-medium tracking-[0.25em] uppercase text-white/45 mt-2.5">
                {stat.label}
              </div>
            </div>
          ))}
        </section>
      </ScrollReveal>

      {/* ═══ LIFESTYLE PANELS ═══ */}
      <section className="py-[140px] px-[60px] max-lg:px-7">
        <div className="max-w-content mx-auto">
          <StaggerReveal className="text-center mb-[72px]">
            <motion.p
              variants={staggerItem}
              className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4"
            >
              {lifestyleEyebrow}
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
              dangerouslySetInnerHTML={{ __html: lifestyleTitle }}
            />
            <motion.p
              variants={staggerItem}
              className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[620px] mx-auto"
            >
              {lifestyleSubtitle}
            </motion.p>
          </StaggerReveal>

          <StaggerReveal className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
            {displayLifestyleCards.map((card: any, i: number) => (
              <motion.div key={i} variants={staggerItem}>
                <LifestyleCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  aspectClass="aspect-[4/3] max-lg:aspect-[16/9]"
                />
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ═══ QUOTE ═══ */}
      <QuoteStrip text={quoteText} />

      {/* ═══ GETTING HERE ═══ */}
      <section className="py-[140px] px-[60px] max-lg:px-7 bg-white">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[100px] items-center max-lg:grid-cols-1 max-lg:gap-12">
          {/* Copy */}
          <StaggerReveal>
            <motion.p
              variants={staggerItem}
              className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4"
            >
              {ghEyebrow}
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
              dangerouslySetInnerHTML={{ __html: ghTitle }}
            />
            <motion.div variants={staggerItem}>
              <GoldRule className="my-7" />
            </motion.div>
            {ghBody ? (
              <motion.div
                variants={staggerItem}
                className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px]"
                dangerouslySetInnerHTML={{ __html: ghBody }}
              />
            ) : (
              <motion.p
                variants={staggerItem}
                className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px]"
              >
                V.C. Bird International Airport connects Antigua to major cities
                across Europe, North America, and the Caribbean &mdash; with
                direct flights from London, New York, Miami, Toronto, and beyond.
              </motion.p>
            )}

            {/* Flight routes */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col gap-4 mt-8"
            >
              {displayFlights.map((route: any, i: number) => (
                <FlightRouteCard key={i} {...route} />
              ))}
            </motion.div>
          </StaggerReveal>

          {/* Image */}
          <ScrollReveal>
            <img
              src={ghImage}
              alt="Aerial view of island coastline"
              className="w-full aspect-[3/2] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CLIMATE ═══ */}
      <section className="py-[140px] px-[60px] max-lg:px-7">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[100px] items-center max-lg:grid-cols-1 max-lg:gap-12">
          {/* Image */}
          <ScrollReveal>
            <img
              src={climateImage}
              alt="Caribbean sunset"
              className="w-full aspect-[4/5] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
            />
          </ScrollReveal>

          {/* Copy + months grid */}
          <StaggerReveal>
            <motion.p
              variants={staggerItem}
              className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4"
            >
              {climateEyebrow}
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
              dangerouslySetInnerHTML={{ __html: climateTitle }}
            />
            <motion.div variants={staggerItem}>
              <GoldRule className="my-7" />
            </motion.div>
            {climateBody ? (
              <motion.div
                variants={staggerItem}
                className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px]"
                dangerouslySetInnerHTML={{ __html: climateBody }}
              />
            ) : (
              <motion.p
                variants={staggerItem}
                className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px]"
              >
                Antigua enjoys one of the sunniest, driest climates in the Eastern
                Caribbean. Cooled by the north-east trade winds, temperatures
                remain comfortable year-round &mdash; perfect for outdoor living
                every single day.
              </motion.p>
            )}

            {/* 12-month grid */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-4 gap-3 mt-9 max-sm:grid-cols-3"
            >
              {displayMonths.map((m: any, i: number) => (
                <div
                  key={i}
                  className="text-center py-4 px-2 bg-white rounded-[4px] border border-black/[0.04]"
                >
                  <div className="text-[0.55rem] font-semibold tracking-[0.15em] uppercase text-prose-light mb-1.5">
                    {m.name}
                  </div>
                  <div className="font-display text-[1.3rem] font-light text-ocean">
                    {m.temp}
                    <span className="text-[0.6em] align-super">&deg;</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </StaggerReveal>
        </div>
      </section>

      {/* ═══ EXPERIENCES ═══ */}
      <section className="py-[140px] pb-20 px-[60px] max-lg:px-7 bg-white">
        <StaggerReveal className="text-center max-w-content mx-auto mb-20">
          <motion.p
            variants={staggerItem}
            className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4"
          >
            Beyond the Beach
          </motion.p>
          <motion.h2
            variants={staggerItem}
            className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
          >
            An Island of<br />
            <em className="font-light italic">Experiences</em>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[620px] mx-auto"
          >
            Antigua offers far more than sun and sand &mdash; it&apos;s a
            vibrant island with a rich history, thriving culture, and endless
            adventures.
          </motion.p>
        </StaggerReveal>

        {/* Alternating rows */}
        {displayExperiences.map((exp: any, i: number) => {
          const isEven = i % 2 === 1
          return (
            <ScrollReveal
              key={i}
              className="max-w-content mx-auto grid grid-cols-2 gap-20 items-center py-[60px] max-lg:grid-cols-1 max-lg:gap-10"
            >
              {/* Image */}
              <div className={isEven ? 'order-2 max-lg:order-1' : ''}>
                <img
                  src={exp.image}
                  alt={exp.alt}
                  className="w-full aspect-[3/2] object-cover rounded-[4px] shadow-[0_20px_50px_rgba(0,0,0,0.07)]"
                />
              </div>

              {/* Content */}
              <div className={isEven ? 'order-1 max-lg:order-2' : ''}>
                <h3 className="font-display text-[1.6rem] font-normal text-navy mb-3">
                  {exp.title}{' '}
                  <em className="font-light italic">{exp.titleItalic}</em>
                </h3>
                <p className="text-[0.84rem] font-light leading-[1.85] text-prose-mid max-w-[460px]">
                  {exp.text}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.tags.map((tag: string, t: number) => (
                    <span
                      key={t}
                      className="text-[0.58rem] font-medium tracking-[0.12em] uppercase py-1.5 px-4 bg-ocean/[0.06] text-ocean rounded-[2px] border border-ocean/[0.12]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </section>

      {/* ═══ CTA ═══ */}
      <CTABand
        title='Make Antigua<br>Your <em>Home</em>'
        subtitle="Discover available plots at Pearns Point and begin your journey to Caribbean living."
        primaryCTA={{ label: 'Explore Lots', href: '/lots-site-plan' }}
        secondaryCTA={{ label: 'Enquire Now', href: '/contact' }}
      />
    </>
  )
}
