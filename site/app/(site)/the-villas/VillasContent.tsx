'use client'

import PageHero from '@/components/global/PageHero'
import ScrollReveal from '@/components/global/ScrollReveal'
import StaggerReveal from '@/components/global/StaggerReveal'
import GoldRule from '@/components/global/GoldRule'
import QuoteStrip from '@/components/global/QuoteStrip'
import CTABand from '@/components/global/CTABand'
import FeatureCard from '@/components/cards/FeatureCard'
import ArchitectCard from '@/components/cards/ArchitectCard'

/* ─── Feature Cards Data ─── */
const featureCards = [
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="4" y="16" width="36" height="24" rx="1"/><path d="M4 16 L22 4 L40 16"/></svg>',
    title: 'Horizontal Design',
    description:
      'Low-rise architecture maximises ocean views from every room while embracing the natural contours of the landscape.',
  },
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="22" cy="14" r="8"/><path d="M6 40 C6 28 38 28 38 40"/></svg>',
    title: 'Bespoke to You',
    description:
      'Work with world-class architects to personalise every detail — from layout and finishes to pool positioning and landscaping.',
  },
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M22 4C18 12 12 18 4 22C12 26 18 32 22 40C26 32 32 26 40 22C32 18 26 12 22 4Z"/><circle cx="22" cy="22" r="4"/></svg>',
    title: 'Natural Materials',
    description:
      'Locally sourced stone, timber, and natural materials connect each home to the Caribbean landscape and minimise ecological impact.',
  },
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M8 32 Q14 8 22 20 Q30 32 36 12"/><line x1="4" y1="38" x2="40" y2="38" stroke-width="1"/></svg>',
    title: 'Trade Wind Cooling',
    description:
      "Designed to harness Antigua's pervasive trade winds for natural ventilation — reducing energy consumption and keeping interiors cool year-round.",
  },
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="6" y="6" width="32" height="32" rx="2"/><line x1="6" y1="22" x2="38" y2="22"/><line x1="22" y1="6" x2="22" y2="38"/></svg>',
    title: 'Indoor/Outdoor Flow',
    description:
      'Floor-to-ceiling openings, covered terraces, and infinity pools dissolve the boundary between interior luxury and the natural beauty beyond.',
  },
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="22" cy="22" r="16"/><polyline points="22,12 22,22 30,26"/></svg>',
    title: 'Low Maintenance',
    description:
      'Engineered for the tropical climate using materials and systems that withstand the elements and require barely any ongoing maintenance.',
  },
]

/* ─── Architect Cards Data ─── */
const architectCards = [
  {
    name: 'KSR Architects',
    role: 'Architecture & Design',
    description:
      'Award-winning London-based architects with an international portfolio of luxury residential and hospitality projects. KSR bring a refined sensibility to tropical living.',
  },
  {
    name: 'Studio Piet Boon',
    role: 'Interior Design & Architecture',
    description:
      'One of the most notable and exclusive designers of our era, with an impressive portfolio of stunning hotels and homes across the globe. Studio Piet Boon creates bespoke contemporary architecture and interiors.',
  },
  {
    name: 'James Hamilton Architects',
    role: 'Architecture & Masterplanning',
    description:
      'A leading Caribbean architecture practice renowned for designing landmark luxury residences and resort developments that respond sensitively to tropical landscapes and island culture.',
  },
]

/* ─── Gallery Data ─── */
const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80',
    alt: 'Villa exterior panorama',
    className: 'col-span-2 aspect-[2/1]',
  },
  {
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&q=80',
    alt: 'Interior living space',
    className: 'aspect-square',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=80',
    alt: 'Pool and terrace',
    className: 'aspect-square',
  },
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&q=80',
    alt: 'Villa approach',
    className: 'aspect-square',
  },
  {
    src: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=500&q=80',
    alt: 'Bedroom with view',
    className: 'aspect-square',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=900&q=80',
    alt: 'Kitchen and dining',
    className: 'col-span-2 aspect-[2/1]',
  },
]

