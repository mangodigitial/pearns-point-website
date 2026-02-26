'use client'

import { useState } from 'react'

interface ShareBarProps {
  title: string
  url?: string
}

export default function ShareBar({ title, url }: ShareBarProps) {
  const [copied, setCopied] = useState(false)
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-4 mt-10 pt-8 border-t border-sand">
      <span className="text-[0.6rem] font-semibold tracking-[0.25em] uppercase text-prose-light">
        Share
      </span>
      <div className="flex gap-3">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-sand text-prose-mid hover:bg-ocean hover:border-ocean hover:text-white transition-all duration-300 text-xs"
        >
          f
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-sand text-prose-mid hover:bg-ocean hover:border-ocean hover:text-white transition-all duration-300 text-xs"
        >
          𝕏
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-sand text-prose-mid hover:bg-ocean hover:border-ocean hover:text-white transition-all duration-300 text-xs"
        >
          in
        </a>
        <button
          onClick={copyLink}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-sand text-prose-mid hover:bg-ocean hover:border-ocean hover:text-white transition-all duration-300 text-xs cursor-pointer bg-transparent"
        >
          {copied ? '✓' : '🔗'}
        </button>
      </div>
    </div>
  )
}
