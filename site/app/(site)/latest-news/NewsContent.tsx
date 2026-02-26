'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '@/components/global/PageHero'
import ScrollReveal from '@/components/global/ScrollReveal'
import StaggerReveal, { staggerItem } from '@/components/global/StaggerReveal'
import GoldRule from '@/components/global/GoldRule'
import CTABand from '@/components/global/CTABand'
import ArticleCard from '@/components/cards/ArticleCard'
import FilterPills from '@/components/interactive/FilterPills'
import NewsletterForm from '@/components/interactive/NewsletterForm'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'

/* ─── static data ─── */

const categories = ['Development', 'Lifestyle', 'Antigua', 'Citizenship']

const featuredArticle = {
  slug: 'three-new-villa-designs-unveiled',
  title: 'Three New Villa Designs Unveiled for Pearns Point',
  titleHtml: (
    <>
      Three New Villa Designs <em className="font-light italic">Unveiled</em> for Pearns Point
    </>
  ),
  excerpt:
    "We're excited to reveal three distinctive architectural visions for the Plot & Plan programme \u2014 Caribbean Chic, Naturally Modern, and Caribbean Connected \u2014 each crafted by our internationally acclaimed design partners.",
  category: 'Development',
  date: 'February 2026',
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80',
}

const articles = [
  {
    slug: 'infrastructure-phase-one-reaches-completion',
    title: 'Infrastructure Phase One Reaches Completion',
    excerpt:
      'The first phase of road infrastructure and utilities across the Pearns Point peninsula has been completed on schedule, laying the groundwork for villa construction to begin.',
    category: 'development',
    categoryLabel: 'Development',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
  },
  {
    slug: 'antigua-sailing-week-the-caribbeans-premier-regatta',
    title: "Antigua Sailing Week: The Caribbean's Premier Regatta",
    excerpt:
      "As the island prepares for its world-famous sailing week, we look at why Antigua remains one of the top destinations for competitive sailing and superyacht culture.",
    category: 'lifestyle',
    categoryLabel: 'Lifestyle',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=600&q=80',
  },
  {
    slug: 'antigua-cbi-programme-2026-updates',
    title: 'Antigua CBI Programme: 2026 Updates & What You Need to Know',
    excerpt:
      "An overview of recent updates to Antigua & Barbuda's Citizenship by Investment programme, including processing times, fee structures, and new due diligence requirements.",
    category: 'cbi',
    categoryLabel: 'Citizenship',
    date: 'December 2025',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80',
  },
  {
    slug: 'best-restaurants-in-antigua',
    title: 'The Best Restaurants in Antigua: A Curated Guide',
    excerpt:
      "From beachside lobster grills to refined Caribbean-fusion dining, our guide to the island's most exceptional restaurants \u2014 and the chefs behind them.",
    category: 'antigua',
    categoryLabel: 'Antigua',
    date: 'November 2025',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
  },
  {
    slug: 'ksr-architects-designing-for-the-tropics',
    title: 'In Conversation: KSR Architects on Designing for the Tropics',
    excerpt:
      "We sit down with the London-based practice behind Pearns Point's villa designs to discuss their approach to tropical architecture, sustainability, and the creative process.",
    category: 'development',
    categoryLabel: 'Development',
    date: 'October 2025',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  },
  {
    slug: 'superyacht-season-chartering-leeward-islands',
    title: 'Superyacht Season: Chartering in the Leeward Islands',
    excerpt:
      "As the winter charter season begins, we explore the best routes, anchorages, and island-hopping itineraries available from Antigua's world-class marinas.",
    category: 'lifestyle',
    categoryLabel: 'Lifestyle',
    date: 'October 2025',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=80',
  },
  {
    slug: 'english-harbour-heart-of-antiguan-heritage',
    title: 'English Harbour: The Heart of Antiguan Heritage',
    excerpt:
      "A look at Nelson's Dockyard and the surrounding English Harbour area \u2014 its history, its restoration, and why it remains the island's most iconic destination.",
    category: 'antigua',
    categoryLabel: 'Antigua',
    date: 'September 2025',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
  },
  {
    slug: 'conservation-at-pearns-point',
    title: 'Conservation at Pearns Point: Protecting 70% of the Peninsula',
    excerpt:
      "How Orange Limited's commitment to preserving over 70% of the land as natural habitat is shaping one of the most environmentally responsible developments in the Caribbean.",
    category: 'development',
    categoryLabel: 'Development',
    date: 'August 2025',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&q=80',
  },
  {
    slug: 'why-second-citizenship-essential-hnwi',
    title: 'Why Second Citizenship is Becoming Essential for HNWI Families',
    excerpt:
      'As global uncertainty grows, high-net-worth individuals are increasingly turning to citizenship by investment as a strategic tool for family security, mobility, and tax planning.',
    category: 'cbi',
    categoryLabel: 'Citizenship',
    date: 'July 2025',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&q=80',
  },
]

