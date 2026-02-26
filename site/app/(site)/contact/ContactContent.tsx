'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import PageHero from '@/components/global/PageHero'
import ScrollReveal from '@/components/global/ScrollReveal'
import StaggerReveal, { staggerItem } from '@/components/global/StaggerReveal'
import GoldRule from '@/components/global/GoldRule'
import ContactForm from '@/components/interactive/ContactForm'
import ContactCard from '@/components/cards/ContactCard'
import OfficeCard from '@/components/cards/OfficeCard'

/* ─── page ─── */

interface Props {
  cmsData?: Record<string, any> | null
}

export default function ContactPage({ cmsData }: Props) {
  const heroImage = cmsData?.heroImage || 'https://images.unsplash.com/photo-1476673160081-cf065607f449?w=1920&q=85'
  const heroEyebrow = cmsData?.heroEyebrow || 'Get in Touch'
  const heroTitle = cmsData?.heroTitle || 'Contact <em>Us</em>'
  const heroSubtitle = cmsData?.heroSubtitle || "Whether you\u2019re ready to invest or simply exploring your options, our team is here to help at every stage."

  // Form intro
  const formEyebrow = cmsData?.formIntro?.eyebrow || 'Enquiry Form'
  const formTitle = cmsData?.formIntro?.title || 'Send Us a <em class="font-light italic">Message</em>'
  const formBody = cmsData?.formIntro?.body || 'Complete the form below and a member of our team will be in touch to discuss your requirements.'

  // Offices
  const displayOffices = cmsData?.offices?.length ? cmsData.offices : [
    { name: 'Antigua', address: "Pearns Point Sales Office\nFive Islands Village\nSt. John\u2019s, Antigua" },
    { name: 'Orange Limited', address: "Developer Head Office\nSt. John\u2019s, Antigua & Barbuda" },
  ]

  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        eyebrow={heroEyebrow}
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
        heightClass="h-[55vh] min-h-[400px]"
      />

      {/* ── Contact Cards ── */}
      <section className="pt-20 max-lg:pt-[60px] px-[60px] max-lg:px-7 max-w-content mx-auto">
        <StaggerReveal className="grid grid-cols-3 max-lg:grid-cols-1 gap-6 max-lg:gap-4">
          <ContactCard
            icon={<svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-ocean stroke-[1.3] fill-none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>}
            title="Call Us"
            description="Speak directly with our sales team"
            action={<a href="tel:+12687364028" className="text-[0.82rem] font-medium text-ocean hover:text-ocean-deep transition-colors duration-300">+1 268-736-4028</a>}
            footnote="Antigua Office"
          />
          <ContactCard
            icon={<svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-ocean stroke-[1.3] fill-none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>}
            title="Email Us"
            description="We respond within 24 hours"
            action={<a href="mailto:info@orangelimited.com" className="text-[0.82rem] font-medium text-ocean hover:text-ocean-deep transition-colors duration-300">info@orangelimited.com</a>}
            footnote="General &amp; Sales Enquiries"
          />
          <ContactCard
            icon={<svg viewBox="0 0 24 24" className="w-[22px] h-[22px] stroke-ocean stroke-[1.3] fill-none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>}
            title="Visit Us"
            description="Tour the peninsula in person"
            action={<Link href="/contact" className="text-[0.82rem] font-medium text-ocean hover:text-ocean-deep transition-colors duration-300">Book a Site Visit</Link>}
            footnote="Pearns Point, Five Islands, Antigua"
          />
        </StaggerReveal>
      </section>

      {/* ── Main Contact Section: Form + Info Sidebar ── */}
      <section className="py-[100px] max-lg:py-20 px-[60px] max-lg:px-7 max-w-content mx-auto grid grid-cols-[1.2fr_1fr] max-lg:grid-cols-1 gap-[100px] max-lg:gap-[60px] items-start">
        {/* Form Column */}
        <ScrollReveal>
          <div>
            <p className="text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
              {formEyebrow}
            </p>
            <h2
              className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal text-navy mb-5"
              dangerouslySetInnerHTML={{ __html: formTitle }}
            />
            <GoldRule />
            <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[560px] mt-7 mb-9">
              {formBody}
            </p>
            <ContactForm />
          </div>
        </ScrollReveal>

        {/* Info Sidebar */}
        <StaggerReveal>
          {/* Direct Lines */}
          <motion.div variants={staggerItem} className="mb-11">
            <h4 className="text-[0.58rem] font-semibold tracking-[0.25em] uppercase text-ocean mb-4">
              Direct Lines
            </h4>

            {/* Antigua Office */}
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-9 h-9 flex-shrink-0 bg-ocean/[0.06] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-ocean stroke-[1.3] fill-none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div className="text-[0.84rem] font-light text-prose-mid leading-[1.5]">
                <span className="block text-[0.6rem] font-medium tracking-[0.1em] uppercase text-prose-light mb-0.5">
                  Antigua Office
                </span>
                <a
                  href="tel:+12687364028"
                  className="text-navy font-normal hover:text-ocean transition-colors duration-300"
                >
                  +1 268-736-4028
                </a>
              </div>
            </div>

            {/* Sales Direct */}
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-9 h-9 flex-shrink-0 bg-ocean/[0.06] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-ocean stroke-[1.3] fill-none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div className="text-[0.84rem] font-light text-prose-mid leading-[1.5]">
                <span className="block text-[0.6rem] font-medium tracking-[0.1em] uppercase text-prose-light mb-0.5">
                  Sales Direct
                </span>
                <a
                  href="tel:+12687202225"
                  className="text-navy font-normal hover:text-ocean transition-colors duration-300"
                >
                  +1 268-720-2225
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-9 h-9 flex-shrink-0 bg-ocean/[0.06] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-ocean stroke-[1.3] fill-none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="text-[0.84rem] font-light text-prose-mid leading-[1.5]">
                <span className="block text-[0.6rem] font-medium tracking-[0.1em] uppercase text-prose-light mb-0.5">
                  Email
                </span>
                <a
                  href="mailto:info@orangelimited.com"
                  className="text-navy font-normal hover:text-ocean transition-colors duration-300"
                >
                  info@orangelimited.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Our Offices */}
          <motion.div variants={staggerItem} className="mb-11">
            <h4 className="text-[0.58rem] font-semibold tracking-[0.25em] uppercase text-ocean mb-4">
              Our Offices
            </h4>
            <div className="flex flex-col gap-4">
              {displayOffices.map((office: any) => (
                <OfficeCard
                  key={office.name}
                  title={office.name}
                  lines={office.address.split('\n')}
                />
              ))}
            </div>
          </motion.div>

          {/* Office Hours */}
          <motion.div variants={staggerItem} className="mb-11">
            <h4 className="text-[0.58rem] font-semibold tracking-[0.25em] uppercase text-ocean mb-4">
              Office Hours
            </h4>

            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-9 h-9 flex-shrink-0 bg-ocean/[0.06] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-ocean stroke-[1.3] fill-none">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>
              <div className="text-[0.84rem] font-light text-prose-mid leading-[1.5]">
                <span className="block text-[0.6rem] font-medium tracking-[0.1em] uppercase text-prose-light mb-0.5">
                  Monday &ndash; Friday
                </span>
                9:00 AM &ndash; 5:00 PM (AST)
              </div>
            </div>

            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-9 h-9 flex-shrink-0 bg-ocean/[0.06] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-ocean stroke-[1.3] fill-none">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>
              <div className="text-[0.84rem] font-light text-prose-mid leading-[1.5]">
                <span className="block text-[0.6rem] font-medium tracking-[0.1em] uppercase text-prose-light mb-0.5">
                  Saturday
                </span>
                By appointment only
              </div>
            </div>
          </motion.div>
        </StaggerReveal>
      </section>

      {/* ── Map Section ── */}
      <section className="relative h-[450px] bg-sand-light flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <div className="w-[60px] h-[60px] mx-auto mb-4 bg-ocean/[0.08] rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-[26px] h-[26px] stroke-ocean stroke-[1.2] fill-none">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h3 className="font-display text-[1.3rem] font-normal text-navy mb-1.5">
            Pearns Point, Antigua
          </h3>
          <p className="text-[0.78rem] font-light text-prose-mid">
            Five Islands, St. John&apos;s, Antigua &amp; Barbuda &nbsp;&middot;&nbsp;{' '}
            <a
              href="https://maps.google.com/?q=17.0868,-61.8727"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ocean hover:text-ocean-deep transition-colors duration-300"
            >
              Open in Google Maps
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
