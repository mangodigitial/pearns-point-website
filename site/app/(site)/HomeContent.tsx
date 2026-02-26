'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from '@/components/global/PageHero'
import ScrollReveal from '@/components/global/ScrollReveal'
import StaggerReveal, { staggerItem } from '@/components/global/StaggerReveal'
import GoldRule from '@/components/global/GoldRule'
import QuoteStrip from '@/components/global/QuoteStrip'
import FeatureCard from '@/components/cards/FeatureCard'
import LifestyleCard from '@/components/cards/LifestyleCard'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ButtonOutline from '@/components/buttons/ButtonOutline'

/* ─── Fallback Data (used when Sanity is not configured) ─── */
const heroData = {
  eyebrow: "Antigua's Exclusive Western Peninsula",
  title: 'Shared by Few,<br>Rivalled by <em>None</em>',
  subtitle: "Discover the Caribbean's most prestigious address — where seven pristine beaches, endless sunshine, and an extraordinary lifestyle await the discerning few.",
  backgroundImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80',
}

const introData = {
  eyebrow: 'The Development',
  title: 'A Peninsula of<br><em>Extraordinary</em> Beauty',
  body: "Stretching along Antigua's celebrated western coast, Pearns Point is a rare and unspoilt peninsula offering spectacular ocean views, seven white sand beaches, and an unmatched sense of privacy. Every detail has been considered to respect and enhance the island's natural beauty.",
  mainImage: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
  accentImage: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=500&q=80',
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
]

const featureCards = [
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M22 4C18 12 12 18 4 22C12 26 18 32 22 40C26 32 32 26 40 22C32 18 26 12 22 4Z"/><circle cx="22" cy="22" r="4"/></svg>',
    title: 'Respecting Nature',
    description: "The development honours the island's native fauna and flora, utilising natural resources and blending them seamlessly into the untouched landscape of the peninsula.",
  },
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M4 36 Q12 8 22 20 Q32 32 40 8"/><circle cx="22" cy="20" r="3"/></svg>',
    title: 'A Serene Paradise',
    description: "Seven white sand beaches along Antigua's western coast make Pearns Point a place of outstanding natural beauty, tranquility, and complete seclusion.",
  },
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="6" y="12" width="32" height="24" rx="1"/><path d="M6 12 L22 4 L38 12"/><line x1="22" y1="12" x2="22" y2="36"/><line x1="14" y1="20" x2="14" y2="28"/><line x1="30" y1="20" x2="30" y2="28"/></svg>',
    title: 'Bespoke Design',
    description: 'Build your dream home with total creative freedom, or collaborate with our award-winning architects at KSR to craft a residence that is uniquely yours.',
  },
]

