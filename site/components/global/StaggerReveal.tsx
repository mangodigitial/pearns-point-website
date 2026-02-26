'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface StaggerRevealProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export const staggerItem = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function StaggerReveal({ children, className = '', staggerDelay = 0.12 }: StaggerRevealProps) {
  return (
    <motion.div
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
