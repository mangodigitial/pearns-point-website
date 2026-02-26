'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '@/components/global/PageHero'
import ScrollReveal from '@/components/global/ScrollReveal'
import StaggerReveal, { staggerItem } from '@/components/global/StaggerReveal'
import GoldRule from '@/components/global/GoldRule'
import ScrollPillNav from '@/components/interactive/ScrollPillNav'
import VideoModal from '@/components/interactive/VideoModal'
import ButtonOutline from '@/components/buttons/ButtonOutline'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'

/* ─── Lot Area Data ─── */
const lotAreas = [
  {
    id: 'oceans-edge',
    label: 'Oceans Edge',
    lots: 'Lots 1\u201321',
    name: 'Oceans',
    nameItalic: 'Edge',
    description:
      'Situated directly above beautiful turquoise waters with breathtaking sunset views for large parts of the year, these lots are conveniently close to the main Pearns Point beach. Although entirely private, owners will still be within easy walking distance from the amenities of the luxury hotel on site. Lots 9, 10 and 18\u201320 enjoy a secluded white sand beach with easy swimming.',
    features: ['Sunset views', 'Direct water location', '\u2154 acre lots', 'Near hotel amenities'],
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    thumbs: [
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&q=80',
    ],
    heroAlt: 'Oceans Edge aerial',
    thumbAlts: ['Beach view', 'Turquoise water'],
    videoId: 'YOUTUBE_ID_HERE',
  },
  {
    id: 'five-islands-point',
    label: 'Five Islands Point',
    lots: 'Lots 24 & 25',
    name: 'Five Islands',
    nameItalic: 'Point',
    description:
      'Set on their own point, these lots face out to the iconic Five Islands and the endless turquoise Caribbean Sea. Being at the western point of the property, the sunset views are mesmerising and quiet privacy is guaranteed. Lot 25 is one of the few remaining lots with direct beach access.',
    features: ['Private point position', 'Five Islands views', 'Direct beach access', 'Best sunset position'],
    heroImage: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
    thumbs: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80',
    ],
    heroAlt: 'Five Islands Point view',
    thumbAlts: ['Sunset view', 'Coastline'],
    videoId: 'YOUTUBE_ID_HERE',
  },
  {
    id: 'pearns-bay',
    label: 'Pearns Bay',
    lots: 'Lot 28',
    name: 'Pearns',
    nameItalic: 'Bay',
    description:
      'An exceptional lot with beach access to a gorgeous powder white soft sand beach with excellent snorkelling. The views out to the unpopulated far green shore are enhanced by panoramic ocean views. The lot rises gently back to the road making for easy access and elevated views that include the iconic Five Islands.',
    features: ['Beach access', 'Snorkelling', 'Panoramic views', 'Gentle elevation'],
    heroImage: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80',
    thumbs: [
      'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=400&q=80',
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&q=80',
    ],
    heroAlt: 'Pearns Bay coastline',
    thumbAlts: ['Bay view', 'Water view'],
    videoId: 'YOUTUBE_ID_HERE',
  },
  {
    id: 'secret-bay',
    label: 'Secret Bay',
    lots: 'Lots 38 & 39',
    name: 'Secret',
    nameItalic: 'Bay',
    description:
      'Some of the last beachfront lots available \u2014 this exquisite bay has a beautiful and secluded stretch of white sand with turquoise waters straight in front. The elevated incline down to the beach allows for complete privacy and safety from any seasonal wave activity whilst ensuring a panoramic view amid the gentle sounds of lapping waves.',
    features: ['Beachfront', 'Secluded white sand', 'Elevated privacy', 'Last remaining'],
    heroImage: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80',
    thumbs: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&q=80',
    ],
    heroAlt: 'Secret Bay beach',
    thumbAlts: ['Secluded beach', 'Bay aerial'],
    videoId: 'YOUTUBE_ID_HERE',
  },
  {
    id: 'five-islands-bay',
    label: 'Five Islands Bay',
    lots: 'Lots 41\u201343, 59, 63\u201371',
    name: 'Five Islands',
    nameItalic: 'Bay',
    description:
      'These more elevated ocean view lots are generously sized to allow for residences with multiple views and also benefit from the cooling north-easterly winds across Antigua. In good proximity to the property entrance, they are within easy reach of the main Pearns Point beach. Lots 38\u201340 enjoy access to a stunning white sand beach set in an intimate cove.',
    features: ['Elevated position', 'Generous lot sizes', 'Cooling breezes', 'Intimate cove access'],
    heroImage: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
    thumbs: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
      'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=400&q=80',
    ],
    heroAlt: 'Five Islands Bay panorama',
    thumbAlts: ['Ocean view', 'Elevated view'],
    videoId: 'YOUTUBE_ID_HERE',
  },
  {
    id: 'pearns-beach',
    label: 'Pearns Beach',
    lots: 'Lots 44\u201353',
    name: 'Pearns',
    nameItalic: 'Beach',
    description:
      'Looking out to Montserrat on a clear day, these lots are all about an abundance of colour \u2014 with views over the white Pearns Point Beach and out to the famous turquoise waters of Antigua, all amid a backdrop of the Antiguan mountain range to the south.',
    features: ['Montserrat views', 'Beach views', 'Mountain backdrop', 'Turquoise waters'],
    heroImage: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
    thumbs: [
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&q=80',
      'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=400&q=80',
    ],
    heroAlt: 'Pearns Beach',
    thumbAlts: ['Beach panorama', 'Coastal view'],
    videoId: 'YOUTUBE_ID_HERE',
  },
  {
    id: 'five-islands-view',
    label: 'Five Islands View',
    lots: 'Lots 54\u201359',
    name: 'Five Islands',
    nameItalic: 'View',
    description:
      'Offering perhaps the best combination of ocean and Five Islands views, these higher elevation lots also enjoy an almost year-round breeze and a peaceful serenity. Lot sizes are larger here, affording more uses of the property and different design options for your dream home.',
    features: ['Best combined views', 'Higher elevation', 'Larger lot sizes', 'Year-round breeze'],
    heroImage: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
    thumbs: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&q=80',
    ],
    heroAlt: 'Five Islands View',
    thumbAlts: ['Elevated panorama', 'Island view'],
    videoId: 'YOUTUBE_ID_HERE',
  },
  {
    id: 'the-look-out',
    label: 'The Look Out',
    lots: 'Lots 60\u201361',
    name: 'The Look',
    nameItalic: 'Out',
    description:
      'The highest points on the property \u2014 the 360-degree views here are outstanding. Cooling breezes and a view over most of the north-west coast of Antigua will keep you spellbound. These are truly the crown jewels of the peninsula.',
    features: ['360\u00b0 views', 'Highest elevation', 'Cooling breezes', 'Crown jewel lots'],
    heroImage: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&q=80',
    thumbs: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80',
    ],
    heroAlt: 'The Look Out panorama',
    thumbAlts: ['360 view', 'Coastline from height'],
    videoId: 'YOUTUBE_ID_HERE',
  },
]

