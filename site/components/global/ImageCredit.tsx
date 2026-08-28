/* Architect / photographer accreditation shown over an image.
   Renders nothing when no credit is set, so uncredited images are unaffected. */
export default function ImageCredit({ credit, className = '' }: { credit?: string; className?: string }) {
  if (!credit) return null
  return (
    <span
      className={`absolute bottom-0 left-0 right-0 z-[1] px-3 pt-6 pb-2 text-[0.6rem] font-medium tracking-[0.08em] text-white/90 bg-gradient-to-t from-black/55 to-transparent pointer-events-none ${className}`}
    >
      {credit}
    </span>
  )
}
