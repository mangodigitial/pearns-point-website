'use client'

/**
 * Temporary image placeholder for the Resort Villas draft page.
 * Swap each <ImagePlaceholder /> for an <img> (or Sanity image) once
 * photography is supplied. Delete this file when none remain.
 */
interface ImagePlaceholderProps {
  label: string
  className?: string
}

export default function ImagePlaceholder({ label, className = '' }: ImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[4px] border border-ocean/15 flex items-center justify-center text-center ${className}`}
      style={{
        background:
          'repeating-linear-gradient(135deg, rgba(26,122,138,0.05) 0px, rgba(26,122,138,0.05) 14px, rgba(26,122,138,0.09) 14px, rgba(26,122,138,0.09) 28px)',
      }}
    >
      <div className="px-6">
        <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-9 h-9 mx-auto mb-3 text-ocean/60">
          <rect x="5" y="9" width="34" height="26" rx="1" />
          <circle cx="15" cy="18" r="3" />
          <path d="M6 31 L17 21 L24 27 L30 22 L38 30" />
        </svg>
        <p className="font-body text-[0.55rem] font-semibold tracking-[0.35em] uppercase text-ocean/70 mb-1">
          Image to follow
        </p>
        <p className="text-[0.78rem] font-light leading-[1.6] text-prose-mid/80 max-w-[280px] mx-auto">{label}</p>
      </div>
    </div>
  )
}
