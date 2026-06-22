'use client'

import PageHero from '@/components/global/PageHero'
import ScrollReveal from '@/components/global/ScrollReveal'
import StaggerReveal, { staggerItem } from '@/components/global/StaggerReveal'
import GoldRule from '@/components/global/GoldRule'
import QuoteStrip from '@/components/global/QuoteStrip'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import { motion } from 'framer-motion'
import Link from 'next/link'

/* Badge styles for the project lot-type tags, keyed by the `color` set in Sanity. */
const lotTypeStyles: Record<string, string> = {
  ocean: 'text-ocean bg-[#e0f2f8] border-ocean/15',
  lagoon: 'text-lagoon bg-[#e0f7fa] border-lagoon/15',
  gold: 'text-gold-warm bg-[#f5f0e0] border-gold-warm/15',
  'gold-warm': 'text-gold-warm bg-[#f5f0e0] border-gold-warm/15',
}

/* ═══════════════════════════════════════════
   AMENITY DATA
═══════════════════════════════════════════ */
const amenities = [
  {
    icon: (
      <svg className="w-[52px] h-[52px] text-ocean" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 14 H40 L26 30 Z" />
        <line x1="26" y1="30" x2="26" y2="42" />
        <line x1="18" y1="42" x2="34" y2="42" />
        <line x1="33" y1="14" x2="41" y2="7" />
        <circle cx="42" cy="6" r="1.6" />
      </svg>
    ),
    title: 'Beach Bar & Restaurant',
    description: 'Dine oceanside with Caribbean-inspired cuisine and international fine dining.',
  },
  {
    icon: (
      <svg className="w-[52px] h-[52px] text-ocean" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 16 q5 -5 10 0 t10 0 t10 0 t10 0" />
        <path d="M6 26 q5 -5 10 0 t10 0 t10 0 t10 0" />
        <path d="M6 36 q5 -5 10 0 t10 0 t10 0 t10 0" />
      </svg>
    ),
    title: 'Swimming Pool',
    description: 'An infinity-edge pool overlooking the Caribbean Sea and surrounding islands.',
  },
  {
    icon: (
      <svg className="w-[52px] h-[52px] text-ocean" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="26" cy="26" r="17" />
        <path d="M13 15 Q24 26 13 37" />
        <path d="M39 15 Q28 26 39 37" />
      </svg>
    ),
    title: 'Tennis Courts',
    description: 'Championship-standard courts set amongst the tropical landscape.',
  },
  {
    icon: (
      <svg className="w-[52px] h-[52px] text-ocean" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="17" y1="26" x2="35" y2="26" />
        <rect x="11" y="19" width="6" height="14" rx="1.5" />
        <rect x="35" y="19" width="6" height="14" rx="1.5" />
        <line x1="8" y1="22" x2="8" y2="30" />
        <line x1="44" y1="22" x2="44" y2="30" />
      </svg>
    ),
    title: 'Fitness Centre',
    description: 'State-of-the-art wellness and fitness facilities for residents.',
  },
]

/* ═══════════════════════════════════════════
   DEVELOPER HIGHLIGHTS DATA
═══════════════════════════════════════════ */
const developerHighlights = [
  {
    title: 'Conservation',
    description: 'Sponsor of major wildlife projects in South Africa',
  },
  {
    title: 'Sustainable',
    description: 'Ecologically sensitive development practices',
  },
  {
    title: 'Experienced',
    description: 'Proven track record in luxury real estate',
  },
  {
    title: 'Community',
    description: 'Active sponsors of local Antiguan charities',
  },
]

/* ═══════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════ */
interface Props {
  cmsData?: Record<string, any> | null
}