/* ─── page ─── */

export default function LatestNewsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredArticles =
    activeFilter === 'All'
      ? articles
      : articles.filter((a) => a.categoryLabel === activeFilter)

  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        eyebrow="Pearns Point"
        title='Latest <em>News</em>'
        subtitle="Updates from the development, island events, and insights into life at Pearns Point."
        backgroundImage="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1920&q=85"
        heightClass="h-[55vh] min-h-[400px]"
      />

      {/* ── Featured Article ── */}
      <section className="pt-20 px-[60px] max-lg:px-7 max-w-content mx-auto">
        <ScrollReveal>
          <Link href={`/news/${featuredArticle.slug}`} className="group">
            <div className="grid grid-cols-[1.1fr_1fr] max-lg:grid-cols-1 rounded overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.09)]">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover min-h-[400px] max-lg:min-h-[280px] transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.04]"
                />
                <span className="absolute top-6 left-6 px-4 py-1.5 bg-ocean text-[0.52rem] font-semibold tracking-[0.2em] uppercase text-white rounded-sm">
                  Featured
                </span>
              </div>

              {/* Body */}
              <div className="px-[52px] py-14 max-lg:px-8 max-lg:py-9 flex flex-col justify-center">
                <div className="text-[0.6rem] font-medium tracking-[0.15em] uppercase text-prose-light mb-4">
                  <span className="text-ocean">{featuredArticle.category}</span>{' '}
                  &nbsp;&middot;&nbsp; {featuredArticle.date}
                </div>
                <h2 className="font-display text-[clamp(1.5rem,2.5vw,2rem)] font-normal text-navy leading-[1.3] mb-4">
                  {featuredArticle.titleHtml}
                </h2>
                <p className="text-[0.84rem] font-light leading-[1.8] text-prose-mid mb-7">
                  {featuredArticle.excerpt}
                </p>
                <span className="inline-flex items-center gap-2.5 text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-ocean transition-[gap] duration-300 group-hover:gap-4">
                  Read Article
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 stroke-current stroke-[1.5] fill-none"
                  >
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <polyline points="14,6 20,12 14,18" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </ScrollReveal>
      </section>

      {/* ── Filter Bar ── */}
      <div className="pt-20 max-lg:pt-[60px] px-[60px] max-lg:px-7 max-w-content mx-auto flex items-center justify-between flex-wrap gap-4 border-b border-sand pb-6 mb-12">
        <FilterPills
          categories={categories}
          activeCategory={activeFilter}
          onSelect={setActiveFilter}
        />
        <span className="text-[0.72rem] font-light text-prose-light">
          {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* ── Articles Grid ── */}
      <section className="px-[60px] max-lg:px-7 pb-[100px] max-lg:pb-20 max-w-content mx-auto">
        <motion.div
          layout
          className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article) => (
              <motion.div
                key={article.slug}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <ArticleCard
                  slug={article.slug}
                  title={article.title}
                  excerpt={article.excerpt}
                  category={article.categoryLabel}
                  date={article.date}
                  image={article.image}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-[100px] max-lg:py-20 px-[60px] max-lg:px-7 bg-navy text-center">
        <ScrollReveal>
          <div className="max-w-[600px] mx-auto">
            <p className="text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-lagoon mb-4">
              Stay Informed
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal text-white mb-5">
              Subscribe to <em className="font-light italic text-lagoon">Updates</em>
            </h2>
            <p className="text-[0.88rem] font-light leading-[1.85] text-white/60 max-w-[480px] mx-auto mb-9">
              Receive development news, lifestyle features, and market insights delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </ScrollReveal>
      </section>

      {/* ── CTA Band ── */}
      <CTABand
        title="Explore Pearns Point"
        subtitle="Discover available lots, villa designs, and the lifestyle that awaits on Antigua's western coast."
        primaryCTA={{ label: "View Available Lots", href: "/lots-site-plan" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  )
}
