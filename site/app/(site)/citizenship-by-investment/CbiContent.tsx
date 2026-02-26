'use client'

import { motion } from 'framer-motion'
import PageHero from '@/components/global/PageHero'
import ScrollReveal from '@/components/global/ScrollReveal'
import StaggerReveal, { staggerItem } from '@/components/global/StaggerReveal'
import GoldRule from '@/components/global/GoldRule'
import QuoteStrip from '@/components/global/QuoteStrip'
import CTABand from '@/components/global/CTABand'
import FeatureCard from '@/components/cards/FeatureCard'
import FAQAccordion from '@/components/interactive/FAQAccordion'

/* ─── Data ─── */

const benefitCards = [
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="22" cy="22" r="16"/><path d="M14 22l4 4 10-10"/></svg>',
    title: 'Visa-Free Travel',
    description:
      'Antigua citizenship grants visa-free or visa-on-arrival access to over 150 countries and territories, including the UK, EU Schengen Zone, Hong Kong, and Singapore.',
  },
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="6" y="12" width="32" height="22" rx="2"/><path d="M6 20h32"/><circle cx="15" cy="27" r="3"/></svg>',
    title: 'Tax Advantages',
    description:
      'No income tax, capital gains tax, inheritance tax, or wealth tax. Antigua offers one of the most favourable tax environments in the Caribbean for individuals and families.',
  },
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M22 6v32M14 14l8-8 8 8"/><circle cx="22" cy="34" r="4"/></svg>',
    title: 'Fast Processing',
    description:
      'Applications are typically processed within 3\u20136 months, with citizenship granted to the principal applicant, spouse, dependent children, and eligible family members.',
  },
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M22 4C18 12 12 18 4 22C12 26 18 32 22 40C26 32 32 26 40 22C32 18 26 12 22 4Z"/></svg>',
    title: 'Dual Citizenship',
    description:
      'Antigua & Barbuda permits dual citizenship with no restrictions. There is no requirement to renounce your existing nationality or residency.',
  },
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="8" y="6" width="28" height="32" rx="2"/><path d="M16 14h12M16 20h12M16 26h8"/></svg>',
    title: 'Minimal Residency',
    description:
      'No minimum residency requirement before or after obtaining citizenship. The programme requires just five days of residence within the first five years.',
  },
  {
    icon: '<svg viewBox="0 0 44 44" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="16" cy="16" r="8"/><circle cx="28" cy="28" r="8"/><path d="M22 22l-4-4M22 22l4 4"/></svg>',
    title: 'Family Inclusion',
    description:
      'Include your spouse, dependent children under 30, parents and grandparents over 55, and siblings under 18 on a single application.',
  },
]

const passportStats = [
  { num: '150', suffix: '+', label: 'Countries Visa-Free' },
  { num: 'EU', suffix: '', label: 'Schengen Access' },
  { num: 'UK', suffix: '', label: '6 Month Visa-Free' },
  { num: 'HK', suffix: '', label: '& Singapore Access' },
]

const timelineSteps = [
  {
    step: 'Step 01',
    title: 'Initial Consultation',
    text: 'Speak with our team to understand the programme, investment options, and how Pearns Point qualifies. We\u2019ll assess your eligibility and outline the full process.',
    duration: 'Week 1\u20132',
  },
  {
    step: 'Step 02',
    title: 'Select Your Investment',
    text: 'Choose your plot at Pearns Point and confirm your investment. Our legal partners will prepare and submit your citizenship application alongside all required documentation.',
    duration: 'Week 2\u20134',
  },
  {
    step: 'Step 03',
    title: 'Due Diligence',
    text: 'The Citizenship by Investment Unit conducts thorough background checks and due diligence on all applicants. This is a rigorous process that ensures the programme\u2019s integrity.',
    duration: 'Month 2\u20134',
  },
  {
    step: 'Step 04',
    title: 'Approval & Citizenship',
    text: 'Upon approval, you receive your Certificate of Citizenship and can apply for your Antigua & Barbuda passport \u2014 granting visa-free access to 150+ countries.',
    duration: 'Month 4\u20136',
  },
  {
    step: 'Step 05',
    title: 'Begin Your New Life',
    text: 'With citizenship secured, enjoy the freedom of global mobility, tax advantages, and your exceptional new home at Pearns Point \u2014 where your investment becomes a lifestyle.',
    duration: null,
  },
]

const qualifiesFeatures = [
  'Government approved',
  'All plots qualify',
  'Family included',
  'Legal support provided',
]

