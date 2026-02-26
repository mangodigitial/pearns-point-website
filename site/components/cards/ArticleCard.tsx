'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { staggerItem } from '../global/StaggerReveal'

interface ArticleCardProps {
  image: string
  category: string
  date: string
  title: string
  excerpt: string
  slug: string
  readTime?: number
}

export default function ArticleCard({ image, category, date, title, excerpt, slug, readTime }: ArticleCardProps) {
  return (
    <motion.article variants={staggerItem} className="group bg-white rounded-[4px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)]" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
      <Link href={`/news/${slug}`} className="block no-underline">
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.05]"
            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
          />
          <span className="absolute top-4 left-4 text-[0.48rem] font-semibold tracking-[0.2em] uppercase text-white bg-navy/80 backdrop-blur-[8px] px-3 py-1.5 rounded-[2px]">
            {category}
          </span>
        </div>
        <div className="px-7 py-7 pb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[0.65rem] font-light text-prose-light">{date}</span>
            {readTime && (
              <>
                <span className="text-[0.65rem] text-sand-dark">&middot;</span>
                <span className="text-[0.65rem] font-light text-prose-light">{readTime} min read</span>
              </>
            )}
          </div>
          <h3 className="font-display text-[1.25rem] font-normal text-navy mb-2 group-hover:text-ocean transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[0.8rem] font-light leading-[1.7] text-prose-mid line-clamp-3">
            {excerpt}
          </p>
          <span className="inline-block mt-4 text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-ocean">
            Read More →
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