const villaCards = [
  { image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80', category: 'Premium Collection', title: 'Hillside Estates', isHero: true },
  { image: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=700&q=80', category: 'Waterfront', title: 'Beachfront Retreats', isHero: false },
  { image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80', category: 'Architecture', title: 'Bespoke Design with KSR', isHero: false },
]

const antiguaDetails = [
  { title: '4 Hours', description: 'Direct from New York' },
  { title: '8 Hours', description: 'Direct from Europe' },
  { title: '365 Beaches', description: 'One for every day' },
  { title: 'Stable', description: 'Growing economy & government' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <PageHero
        backgroundImage={heroData.backgroundImage}
        eyebrow={heroData.eyebrow}
        title={heroData.title}
        subtitle={heroData.subtitle}
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
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[100px] items-center max-lg:grid-cols-1 max-lg:gap-[60px]">
          <ScrollReveal>
            <div className="relative">
              <img
                src={introData.mainImage}
                alt="Caribbean waterfront"
                className="w-full aspect-[4/5] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
              />
              <img
                src={introData.accentImage}
                alt="White sand beach"
                className="absolute -bottom-[30px] -right-[40px] w-1/2 aspect-square object-cover rounded-[4px] border-[5px] border-cream shadow-[0_16px_40px_rgba(0,0,0,0.1)] max-lg:hidden"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
              {introData.eyebrow}
            </p>
            <h2
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
              dangerouslySetInnerHTML={{ __html: introData.title }}
            />
            <GoldRule className="my-7" />
            <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[520px]">
              {introData.body}
            </p>
            <div className="flex gap-10 mt-12 pt-9 border-t border-sand max-sm:flex-col max-sm:gap-5">
              {introData.stats.map((stat, i) => (
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

      {/* LIFESTYLE */}
      <section className="bg-white overflow-hidden">
        <ScrollReveal className="text-center py-[120px] pb-16 px-[60px] max-lg:px-7">
          <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
            The Lifestyle
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5">
            More Than a Home.<br />A Way of <em className="font-light italic">Living.</em>
          </h2>
          <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[580px] mx-auto">
            Pearns Point is an invitation to an extraordinary life — where turquoise waters, world-class dining, and unhurried luxury define every single day.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {lifestyleCards.map((card, i) => (
            <LifestyleCard key={i} {...card} />
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <QuoteStrip
        text="An investment in Pearns Point is an investment in an unparalleled way of life — where every sunrise brings possibility and every sunset is a masterpiece."
        attribution="Pearns Point, Antigua & Barbuda"
      />

      {/* FEATURES */}
      <section className="py-[140px] px-[60px] max-lg:px-7">
        <div className="max-w-content mx-auto">
          <ScrollReveal className="text-center mb-20">
            <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
              Why Pearns Point
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5">
              Crafted with <em className="font-light italic">Purpose</em><br />& Precision
            </h2>
            <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[600px] mx-auto">
              Every element of Pearns Point has been carefully considered — from the preservation of native ecosystems to the freedom of bespoke architectural design.
            </p>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-3 gap-10 max-lg:grid-cols-1">
            {featureCards.map((card, i) => (
              <FeatureCard key={i} {...card} />
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* VILLAS */}
      <section className="px-[60px] pb-[140px] max-lg:px-7">
        <div className="max-w-content mx-auto">
          <ScrollReveal className="grid grid-cols-2 gap-[60px] items-end mb-16 max-lg:grid-cols-1">
            <div>
              <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
                Residences
              </p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy">
                Homes Designed for<br /><em className="font-light italic">Exceptional</em> Living
              </h2>
            </div>
            <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid">
              With only 49 plots available, homeowners join an exclusive enclave — each property commanding breathtaking panoramic views from hillside or coastline positions.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-[1.3fr_1fr] grid-rows-[1fr_1fr] gap-5 h-[700px] max-lg:grid-cols-1 max-lg:h-auto">
              {villaCards.map((card, i) => (
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
                src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80"
                alt="Antigua harbour"
                className="w-full aspect-[4/5] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
              />
              <div className="absolute -top-6 -right-6 w-[130px] h-[130px] rounded-full bg-ocean flex items-center justify-center text-center shadow-[0_8px_24px_rgba(26,122,138,0.3)]">
                <div>
                  <strong className="block font-display text-[2rem] font-normal text-white leading-none">365</strong>
                  <span className="text-[0.6rem] font-normal tracking-[0.1em] text-white/70">beaches</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
              The Island
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5">
              Antigua, Jewel of<br />the <em className="font-light italic">Caribbean</em>
            </h2>
            <GoldRule className="my-7" />
            <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[520px]">
              A hidden jewel of pure tranquility and immense beauty. Antigua offers exceptional cuisine, world-class sailing, a vibrant culture, and a growing economy backed by a politically stable government — making it an ideal destination for lifestyle and investment alike.
            </p>
            <div className="grid grid-cols-2 gap-7 mt-11">
              {antiguaDetails.map((detail, i) => (
                <div key={i} className="pt-5 border-t-2 border-sand">
                  <h4 className="font-display text-[1.3rem] font-normal text-ocean mb-1">{detail.title}</h4>
                  <p className="text-[0.72rem] font-light text-prose-light leading-[1.5]">{detail.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CBI */}
      <section className="py-[100px] px-[60px] max-lg:px-7 text-center"
        style={{ background: 'linear-gradient(135deg, rgba(250,248,244,0.95), rgba(255,255,255,0.92))' }}
      >
        <ScrollReveal className="max-w-[700px] mx-auto">
          <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
            Citizenship by Investment
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5">
            Your Passport to a<br /><em className="font-light italic">New Horizon</em>
          </h2>
          <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[600px] mx-auto mb-11">
            Antigua & Barbuda&apos;s Citizenship by Investment Programme offers a distinguished pathway to second citizenship — with visa-free access to over 150 countries including the UK, EU Schengen zone, and more.
          </p>
          <div className="flex gap-3 justify-center flex-wrap max-sm:flex-col max-sm:items-center">
            <ButtonPrimary href="/citizenship-by-investment">Learn About CBI</ButtonPrimary>
            <ButtonOutline href="/contact">Speak to an Advisor</ButtonOutline>
          </div>
        </ScrollReveal>
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