const faqItems = [
  {
    question: 'What is the minimum investment required?',
    answer:
      'The minimum real estate investment under Antigua\u2019s CBI programme is US $200,000 in a government-approved project. All plots at Pearns Point exceed this threshold, ensuring automatic qualification for the programme.',
  },
  {
    question: 'How long does the process take?',
    answer:
      'From application submission to citizenship approval, the typical timeline is 3\u20136 months. This includes the due diligence process, background checks, and final approval by the Citizenship by Investment Unit.',
  },
  {
    question: 'Can I include my family?',
    answer:
      'Yes. A single application can include your spouse, dependent children under 30, parents and grandparents over 55, and unmarried siblings under 18. Additional government fees apply per dependent.',
  },
  {
    question: 'Do I need to live in Antigua?',
    answer:
      'There is no residency requirement prior to or immediately after obtaining citizenship. The programme requires a minimum of just five days\u2019 residence in Antigua within the first five years of citizenship.',
  },
  {
    question: 'Can I sell the property after obtaining citizenship?',
    answer:
      'The real estate investment must be held for a minimum of five years following citizenship approval. After this period, the property may be sold while retaining your citizenship. The subsequent buyer may also qualify for CBI.',
  },
  {
    question: 'Will I need to renounce my existing citizenship?',
    answer:
      'No. Antigua & Barbuda permits full dual citizenship. There is no requirement to renounce your current nationality, and your existing passport remains unaffected by the process.',
  },
]

/* ─── Checkmark icon ─── */
function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[18px] h-[18px] stroke-lagoon fill-none"
      strokeWidth={1.5}
    >
      <polyline points="4,12 9,17 20,6" />
    </svg>
  )
}

/* ─── Page ─── */

interface Props {
  cmsData?: Record<string, any> | null
}

