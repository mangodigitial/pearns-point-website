'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '@/components/global/PageHero'
import ScrollReveal from '@/components/global/ScrollReveal'
import FilterPills from '@/components/interactive/FilterPills'
import LightboxModal from '@/components/interactive/LightboxModal'
import VideoModal from '@/components/interactive/VideoModal'
import CTABand from '@/components/global/CTABand'

/* ─── Gallery Data ─── */
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=700&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1400&q=80',
    title: 'Peninsula From Above',
    category: 'Aerial',
    alt: 'Aerial view of peninsula',
  },
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80',
    title: 'Crystal Waters',
    category: 'Beaches',
    alt: 'Crystal clear beach',
  },
  {
    src: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=700&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=80',
    title: 'Modern Villa Exterior',
    category: 'Villas',
    alt: 'Villa exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=700&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1400&q=80',
    title: 'Yacht at Sunset',
    category: 'Lifestyle',
    alt: 'Yacht at sunset',
  },
  {
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1400&q=80',
    title: 'Coastline Panorama',
    category: 'Aerial',
    alt: 'Aerial coastline',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80',
    title: 'Indoor/Outdoor Living',
    category: 'Villas',
    alt: 'Villa interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=700&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1400&q=80',
    title: 'Tropical Canopy',
    category: 'Landscape',
    alt: 'Tropical landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=700&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1400&q=80',
    title: 'Secluded Bay',
    category: 'Beaches',
    alt: 'Secluded bay',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80',
    title: 'Waterfront Dining',
    category: 'Lifestyle',
    alt: 'Waterfront dining',
  },
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=80',
    title: 'Infinity Pool Vista',
    category: 'Villas',
    alt: 'Villa with pool',
  },
  {
    src: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?w=700&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?w=1400&q=80',
    title: 'Golden Hour',
    category: 'Landscape',
    alt: 'Golden hour sunset',
  },
  {
    src: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?w=700&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?w=1400&q=80',
    title: 'Five Islands Bay',
    category: 'Aerial',
    alt: 'Aerial bay view',
  },
  {
    src: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=700&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1400&q=80',
    title: 'Sailing the Coast',
    category: 'Lifestyle',
    alt: 'Sailing',
  },
  {
    src: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=700&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1400&q=80',
    title: 'White Sand Shores',
    category: 'Beaches',
    alt: 'White sand beach',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=700&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1400&q=80',
    title: 'Terrace at Dusk',
    category: 'Villas',
    alt: 'Villa terrace',
  },
  {
    src: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?w=700&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?w=1400&q=80',
    title: 'Caribbean Palms',
    category: 'Landscape',
    alt: 'Palm trees',
  },
  {
    src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=700&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1400&q=80',
    title: 'Sunset Cocktails',
    category: 'Lifestyle',
    alt: 'Cocktails at sunset',
  },
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700&q=80',
    srcLarge: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&q=80',
    title: 'The Peninsula',
    category: 'Aerial',
    alt: 'Peninsula aerial',
  },
]

const categories = ['Aerial', 'Beaches', 'Villas', 'Lifestyle', 'Landscape']

interface Props {
  cmsData?: Record<string, any> | null
}

