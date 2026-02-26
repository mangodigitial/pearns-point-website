'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/global/PageHero'
import ScrollReveal from '@/components/global/ScrollReveal'
import StaggerReveal, { staggerItem } from '@/components/global/StaggerReveal'
import GoldRule from '@/components/global/GoldRule'
import QuoteStrip from '@/components/global/QuoteStrip'
import CTABand from '@/components/global/CTABand'
import DesignCard from '@/components/cards/DesignCard'

/* ─── Design Cards Data ─── */
const designCards = [
  {
    tag: 'Option A',
    title: 'Caribbean <em>Chic</em>',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    imageAlt: 'Caribbean Chic villa',
    description:
      'Timeless Caribbean elegance reimagined. Refined proportions, natural stone, and graceful archways create a sense of enduring luxury that feels both grand and perfectly at home on the island.',
    features: [
      'Open-plan living',
      'Infinity pool',
      '5,000+ sq ft',
      'Natural stone & timber',
      'Panoramic terraces',
      'Energy efficient',
    ],
  },
  {
    tag: 'Option B',
    title: 'Naturally <em>Modern</em>',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    imageAlt: 'Naturally Modern villa',
    description:
      'Clean lines and contemporary forms embrace the landscape. Floor-to-ceiling glass, horizontal planes, and natural timber create a seamless connection between interior spaces and the Caribbean beyond.',
    features: [
      'Floor-to-ceiling glass',
      'Infinity pool',
      '5,000+ sq ft',
      'Indoor/outdoor flow',
      'Trade wind cooling',
      'Minimal maintenance',
    ],
  },
  {
    tag: 'Option C',
    title: 'Caribbean <em>Connected</em>',
    image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&q=80',
    imageAlt: 'Caribbean Connected villa',
    description:
      'A design that celebrates the relationship between architecture and nature. Interconnected pavilions, covered walkways, and open courtyards weave through the tropical landscape — blurring the boundaries between home and paradise.',
    features: [
      'Pavilion layout',
      'Infinity pool',
      '5,000+ sq ft',
      'Covered walkways',
      'Courtyard living',
      'Landscape integrated',
    ],
  },
]

/* ─── Timeline Steps Data ─── */
const timelineSteps = [
  {
    number: 1,
    title: 'Choose Your Plot',
    description:
      'Select from our available beachfront, ocean front, or ocean view lots. Our team will help you understand the unique character, views, and potential of each position on the peninsula.',
  },
  {
    number: 2,
    title: 'Select Your Design',
    description:
      'Choose between the Caribbean Chic, Naturally Modern, or Caribbean Connected villa design. Each can be tailored to your preferences while maintaining the architectural integrity of the development.',
  },
  {
    number: 3,
    title: 'Personalise & Refine',
    description:
      'Work with our architects to customise finishes, layouts, and features. From kitchen specifications to pool positioning — every detail is considered and agreed before construction begins.',
  },
  {
    number: 4,
    title: 'Construction & Updates',
    description:
      "Our experienced local contractors build your villa to the highest international standards. You'll receive regular progress updates, photography, and site reports throughout.",
  },
  {
    number: 5,
    title: 'Handover & Welcome',
    description:
      'Your completed turnkey villa is ready. Keys in hand, step into your new Caribbean home — fully finished, fully furnished, and ready to enjoy from day one.',
  },
]

/* ─── Included Items Data ─── */
const includedItems = [
  'Land plot of your choice (\u00BD acre minimum)',
  '5,000+ sq ft luxury villa, fully constructed',
  'Private infinity pool and landscaped gardens',
  'Full interior fit-out and furnishing',
  'All utilities, connections, and infrastructure',
  'Eligible for Citizenship by Investment Programme',
]

/* ─── Partner Data ─── */
const partners = [
  { name: 'Orange Limited', role: 'Developer' },
  { name: 'KSR Architects', role: 'Architecture & Design' },
  { name: 'Studio Piet Boon', role: 'Interior Design' },
  { name: 'James Hamilton Architects', role: 'Architecture & Masterplanning' },
]

interface Props {
  cmsData?: Record<string, any> | null
}