export default function CitizenshipByInvestmentPage({ cmsData }: Props) {
  const heroImage = cmsData?.heroImage || 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1920&q=85'
  const heroEyebrow = cmsData?.heroEyebrow || 'Second Citizenship'
  const heroTitle = cmsData?.heroTitle || 'Citizenship by <em>Investment</em>'
  const heroSubtitle = cmsData?.heroSubtitle || "Antigua & Barbuda\u2019s CBI programme offers one of the most respected and efficient routes to second citizenship through qualifying real estate investment."

  // Intro
  const introEyebrow = cmsData?.intro?.eyebrow || 'The Programme'
  const introTitle = cmsData?.intro?.title || 'A Pathway to<br><em class="font-light italic">Global</em> Freedom'
  const introImage = cmsData?.intro?.image || 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80'

  // Benefits
  const benefitsEyebrow = cmsData?.benefits?.eyebrow || 'Key Benefits'
  const benefitsTitle = cmsData?.benefits?.title || 'Why Antigua <em class="font-light italic">Citizenship?</em>'
  const benefitsSubtitle = cmsData?.benefits?.subtitle || "Antigua\u2019s CBI programme is one of the longest-established and most respected in the Caribbean, offering a compelling combination of lifestyle, mobility, and financial advantages."
  const displayBenefitCards = cmsData?.benefits?.cards?.length ? cmsData.benefits.cards.map((c: any) => ({
    icon: c.iconSvg || '',
    title: c.title || '',
    description: c.description || '',
  })) : benefitCards

  // Passport
  const passportEyebrow = cmsData?.passport?.eyebrow || 'Global Mobility'
  const passportTitle = cmsData?.passport?.title || 'Your Passport to<br>the <em class="font-light italic">World</em>'
  const passportBody = cmsData?.passport?.body || null
  const passportImage = cmsData?.passport?.image || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80'
  const displayPassportStats = cmsData?.passport?.stats?.length ? cmsData.passport.stats.map((s: any) => ({
    num: s.value || '',
    suffix: '',
    label: s.label || '',
  })) : passportStats

  // Process
  const displayProcess = cmsData?.process?.length ? cmsData.process.map((s: any) => ({
    step: `Step ${String(s.stepNumber || 0).padStart(2, '0')}`,
    title: s.title || '',
    text: s.description || '',
    duration: s.duration || null,
  })) : timelineSteps

  // Qualifies
  const qualifiesEyebrow = cmsData?.qualifies?.eyebrow || 'Government Approved'
  const qualifiesTitle = cmsData?.qualifies?.title || 'Pearns Point is a<br>CBI <em class="font-light italic text-lagoon">Qualifying</em> Development'
  const qualifiesBody = cmsData?.qualifies?.body || null
  const displayQualifiesFeatures = cmsData?.qualifies?.features?.length ? cmsData.qualifies.features : qualifiesFeatures

  // Quote
  const quoteText = cmsData?.quote?.text || 'Invest in an extraordinary Caribbean lifestyle \u2014 and gain the freedom of global citizenship for you and your family.'

  // FAQ
  const displayFaq = cmsData?.faq?.length ? cmsData.faq : faqItems

  return (
    <>
      {/* HERO */}
      <PageHero
        backgroundImage={heroImage}
        eyebrow={heroEyebrow}
        title={heroTitle}
        subtitle={heroSubtitle}
      />

      {/* ═══ CBI INTRO ═══ */}
      <section className="py-[140px] px-[60px] max-lg:px-7 max-lg:py-[100px]">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[100px] items-center max-lg:grid-cols-1 max-lg:gap-12">
          {/* Visual */}
          <ScrollReveal>
            <div className="relative">
              <img
                src={introImage}
                alt="Antigua coastline"
                className="w-full aspect-[4/5] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
              />
              {/* CBI Approved badge */}
              <div className="absolute -top-5 -right-5 px-6 py-3.5 bg-ocean rounded-[3px] shadow-[0_12px_40px_rgba(26,122,138,0.3)] max-sm:-top-3 max-sm:-right-2">
                <span className="text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-white">
                  CBI Approved
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
            <motion.p
              variants={staggerItem}
              className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px]"
            >
              Antigua &amp; Barbuda&apos;s Citizenship by Investment Programme,
              established in 2013, enables individuals and families to obtain
              full citizenship through a qualifying investment in
              government-approved real estate.
            </motion.p>
            <motion.p
              variants={staggerItem}
              className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px] mt-4"
            >
              As a government-approved development, Pearns Point offers one of
              the Caribbean&apos;s most prestigious CBI-qualifying investments
              &mdash; combining an exceptional lifestyle asset with the security
              and freedom of second citizenship.
            </motion.p>
          </StaggerReveal>
        </div>
      </section>

      {/* ═══ BENEFITS ═══ */}
      <section className="py-[140px] px-[60px] max-lg:px-7 bg-white">
        <div className="max-w-content mx-auto">
          <StaggerReveal className="text-center mb-[72px]">
            <motion.p
              variants={staggerItem}
              className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4"
            >
              {benefitsEyebrow}
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
              dangerouslySetInnerHTML={{ __html: benefitsTitle }}
            />
            <motion.p
              variants={staggerItem}
              className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[620px] mx-auto"
            >
              {benefitsSubtitle}
            </motion.p>
          </StaggerReveal>

          <StaggerReveal className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {displayBenefitCards.map((card: any, i: number) => (
              <FeatureCard key={i} {...card} />
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ═══ PASSPORT HIGHLIGHTS ═══ */}
      <section className="py-[140px] px-[60px] max-lg:px-7">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[100px] items-center max-lg:grid-cols-1 max-lg:gap-12">
          {/* Copy */}
          <StaggerReveal>
            <motion.p
              variants={staggerItem}
              className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4"
            >
              {passportEyebrow}
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
              dangerouslySetInnerHTML={{ __html: passportTitle }}
            />
            <motion.div variants={staggerItem}>
              <GoldRule className="my-7" />
            </motion.div>
            {passportBody ? (
              <motion.div
                variants={staggerItem}
                className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px]"
                dangerouslySetInnerHTML={{ __html: passportBody }}
              />
            ) : (
              <motion.p
                variants={staggerItem}
                className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px]"
              >
                An Antigua &amp; Barbuda passport is one of the strongest in the
                Caribbean, offering extensive visa-free access to major business
                and leisure destinations worldwide.
              </motion.p>
            )}

            {/* Stat boxes */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-2 gap-5 mt-9"
            >
              {displayPassportStats.map((stat: any, i: number) => (
                <div
                  key={i}
                  className="text-center p-6 bg-white rounded-[4px] border border-black/[0.04]"
                >
                  <div className="font-display text-[2rem] font-light text-ocean leading-none">
                    {stat.num}
                    {stat.suffix && (
                      <span className="text-[0.5em]">{stat.suffix}</span>
                    )}
                  </div>
                  <div className="text-[0.55rem] font-medium tracking-[0.15em] uppercase text-prose-light mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </StaggerReveal>

          {/* Image */}
          <ScrollReveal>
            <img
              src={passportImage}
              alt="Global travel"
              className="w-full aspect-[3/2] object-cover rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ PROCESS TIMELINE ═══ */}
      <section className="py-[140px] px-[60px] max-lg:px-7 bg-white">
        <div className="max-w-content mx-auto">
          <StaggerReveal className="text-center mb-20">
            <motion.p
              variants={staggerItem}
              className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4"
            >
              The Process
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
            >
              How It <em className="font-light italic">Works</em>
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[620px] mx-auto"
            >
              From initial consultation to receiving your passport, the CBI
              process is straightforward and fully managed by our experienced
              team and legal partners.
            </motion.p>
          </StaggerReveal>

          {/* Timeline */}
          <StaggerReveal className="relative max-w-[800px] mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-[2px]"
              style={{
                background:
                  'linear-gradient(180deg, #1a7a8a, #48b5c4)',
              }}
            />

            {displayProcess.map((step: any, i: number) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className={`relative pl-[88px] ${
                  i < displayProcess.length - 1 ? 'pb-14' : 'pb-0'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-5 top-1 w-[26px] h-[26px] rounded-full bg-white border-2 border-ocean flex items-center justify-center z-[2]">
                  <div className="w-2.5 h-2.5 rounded-full bg-ocean" />
                </div>

                <div className="text-[0.55rem] font-semibold tracking-[0.2em] uppercase text-ocean mb-2">
                  {step.step}
                </div>
                <h3 className="font-display text-[1.3rem] font-normal text-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-[0.82rem] font-light leading-[1.8] text-prose-mid max-w-[520px]">
                  {step.text}
                </p>
                {step.duration && (
                  <span className="inline-block mt-3 text-[0.58rem] font-medium tracking-[0.12em] uppercase py-1.5 px-3.5 bg-ocean/[0.06] text-ocean rounded-[2px] border border-ocean/[0.12]">
                    {step.duration}
                  </span>
                )}
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ═══ PEARNS POINT QUALIFIES ═══ */}
      <ScrollReveal>
        <section className="py-[100px] px-[60px] max-lg:px-7 bg-navy text-center">
          <div className="max-w-[900px] mx-auto">
            <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-lagoon mb-4">
              {qualifiesEyebrow}
            </p>
            <h2
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-white mb-5"
              dangerouslySetInnerHTML={{ __html: qualifiesTitle }}
            />
            {qualifiesBody ? (
              <div
                className="text-[0.88rem] font-light leading-[1.85] text-white/65 max-w-[640px] mx-auto"
                dangerouslySetInnerHTML={{ __html: qualifiesBody }}
              />
            ) : (
              <p className="text-[0.88rem] font-light leading-[1.85] text-white/65 max-w-[640px] mx-auto">
                Every plot at Pearns Point meets the minimum investment threshold
                required under Antigua&apos;s Citizenship by Investment Programme
                &mdash; combining exceptional real estate with a clear pathway to
                second citizenship.
              </p>
            )}

            <div className="flex justify-center gap-10 mt-12 flex-wrap max-sm:flex-col max-sm:items-center max-sm:gap-6 max-lg:gap-6">
              {displayQualifiesFeatures.map((feat: any, i: number) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-lagoon/[0.12] flex items-center justify-center flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <span className="text-[0.78rem] font-normal text-white">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ QUOTE ═══ */}
      <QuoteStrip text={quoteText} />

      {/* ═══ FAQ ═══ */}
      <section className="py-[140px] px-[60px] max-lg:px-7">
        <div className="max-w-[800px] mx-auto">
          <StaggerReveal className="text-center mb-16">
            <motion.p
              variants={staggerItem}
              className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4"
            >
              Common Questions
            </motion.p>
            <motion.h2
              variants={staggerItem}
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
            >
              Frequently <em className="font-light italic">Asked</em>
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px] mx-auto"
            >
              Everything you need to know about citizenship by investment through
              Pearns Point.
            </motion.p>
          </StaggerReveal>

          <ScrollReveal>
            <FAQAccordion items={displayFaq} />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CTABand
        title='Start Your Citizenship<br><em>Journey</em>'
        subtitle="Our experienced team and legal partners will guide you through every step of the CBI process."
        primaryCTA={{ label: 'Speak to Our Team', href: '/contact' }}
        secondaryCTA={{ label: 'Download CBI Guide', href: '/contact' }}
      />
    </>
  )
}
