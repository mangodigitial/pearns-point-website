'use client'

import ScrollReveal from './ScrollReveal'

interface QuoteStripProps {
  text: string
  attribution?: string
}

export default function QuoteStrip({ text, attribution }: QuoteStripProps) {
  return (
    <section
      className="relative py-[100px] px-[60px] text-center overflow-hidden max-lg:px-7"
      style={{
        background: 'linear-gradient(135deg, #0d5f6e 0%, #1a7a8a 50%, #48b5c4 100%)',
      }}
    >
      {/* Cross pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <ScrollReveal className="relative z-[2] max-w-[800px] mx-auto">
        <blockquote className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-light italic text-white leading-[1.45] mb-7">
          &ldquo;{text}&rdquo;
        </blockquote>
        {attribution && (
          <cite className="font-body not-italic text-[0.6rem] font-medium tracking-[0.35em] uppercase text-white/60">
            {attribution}
          </cite>
        )}
      </ScrollReveal>
    </section>
  )
}