interface Props {
  cmsData?: Record<string, any> | null
}

export default function TheVillasPage({ cmsData }: Props) {
  const heroImage = cmsData?.heroImage || 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=85'
  const heroEyebrow = cmsData?.heroEyebrow || 'Architecture & Design'
  const heroTitle = cmsData?.heroTitle || 'The <em>Villas</em>'
  const heroSubtitle = cmsData?.heroSubtitle || 'Signature details and a horizontal design philosophy maximise the spectacular views — offering creative layout possibilities to suit every individual style.'

  // Philosophy
  const philEyebrow = cmsData?.philosophy?.eyebrow || 'Design Philosophy'
  const philTitle = cmsData?.philosophy?.title || 'Where Architecture<br>Meets <em class="font-light italic">Paradise</em>'
  const philBody = cmsData?.philosophy?.body || "Every villa at Pearns Point is designed around a horizontal philosophy \u2014 maximising the spectacular views from every room and providing creative layout possibilities to suit individual ideas and styles, whether modern or classical."
  const philBody2 = "Effective use of natural elements is paramount. The island\u2019s pervasive trade winds keep indoor temperatures cool, while locally sourced materials ensure each home feels intrinsically connected to its Caribbean surroundings."
  const philImage = cmsData?.philosophy?.image || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'

  // Showcase image
  const showcaseImage = cmsData?.showcaseImage || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80'

  // Features
  const featuresEyebrow = cmsData?.features?.eyebrow || 'Villa Features'
  const featuresTitle = cmsData?.features?.title || 'Designed for <em class="font-light italic">Durability</em>,<br>Built for Beauty'
  const featuresSubtitle = cmsData?.features?.subtitle || 'The villas are designed to ensure durability is assured, ecological impact is minimised, and barely any maintenance is required \u2014 so you can focus on living, not upkeep.'

  // Architects
  const archEyebrow = cmsData?.architects?.eyebrow || 'The Architects'
  const archTitle = cmsData?.architects?.title || 'World-Class<br><em class="font-light italic">Creative</em> Partners'
  const archBody = cmsData?.architects?.body || "Homeowners at Pearns Point have the opportunity to work with some of the most celebrated design studios in the world \u2014 or bring their own team, subject to architectural covenants that protect the peninsula\u2019s luxury vision."
  const archImage = cmsData?.architects?.image || 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80'
  const archPartners = cmsData?.architects?.partners?.length ? cmsData.architects.partners : architectCards

  // Quote
  const quoteText = cmsData?.quote?.text || 'Signature details and a horizontal design maximise the spectacular views and provide creative layout possibilities to suit individual ideas and styles.'

  // Bespoke
  const bespokeEyebrow = cmsData?.bespoke?.eyebrow || 'Your Own Vision'
  const bespokeTitle = cmsData?.bespoke?.title || 'Bring Your Own<br><em class="font-light italic">Design</em> Team'
  const bespokeBody = cmsData?.bespoke?.body || "While we offer access to internationally celebrated architects, homeowners are also free to engage their own design teams \u2014 subject to certain architectural and building covenants that protect the low-density, luxury character of the peninsula."
  const bespokeBody2 = "Whether you choose our recommended partners or bring your own vision, the result will be a home uniquely tailored to you \u2014 set within one of the most beautiful landscapes in the Caribbean."
  const bespokeImage = cmsData?.bespoke?.image || 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c0?w=800&q=80'

  return (
    <>
      {/* ── PAGE HERO ── */}
      <PageHero
        backgroundImage={heroImage}
        eyebrow={heroEyebrow}
        title={heroTitle}
        subtitle={heroSubtitle}
      />

      {/* ── DESIGN PHILOSOPHY ── */}
      <section className="py-[100px] pb-[140px] px-[60px] max-lg:px-7 max-lg:py-[80px]">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[100px] items-center max-lg:grid-cols-1 max-lg:gap-[60px]">
          <ScrollReveal>
            <img
              src={philImage}
              alt="Villa exterior design"
              className="w-full aspect-[4/5] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
            />
          </ScrollReveal>
          <ScrollReveal>
            <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
              {philEyebrow}
            </p>
            <h2
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
              dangerouslySetInnerHTML={{ __html: philTitle }}
            />
            <GoldRule className="my-7" />
            <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px]">
              {philBody}
            </p>
            <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px] mt-4">
              {philBody2}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FULL-WIDTH SHOWCASE IMAGE ── */}
      <ScrollReveal className="relative overflow-hidden h-[60vh] min-h-[400px]">
        <img
          src={showcaseImage}
          alt="Villa interior with ocean view"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(250,248,244,1) 0%, transparent 15%, transparent 85%, rgba(250,248,244,1) 100%)',
          }}
        />
      </ScrollReveal>

      {/* ── VILLA FEATURES ── */}
      <section className="py-[140px] px-[60px] max-lg:px-7">
        <div className="max-w-content mx-auto">
          <ScrollReveal className="text-center mb-[72px]">
            <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
              {featuresEyebrow}
            </p>
            <h2
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
              dangerouslySetInnerHTML={{ __html: featuresTitle }}
            />
            <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[620px] mx-auto">
              {featuresSubtitle}
            </p>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {featureCards.map((card, i) => (
              <FeatureCard key={i} {...card} />
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── THE ARCHITECTS ── */}
      <section className="py-[140px] px-[60px] max-lg:px-7 bg-white">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-2 gap-[100px] items-center max-lg:grid-cols-1 max-lg:gap-12">
            <ScrollReveal>
              <img
                src={archImage}
                alt="Architectural detail"
                className="w-full aspect-[3/2] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
              />
            </ScrollReveal>
            <ScrollReveal>
              <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
                {archEyebrow}
              </p>
              <h2
                className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
                dangerouslySetInnerHTML={{ __html: archTitle }}
              />
              <GoldRule className="my-7" />
              <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px]">
                {archBody}
              </p>
            </ScrollReveal>
          </div>
          <StaggerReveal className="grid grid-cols-3 gap-6 mt-16 max-lg:grid-cols-1">
            {archPartners.map((card: any, i: number) => (
              <ArchitectCard key={i} {...card} />
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── QUOTE STRIP ── */}
      <QuoteStrip text={quoteText} />

      {/* ── VILLA GALLERY ── */}
      <section className="py-[140px] px-[60px] max-lg:px-7">
        <ScrollReveal className="text-center mb-16 max-w-content mx-auto">
          <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
            Villa Gallery
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5">
            A Vision of<br /><em className="font-light italic">Exceptional</em> Living
          </h2>
          <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px] mx-auto">
            Explore the design language, materials, and spaces that define life at Pearns Point.
          </p>
        </ScrollReveal>
        <ScrollReveal className="max-w-content mx-auto">
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-[4px] cursor-pointer ${item.className} max-sm:col-span-1 max-sm:aspect-[3/2]`}
              >
                <img
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

      {/* ── BESPOKE OPTION ── */}
      <section className="py-[120px] px-[60px] max-lg:px-7 bg-white">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[100px] items-center max-lg:grid-cols-1 max-lg:gap-12">
          <ScrollReveal className="order-1">
            <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
              {bespokeEyebrow}
            </p>
            <h2
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
              dangerouslySetInnerHTML={{ __html: bespokeTitle }}
            />
            <GoldRule className="my-7" />
            <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px]">
              {bespokeBody}
            </p>
            <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px] mt-4">
              {bespokeBody2}
            </p>
          </ScrollReveal>
          <ScrollReveal className="order-2">
            <img
              src={bespokeImage}
              alt="Bespoke villa design"
              className="w-full aspect-[4/3] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <CTABand
        title='Ready to Design Your<br><em>Caribbean Home?</em>'
        subtitle="Explore the Plot & Plan programme or speak to our team about bringing your own architectural vision to Pearns Point."
        primaryCTA={{ label: 'View Plot & Plan', href: '/plot-and-plan' }}
        secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