export default function TheDevelopmentPage({ cmsData }: Props) {
  const heroImage = cmsData?.heroImage || 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1920&q=85'
  const heroEyebrow = cmsData?.heroEyebrow || 'Pearns Point'
  const heroTitle = cmsData?.heroTitle || 'The <em>Development</em>'

  // Vision
  const visionEyebrow = cmsData?.vision?.eyebrow || 'The Vision'
  const visionTitle = cmsData?.vision?.title || 'A Long-Term Vision,<br><em class="italic font-light">Beautifully</em> Realised'
  const visionBody = cmsData?.vision?.body || "Pearns Point marks the realisation of a long-term vision. Immersed in a bounty of nature, this exclusive development inhabits a beautiful peninsula on Antigua\u2019s west coast. Notable for its spectacular vistas across intimate white-sand beaches and turquoise waters to the islands of Montserrat, Redonda, and St Kitts and Nevis \u2014 Pearns Point is secluded yet conveniently close to the island\u2019s main attractions."
  const visionMainImage = cmsData?.vision?.images?.[0] || 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80'
  const visionFloatImage = cmsData?.vision?.floatImage || cmsData?.vision?.images?.[1] || 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=500&q=80'

  // Project
  const projectEyebrow = cmsData?.project?.eyebrow || 'The Project'
  const projectTitle = cmsData?.project?.title || 'Your Perfect Plot,<br>Your <em class="italic font-light">Perfect</em> Home'
  const projectBody = cmsData?.project?.body || "A spectacular choice of lots are available for sale on this remarkable peninsula. Subject to restrictive covenants that respect the low density, luxury vision for the peninsula, the Developer can also make available experienced design, planning and construction teams to build out your dream villa."
  const projectImage = cmsData?.project?.image || 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80'
  // Lot-type badges are driven entirely by Sanity — remove them there to hide them.
  const lotTypes = cmsData?.project?.lotTypes ?? []

  // Amenities
  const amenitiesEyebrow = cmsData?.amenities?.eyebrow || "Owners' Facilities"
  const amenitiesTitle = cmsData?.amenities?.title || 'A Community Built on<br><em class="italic font-light">Luxury</em> &amp; Lifestyle'
  // Amenity cards take their text from Sanity, keeping the local SVG icons by position.
  const displayAmenities = cmsData?.amenities?.cards?.length
    ? cmsData.amenities.cards.map((c: any, i: number) => ({
        icon: amenities[i]?.icon ?? amenities[0].icon,
        title: c.title,
        description: c.description,
      }))
    : amenities

  // Quote
  const quoteText = cmsData?.quote?.text || "A luxurious sanctuary that respects the rich local inheritance and culture of Antigua — ecologically sensitive and financially exceptional."

  // Developer
  const devEyebrow = cmsData?.developer?.eyebrow || 'The Developer'
  const devTitle = cmsData?.developer?.title || 'Orange <em class="italic font-light">Limited</em>'
  const devBody = cmsData?.developer?.body || "Pearns Point is owned by luxury property developers Orange Limited, led by Dutch entrepreneur Albert Hartog and his partners. Together, they have been creating one of the most exclusive projects in the Caribbean \u2014 a luxurious sanctuary that respects the rich local inheritance and culture of Antigua, while protecting local ecosystems in a sustainable way."
  const devImage = cmsData?.developer?.image || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
  const devHighlights = cmsData?.developer?.highlights?.length ? cmsData.developer.highlights : developerHighlights

  return (
    <>
      {/* ─── PAGE HERO ─── */}
      <PageHero
        eyebrow={heroEyebrow}
        title={heroTitle}
        backgroundImage={heroImage}
      />

      {/* ═══════════════════════════════════════════
          THE VISION
      ═══════════════════════════════════════════ */}
      <section className="pt-[100px] pb-[140px] px-[60px] max-lg:px-7">
        <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[100px] max-lg:gap-[60px] items-center">
          {/* Images */}
          <ScrollReveal>
            <div className="relative">
              <img
                src={visionMainImage}
                alt="Peninsula aerial view"
                className="w-full aspect-[4/5] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
              />
              <img
                src={visionFloatImage}
                alt="White sand beach"
                className="absolute -bottom-[30px] -right-[40px] w-1/2 aspect-square object-cover rounded-[4px] border-[5px] border-cream shadow-[0_16px_40px_rgba(0,0,0,0.1)] max-lg:hidden"
              />
            </div>
          </ScrollReveal>

          {/* Text */}
          <StaggerReveal>
            <motion.p
              variants={staggerItem}
              className="text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4"
            >
              {visionEyebrow}
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
              dangerouslySetInnerHTML={{ __html: visionTitle }}
            />
            <motion.div variants={staggerItem}>
              <GoldRule />
            </motion.div>
            <motion.p
              variants={staggerItem}
              className="text-[1.1rem] font-light leading-[1.85] text-prose-mid max-w-[560px]"
            >
              {visionBody}
            </motion.p>
          </StaggerReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE PROJECT
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-[140px] px-[60px] max-lg:px-7">
        <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[100px] max-lg:gap-[60px] items-center">
          {/* Content (order 1 on desktop) */}
          <StaggerReveal className="order-1">
            <motion.p
              variants={staggerItem}
              className="text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4"
            >
              {projectEyebrow}
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
              dangerouslySetInnerHTML={{ __html: projectTitle }}
            />
            <motion.div variants={staggerItem}>
              <GoldRule />
            </motion.div>
            <motion.p
              variants={staggerItem}
              className="text-[1.1rem] font-light leading-[1.85] text-prose-mid max-w-[560px]"
            >
              {projectBody}
            </motion.p>
            {lotTypes.length > 0 && (
              <motion.div
                variants={staggerItem}
                className="flex gap-3 mt-9 flex-wrap max-sm:flex-col"
              >
                {lotTypes.map((lt: any, i: number) => (
                  <span
                    key={i}
                    className={`text-[0.6rem] font-semibold tracking-[0.2em] uppercase px-5 py-[10px] rounded-[2px] border ${lotTypeStyles[lt.color] || lotTypeStyles.ocean}`}
                  >
                    {lt.label}
                  </span>
                ))}
              </motion.div>
            )}
          </StaggerReveal>

          {/* Visual (order 2 on desktop) */}
          <ScrollReveal className="order-2">
            <img
              src={projectImage}
              alt="Luxury villa design"
              className="w-full aspect-[3/4] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COMMUNITY — AMENITIES
      ═══════════════════════════════════════════ */}
      <section className="py-[140px] px-[60px] max-lg:px-7">
        <div className="max-w-content mx-auto">
          {/* Header */}
          <StaggerReveal className="text-center mb-[72px]">
            <motion.p
              variants={staggerItem}
              className="text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4"
            >
              {amenitiesEyebrow}
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
              dangerouslySetInnerHTML={{ __html: amenitiesTitle }}
            />
            <motion.p
              variants={staggerItem}
              className="text-[1.1rem] font-light leading-[1.85] text-prose-mid max-w-[620px] mx-auto"
            >
              Pearns Point owners will enjoy access to an exciting range of amenities on the
              main beach and public areas — ensuring a sense of sociability and community as
              and when the mood suits.
            </motion.p>
          </StaggerReveal>

          {/* Amenities Grid */}
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayAmenities.map((amenity: any) => (
              <motion.div
                key={amenity.title}
                variants={staggerItem}
                className="text-center px-7 py-11 bg-white rounded-[4px] border border-black/[0.04] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
              >
                <div className="flex justify-center mb-5">{amenity.icon}</div>
                <h3 className="font-display text-[1.15rem] font-normal text-navy mb-2">
                  {amenity.title}
                </h3>
                <p className="text-[0.75rem] font-light leading-[1.65] text-prose-light">
                  {amenity.description}
                </p>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          QUOTE STRIP
      ═══════════════════════════════════════════ */}
      <QuoteStrip
        text={quoteText}
      />

      {/* ═══════════════════════════════════════════
          THE DEVELOPER
      ═══════════════════════════════════════════ */}
      <section className="bg-white py-[140px] px-[60px] max-lg:px-7">
        <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[100px] max-lg:gap-[60px] items-center">
          {/* Image */}
          <ScrollReveal>
            <img
              src={devImage}
              alt="Luxury development"
              className="w-full aspect-[3/2] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
            />
          </ScrollReveal>

          {/* Content */}
          <StaggerReveal>
            <motion.p
              variants={staggerItem}
              className="text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4"
            >
              {devEyebrow}
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
              dangerouslySetInnerHTML={{ __html: devTitle }}
            />
            <motion.div variants={staggerItem}>
              <GoldRule />
            </motion.div>
            <motion.p
              variants={staggerItem}
              className="text-[1.1rem] font-light leading-[1.85] text-prose-mid max-w-[560px]"
            >
              {devBody}
            </motion.p>

            {/* Developer Highlights */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10"
            >
              {devHighlights.map((highlight: any) => (
                <div
                  key={highlight.title}
                  className="pt-5 border-t-2 border-sand"
                >
                  <h4 className="font-display text-[1.1rem] font-normal text-ocean mb-1">
                    {highlight.title}
                  </h4>
                  <p className="text-[0.72rem] font-light text-prose-light leading-[1.5]">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </StaggerReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA BAND
      ═══════════════════════════════════════════ */}
      <section className="py-20 px-[60px] max-lg:px-7 text-center bg-sand-light">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-normal text-navy mb-3">
            Ready to Explore
            <br />
            <em className="italic font-light">Pearns Point?</em>
          </h2>
          <p className="text-[0.85rem] font-light text-prose-mid mb-8">
            Discover the lots available and begin your journey to the Caribbean&apos;s most
            exclusive address.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-sm:flex-col max-sm:items-center">
            <ButtonPrimary href="/lots-site-plan">
              View Lots &amp; Site Plan
            </ButtonPrimary>
            <Link
              href="/contact"
              className="inline-block font-body text-[0.62rem] font-medium tracking-[0.25em] uppercase text-ocean bg-transparent px-12 py-4 border-[1.5px] border-ocean transition-all duration-[400ms] hover:bg-ocean hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