export default function GalleryPage({ cmsData }: Props) {
  const heroImage = cmsData?.heroImage || 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=85'
  const heroEyebrow = cmsData?.heroEyebrow || 'Pearns Point'
  const heroTitle = cmsData?.heroTitle || 'The <em>Gallery</em>'
  const heroSubtitle = cmsData?.heroSubtitle || 'Explore the breathtaking beauty of Pearns Point — from aerial views of the peninsula to intimate glimpses of island life.'

  // Gallery data
  const displayCategories = cmsData?.categories?.length ? cmsData.categories : categories
  const displayImages = cmsData?.images?.length ? cmsData.images.map((img: any) => ({
    src: img.image || '',
    srcLarge: img.image || '',
    title: img.title || '',
    category: img.category || '',
    alt: img.title || '',
  })) : galleryImages

  // Video section
  const videoEyebrow = cmsData?.videoSection?.eyebrow || 'Aerial Tour'
  const videoTitle = cmsData?.videoSection?.title || 'See Pearns Point<br>From <em class="font-light italic">Above</em>'
  const videoDesc = cmsData?.videoSection?.description || 'Experience the scale and beauty of the peninsula with our drone flyover — showcasing the seven beaches, tropical landscape, and breathtaking coastline.'
  const videoThumbnail = cmsData?.videoSection?.thumbnailImage || 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200&q=80'
  const videoYoutubeId = cmsData?.videoSection?.youtubeId || 'YOUTUBE_ID_HERE'

  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [videoOpen, setVideoOpen] = useState(false)

  /* Filtered images */
  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? displayImages
        : displayImages.filter((img: any) => img.category === activeCategory),
    [activeCategory, displayImages]
  )

  /* Lightbox images mapped for the LightboxModal component */
  const lightboxImages = filtered.map((img: any) => ({
    src: img.srcLarge,
    title: img.title,
    category: img.category,
  }))

  const openLightbox = (filteredIdx: number) => {
    setLightboxIndex(filteredIdx)
    setLightboxOpen(true)
  }

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
  }

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filtered.length)
  }

  /* Category counts for FilterPills */
  const counts: Record<string, number> = {}
  displayCategories.forEach((cat: string) => {
    counts[cat] = displayImages.filter((img: any) => img.category === cat).length
  })

  return (
    <>
      {/* ── HERO ── */}
      <PageHero
        backgroundImage={heroImage}
        eyebrow={heroEyebrow}
        title={heroTitle}
        subtitle={heroSubtitle}
      />

      {/* ── FILTER CONTROLS ── */}
      <section className="pt-[80px] px-[60px] max-lg:px-7">
        <ScrollReveal className="max-w-content mx-auto flex items-center justify-between flex-wrap gap-5 mb-12">
          <FilterPills
            categories={displayCategories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
            counts={counts}
          />
          <span className="text-[0.72rem] font-light text-prose-light">
            {filtered.length} images
          </span>
        </ScrollReveal>
      </section>

      {/* ── MASONRY GALLERY ── */}
      <section className="max-w-content mx-auto px-[60px] max-lg:px-7 pb-[140px]">
        <div className="columns-3 gap-4 max-lg:columns-2 max-sm:columns-1">
          <AnimatePresence mode="popLayout">
            {filtered.map((img: any, idx: number) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="break-inside-avoid mb-4 rounded-[4px] overflow-hidden relative cursor-pointer group"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full block transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,47,58,0.6)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-7">
                  <h4 className="font-display text-[1.1rem] font-normal text-white mb-1">{img.title}</h4>
                  <span className="text-[0.6rem] font-medium tracking-[0.15em] uppercase text-white/70">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ── VIDEO CTA ── */}
      <section className="py-[120px] px-[60px] max-lg:px-7 max-lg:py-20 bg-white text-center">
        <ScrollReveal className="max-w-[800px] mx-auto">
          <p className="text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
            {videoEyebrow}
          </p>
          <h2
            className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
            dangerouslySetInnerHTML={{ __html: videoTitle }}
          />
          <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[520px] mx-auto">
            {videoDesc}
          </p>

          {/* Video thumbnail */}
          <div
            className="relative mt-12 rounded-[4px] overflow-hidden cursor-pointer shadow-[0_32px_80px_rgba(0,0,0,0.1)] group"
            onClick={() => setVideoOpen(true)}
          >
            <img
              src={videoThumbnail}
              alt="Aerial video thumbnail"
              className="w-full block transition-transform duration-[1200ms] group-hover:scale-[1.06]"
              style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
            />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/[0.92] border-none flex items-center justify-center cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-400 hover:scale-110 hover:bg-white">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-ocean ml-[3px]">
                <polygon points="6,3 20,12 6,21" />
              </svg>
            </button>
          </div>
        </ScrollReveal>
      </section>

      {/* ── CTA BAND ── */}
      <CTABand
        title='Experience Pearns Point<br><em>For Yourself</em>'
        subtitle="Arrange a private tour of the peninsula or speak to our team about available plots."
        primaryCTA={{ label: 'Book a Visit', href: '/contact' }}
        secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
      />

      {/* ── LIGHTBOX ── */}
      <LightboxModal
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* ── VIDEO MODAL ── */}
      <VideoModal
        youtubeId={videoYoutubeId}
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </>
  )
}