const pillNavSections = lotAreas.map((a) => ({ id: a.id, label: a.label }))

interface Props {
  cmsData?: Record<string, any> | null
}

export default function LotsSitePlanPage({ cmsData }: Props) {
  const heroImage = cmsData?.heroImage || 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=85'
  const heroEyebrow = cmsData?.heroEyebrow || 'Explore the Peninsula'
  const heroTitle = cmsData?.heroTitle || 'Lots & <em>Site Plan</em>'
  const heroSubtitle = cmsData?.heroSubtitle || 'Discover the exciting opportunities available across eight distinct areas of the Pearns Point peninsula — each with its own character, views, and unique appeal.'

  const siteMapImage = cmsData?.siteMapImage || 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80'
  const displayLotAreas = cmsData?.lotAreas?.length ? cmsData.lotAreas.map((area: any, idx: number) => ({
    id: area.name?.toLowerCase().replace(/\s+/g, '-') || lotAreas[idx]?.id || `area-${idx}`,
    label: area.name || lotAreas[idx]?.label || '',
    lots: area.lotRange || lotAreas[idx]?.lots || '',
    name: area.name?.split(' ').slice(0, -1).join(' ') || area.name || '',
    nameItalic: area.name?.split(' ').slice(-1)[0] || '',
    description: area.description || '',
    features: area.features || [],
    heroImage: area.heroImage || lotAreas[idx]?.heroImage || '',
    thumbs: area.thumbnails || lotAreas[idx]?.thumbs || [],
    heroAlt: area.name || '',
    thumbAlts: (area.thumbnails || []).map((_: any, i: number) => `${area.name} view ${i + 1}`),
    videoId: area.youtubeId || 'YOUTUBE_ID_HERE',
  })) : lotAreas
  const displayPillNavSections = displayLotAreas.map((a: any) => ({ id: a.id, label: a.label }))
  const availabilityStats = cmsData?.availabilityBanner?.stats?.length ? cmsData.availabilityBanner.stats : [
    { number: '49', label: 'Total Plots' },
    { number: '8', label: 'Distinct Areas' },
    { number: '137', label: 'Acres' },
  ]

  const [videoOpen, setVideoOpen] = useState(false)
  const [activeVideoId, setActiveVideoId] = useState('')

  const openVideo = (youtubeId: string) => {
    setActiveVideoId(youtubeId)
    setVideoOpen(true)
  }

  return (
    <>
      {/* ── HERO ── */}
      <PageHero
        backgroundImage={heroImage}
        eyebrow={heroEyebrow}
        title={heroTitle}
        subtitle={heroSubtitle}
      />

      {/* ── SITE MAP ── */}
      <section className="py-[100px] px-[60px] max-lg:px-7 max-w-content mx-auto text-center">
        <ScrollReveal>
          <p className="text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
            Interactive Site Plan
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5">
            Explore the <em className="font-light italic">Peninsula</em>
          </h2>
          <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[600px] mx-auto mb-12">
            Select an area below to explore available lots, views, and features. Each zone of the peninsula has been
            thoughtfully planned to maximise privacy, natural beauty, and ocean access.
          </p>
          <div className="relative bg-white rounded-[6px] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-black/[0.04]">
            <img
              src={siteMapImage}
              alt="Pearns Point Site Plan — aerial view of peninsula"
              className="w-full h-auto rounded-[4px]"
            />
            <p className="text-[0.65rem] font-light text-prose-light italic mt-4">
              Map is for illustrative purposes only and is not to scale.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ── PILL NAV (sticky) ── */}
      <ScrollPillNav sections={displayPillNavSections} />

      {/* ── LOT AREAS ── */}
      <div className="pb-[60px]">
        {displayLotAreas.map((area: any, idx: number) => (
          <div key={area.id}>
            {/* Divider */}
            <div className="max-w-content mx-auto px-[60px] max-lg:px-7">
              <div
                className="h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #e8dfd2, transparent)' }}
              />
            </div>

            {/* Lot area section */}
            <section
              id={area.id}
              className="max-w-content mx-auto py-[100px] px-[60px] max-lg:px-7 max-lg:py-20 scroll-mt-[120px]"
            >
              <ScrollReveal>
                <div
                  className={`grid grid-cols-2 gap-20 items-center max-lg:grid-cols-1 max-lg:gap-12 ${
                    idx % 2 === 1 ? '' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={idx % 2 === 1 ? 'order-2 max-lg:order-1' : ''}>
                    <p className="text-[0.6rem] font-semibold tracking-[0.25em] uppercase text-ocean mb-5">
                      {area.lots}
                    </p>
                    <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-normal leading-[1.2] text-navy mb-2">
                      {area.name} <em className="font-light italic">{area.nameItalic}</em>
                    </h2>
                    <GoldRule className="my-7" />
                    <p className="text-[0.85rem] font-light leading-[1.85] text-prose-mid mb-7">
                      {area.description}
                    </p>

                    {/* Features */}
                    <div className="flex gap-6 flex-wrap mb-7">
                      {area.features.map((feat: any) => (
                        <span key={feat} className="flex items-center gap-2 text-[0.7rem] font-normal text-prose-mid">
                          <span className="w-1.5 h-1.5 rounded-full bg-ocean flex-shrink-0" />
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 flex-wrap max-sm:flex-col">
                      <ButtonOutline href="/contact">Enquire About This Area</ButtonOutline>
                      <button
                        onClick={() => openVideo(area.videoId)}
                        className="inline-flex items-center gap-2 font-body text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-navy bg-sand-light border-[1.5px] border-sand px-7 py-3 cursor-pointer transition-all duration-400 hover:bg-navy hover:text-white hover:border-navy max-sm:justify-center"
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                      >
                        <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5" strokeWidth="1.5">
                          <polygon points="3,1 12,7 3,13" fill="currentColor" stroke="none" />
                        </svg>
                        Drone Video
                      </button>
                    </div>
                  </div>

                  {/* Gallery */}
                  <div className={`grid grid-cols-2 grid-rows-2 gap-3 max-sm:grid-cols-1 ${idx % 2 === 1 ? 'order-1 max-lg:order-2' : ''}`}>
                    <div className="col-span-2 max-sm:col-auto overflow-hidden rounded-[4px]">
                      <img
                        src={area.heroImage}
                        alt={area.heroAlt}
                        className="w-full h-full object-cover aspect-[2/1] max-sm:aspect-[3/2] transition-transform duration-[1200ms] hover:scale-[1.06]"
                        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                      />
                    </div>
                    {area.thumbs.map((thumb: any, ti: number) => (
                      <div key={ti} className="overflow-hidden rounded-[4px]">
                        <img
                          src={thumb}
                          alt={area.thumbAlts[ti]}
                          className="w-full h-full object-cover aspect-square transition-transform duration-[1200ms] hover:scale-[1.06]"
                          style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </section>
          </div>
        ))}
      </div>

      {/* ── AVAILABILITY BANNER ── */}
      <section className="py-20 px-[60px] max-lg:px-7 bg-navy text-center">
        <StaggerReveal className="max-w-[700px] mx-auto">
          <motion.h2
            variants={staggerItem}
            className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-normal text-white mb-2"
          >
            Begin Your Journey to
            <br />
            <em className="font-light italic">Pearns Point</em>
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-[0.85rem] font-light text-white/55 leading-[1.7] mb-8"
          >
            With limited plots remaining, now is the time to secure your place on the Caribbean&apos;s most exclusive
            peninsula.
          </motion.p>
          <motion.div
            variants={staggerItem}
            className="flex justify-center gap-[60px] mb-10 max-sm:flex-col max-sm:gap-6"
          >
            {availabilityStats.map((stat: any) => (
              <div key={stat.label}>
                <div className="font-display text-[3rem] font-normal text-lagoon leading-none">{stat.number}</div>
                <div className="text-[0.58rem] font-medium tracking-[0.2em] uppercase text-white/40 mt-1.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div variants={staggerItem}>
            <a
              href="/contact"
              className="inline-block font-body text-[0.62rem] font-semibold tracking-[0.25em] uppercase text-navy bg-white px-12 py-4 transition-all duration-400 hover:bg-lagoon hover:text-white hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(0,0,0,0.2)]"
              style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
            >
              Request Availability & Pricing
            </a>
          </motion.div>
        </StaggerReveal>
      </section>

      {/* ── VIDEO MODAL ── */}
      <VideoModal youtubeId={activeVideoId} isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  )
}
