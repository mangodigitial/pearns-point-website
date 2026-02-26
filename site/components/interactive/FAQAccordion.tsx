'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-0">
      {items.map((item, index) => (
        <div key={index} className="border-b border-sand">
          <button
            className="w-full flex items-center justify-between py-6 px-0 bg-transparent border-none cursor-pointer text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-display text-[1.15rem] font-normal text-navy pr-8">
              {item.question}
            </span>
            <span
              className={`text-ocean text-xl flex-shrink-0 transition-transform duration-500 ${
                openIndex === index ? 'rotate-45' : ''
              }`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
            >
              +
            </span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <p className="text-[0.85rem] font-light leading-[1.85] text-prose-mid pb-6">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
