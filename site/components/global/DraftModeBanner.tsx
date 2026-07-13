/**
 * Fixed bar shown only while Next.js Draft Mode is active, so editors know they
 * are viewing unpublished (draft/scheduled) content and can exit preview.
 */
export default function DraftModeBanner() {
  return (
    <div className="fixed bottom-4 left-1/2 z-[9999] -translate-x-1/2 flex items-center gap-4 rounded-full bg-navy px-5 py-2.5 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <span className="text-[0.78rem] font-light tracking-wide">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-lagoon align-middle" />
        Preview mode — showing unpublished content
      </span>
      <a
        href="/api/draft/disable"
        className="rounded-full bg-white/15 px-3 py-1 text-[0.72rem] font-medium hover:bg-white/25 transition-colors"
      >
        Exit preview
      </a>
    </div>
  )
}
