'use client'

import { motion } from 'framer-motion'
import { staggerItem } from '../global/StaggerReveal'

interface FeatureCardProps {
  icon?: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative overflow-hidden p-12 px-10 bg-white rounded-[4px] border border-black/[0.04] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
      style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
    >
      {/* Animated top border */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{
          background: 'linear-gradient(90deg, #1a7a8a, #48b5c4)',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        }}
      />
      {icon && (
        <div
          className="w-11 h-11 mb-6 text-ocean"
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      )}
      <h3 className="font-display text-[1.35rem] font-normal text-navy mb-3">{title}</h3>
      <p className="text-[0.8rem] font-light leading-[1.75] text-prose-mid">{description}</p>
    </motion.div>
  )
}
