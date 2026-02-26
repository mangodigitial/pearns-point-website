'use client'

import { useState, useEffect } from 'react'

interface ScrollPillNavProps {
  sections: { id: string; label: string }[]
}

export default function ScrollPillNav({ sections }: ScrollPillNavProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id || '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="sticky top-[72px] z-[100] bg-white/95 backdrop-blur-[20px] border-b border-sand py-4 px-[60px] max-lg:px-7 overflow-x-auto">
      <div className="flex gap-3 justify-center max-lg:justify-start">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`whitespace-nowrap px-5 py-2 text-[0.6rem] font-semibold tracking-[0.15em] uppercase border-[1.5px] transition-all duration-300 cursor-pointer ${
              activeId === id
                ? 'bg-ocean border-ocean text-white'
                : 'bg-transparent border-sand text-prose-mid hover:border-ocean hover:text-ocean'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
