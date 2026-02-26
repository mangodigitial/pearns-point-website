'use client'

import { motion } from 'framer-motion'
import { staggerItem } from '../global/StaggerReveal'

interface ContactCardProps {
  icon: React.ReactNode
  title: string
  description: string
  action: React.ReactNode
  footnote?: string
}

export default function ContactCard({ icon, title, description, action, footnote }: ContactCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative bg-white rounded overflow-hidden p-10 max-lg:p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(0,0,0,0.07)]"
    >
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-ocean to-lagoon scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" />
      <div className="w-[52px] h-[52px] mx-auto mb-5 bg-ocean/[0.06] rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-display text-[1.15rem] font-normal text-navy mb-2">
        {title}
      </h3>
      <p className="text-[0.78rem] font-light leading-[1.7] text-prose-mid mb-4">
        {description}
      </p>
      {action}
      {footnote && (
        <p className="text-[0.72rem] font-light text-prose-light mt-1">{footnote}</p>
      )}
    </motion.div>
  )
}