export default function PlotAndPlanPage({ cmsData }: Props) {
  const heroImage = cmsData?.heroImage || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85'
  const heroEyebrow = cmsData?.heroEyebrow || 'Turnkey Luxury'
  const heroTitle = cmsData?.heroTitle || 'Plot and <em>Plan</em>'
  const heroSubtitle = cmsData?.heroSubtitle || 'For the first time, Pearns Point offers pre-designed luxury villas at a final price — giving you simplicity, peace of mind, and a home crafted by world-class architects.'

  // Intro
  const introEyebrow = cmsData?.intro?.eyebrow || 'The Programme'
  const introTitle = cmsData?.intro?.title || 'Your Dream Home,<br><em class="font-light italic">Delivered</em>'
  const introBody = cmsData?.intro?.body || null

  // Designs
  const displayDesigns = cmsData?.designs?.length ? cmsData.designs.map((d: any) => ({
    tag: d.optionLabel || '',
    title: d.name || '',
    image: d.image || '',
    imageAlt: d.name || '',
    description: d.description || '',
    features: d.features || [],
  })) : designCards

  // Process
  const displayProcess = cmsData?.process?.length ? cmsData.process.map((s: any) => ({
    number: s.stepNumber || 0,
    title: s.title || '',
    description: s.description || '',
  })) : timelineSteps

  // What's included
  const displayIncluded = cmsData?.whatsIncluded?.length ? cmsData.whatsIncluded : includedItems

  // Pricing
  const pricingEyebrow = cmsData?.pricing?.eyebrow || 'Investment'
  const pricingTitle = cmsData?.pricing?.title || 'Turnkey Villas<br><em class="font-light italic">Starting From</em>'
  const pricingPrice = cmsData?.pricing?.price || 'US $6,000,000'
  const pricingSubtitle = cmsData?.pricing?.subtitle || null

  // Partners
  const displayPartners = cmsData?.partners?.length ? cmsData.partners : partners

  return (
    <>
      {/* ── PAGE HERO ── */}
      <PageHero
        backgroundImage={heroImage}
        eyebrow={heroEyebrow}
        title={heroTitle}
        subtitle={heroSubtitle}
      />

      {/* ── INTRO ── */}
      <section className="py-[100px] pb-[140px] px-[60px] max-lg:px-7 max-lg:py-[80px]">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[100px] items-center max-lg:grid-cols-1 max-lg:gap-[60px]">
          <ScrollReveal>
            <img
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80"
              alt="Luxury villa exterior"
              className="w-full aspect-[4/5] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
            />
          </ScrollReveal>
          <ScrollReveal>
            <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
              {introEyebrow}
            </p>
            <h2
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
              dangerouslySetInnerHTML={{ __html: introTitle }}
            />
            <GoldRule className="my-7" />
            {introBody ? (
              <div
                className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px] [&>p+p]:mt-4"
                dangerouslySetInnerHTML={{ __html: introBody }}
              />
            ) : (
              <>
                <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px]">
                  Developing an overseas luxury home in the tropics is a dream for many — but managing a
                  project remotely can be challenging. Our Plot &amp; Plan programme removes the complexity
                  entirely.
                </p>
                <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px] mt-4">
                  Choose between three stunning design styles, select your plot, and our team of
                  internationally renowned architects and experienced local contractors will deliver a
                  finished turnkey villa — on time, on budget, and to the highest international standards.
                </p>
              </>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* ── THREE DESIGN OPTIONS ── */}
      <section className="py-[140px] px-[60px] max-lg:px-7 bg-white">
        <ScrollReveal className="text-center mb-[72px] max-w-[700px] mx-auto">
          <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
            Choose Your Style
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5">
            Three Visions of<br /><em className="font-light italic">Caribbean</em> Living
          </h2>
          <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[600px] mx-auto">
            Three distinctive designs created by internationally renowned architects with intimate
            knowledge of Pearns Point — each offering the perfect balance of tropical indoor/outdoor
            living.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-3 gap-8 max-w-content mx-auto max-lg:grid-cols-1 max-lg:max-w-[600px]">
          {displayDesigns.map((card: any, i: number) => (
            <ScrollReveal key={i}>
              <DesignCard {...card} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── THE PROCESS (TIMELINE) ── */}
      <section className="py-[140px] px-[60px] max-lg:px-7">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal className="text-center mb-20">
            <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
              The Process
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5">
              From Selection<br />to <em className="font-light italic">Move-In</em>
            </h2>
            <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[580px] mx-auto">
              We guide you through every step — from choosing your plot and design, through
              construction, to handing you the keys to your completed Caribbean home.
            </p>
          </ScrollReveal>

          {/* Timeline */}
          <ScrollReveal className="max-w-[620px] mx-auto">
            <div className="relative pl-[60px] max-sm:pl-12">
              {/* Vertical line */}
              <div
                className="absolute left-[19px] max-sm:left-[15px] top-0 bottom-0 w-[2px]"
                style={{
                  background: 'linear-gradient(180deg, #1a7a8a, #48b5c4, #e8dfd2)',
                }}
              />
              {displayProcess.map((step: any, i: number) => (
                <motion.div
                  key={i}
                  className={`relative pl-10 max-sm:pl-8 ${i < displayProcess.length - 1 ? 'pb-[60px]' : ''}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.12,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  {/* Dot */}
                  <div className="absolute -left-[51px] max-sm:-left-[39px] top-[2px] w-10 h-10 max-sm:w-8 max-sm:h-8 rounded-full bg-white border-2 border-ocean flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
                    <span className="font-display text-[0.85rem] max-sm:text-[0.75rem] font-medium text-ocean">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-[1.3rem] font-normal text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[0.82rem] font-light leading-[1.8] text-prose-mid max-w-[500px]">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-[120px] px-[60px] max-lg:px-7 bg-white">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-20 items-center max-lg:grid-cols-1 max-lg:gap-12">
          <ScrollReveal>
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
              alt="Luxury villa interior"
              className="w-full aspect-[4/3] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
            />
          </ScrollReveal>
          <ScrollReveal>
            <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
              Turnkey Delivery
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5">
              Everything <em className="font-light italic">Included</em>
            </h2>
            <GoldRule className="my-7" />
            <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px]">
              Your Plot & Plan villa is delivered as a complete, ready-to-live-in home. No additional
              costs, no surprises — a final price that covers everything.
            </p>
            <ul className="mt-8 list-none">
              {displayIncluded.map((item: string, i: number) => (
                <li
                  key={i}
                  className={`flex items-start gap-3.5 py-4 border-b border-sand-light text-[0.82rem] font-light text-prose-mid leading-[1.6] ${i === 0 ? 'border-t' : ''}`}
                >
                  <svg
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-[18px] h-[18px] shrink-0 text-ocean mt-0.5"
                  >
                    <polyline points="3,9 7,13 15,5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PRICING BAND ── */}
      <section className="py-20 px-[60px] max-lg:px-7 bg-navy text-center">
        <ScrollReveal className="max-w-[800px] mx-auto">
          <p className="text-[0.58rem] font-semibold tracking-[0.4em] uppercase text-lagoon mb-4">
            {pricingEyebrow}
          </p>
          <h2
            className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-normal text-white leading-[1.3] mb-2"
            dangerouslySetInnerHTML={{ __html: pricingTitle }}
          />
          <div className="font-display text-[1.8rem] font-light text-lagoon my-5">
            {pricingPrice}
          </div>
          {pricingSubtitle ? (
            <p
              className="text-[0.78rem] font-light text-white/[0.45] mb-9 leading-[1.6]"
              dangerouslySetInnerHTML={{ __html: pricingSubtitle }}
            />
          ) : (
            <p className="text-[0.78rem] font-light text-white/[0.45] mb-9 leading-[1.6]">
              Including land, construction, pool, landscaping, and full interior fit-out.<br />
              Villas of 5,000 sq ft with pools on &frac12; acre lots.
            </p>
          )}
          <a
            href="/contact"
            className="inline-block font-body text-[0.62rem] font-semibold tracking-[0.25em] uppercase text-navy bg-white px-12 py-4 transition-all duration-400 hover:bg-lagoon hover:text-white hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(0,0,0,0.2)]"
            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
          >
            Speak to the Sales Team
          </a>
        </ScrollReveal>
      </section>

      {/* ── PARTNERS ── */}
      <section className="py-[100px] px-[60px] max-lg:px-7">
        <ScrollReveal className="max-w-content mx-auto text-center">
          <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
            Our Partners
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5">
            World-Class <em className="font-light italic">Expertise</em>
          </h2>
          <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[600px] mx-auto mb-12">
            The Plot & Plan programme brings together an exceptional team of international designers
            and experienced local construction partners.
          </p>
          <div className="flex justify-center gap-20 items-center flex-wrap max-sm:flex-col max-sm:gap-8">
            {displayPartners.map((partner: any, i: number) => (
              <div key={i} className="flex items-center gap-20 max-sm:flex-col max-sm:gap-8">
                <div className="text-center">
                  <div className="font-display text-[1.4rem] font-normal text-navy mb-1">
                    {partner.name}
                  </div>
                  <div className="text-[0.6rem] font-medium tracking-[0.2em] uppercase text-prose-light">
                    {partner.role}
                  </div>
                </div>
                {i < displayPartners.length - 1 && (
                  <div className="w-px h-[60px] bg-sand max-sm:w-[60px] max-sm:h-px" />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── CTA BAND ── */}
      <CTABand
        title='Interested in the<br><em>Plot & Plan</em> Programme?'
        subtitle="Contact our sales team for full brochures, pricing details, and to arrange a viewing trip to Antigua."
        primaryCTA={{ label: 'Request Full Brochure', href: '/contact' }}
        secondaryCTA={{ label: 'Contact Sales Team', href: '/contact' }}
      />
    </>
  )
}
