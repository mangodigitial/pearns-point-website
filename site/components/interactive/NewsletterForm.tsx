'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'newsletter',
          company: '',
          pageUrl: window.location.href,
          referrer: document.referrer,
        }),
      })

      if (!response.ok) throw new Error('Request failed: ' + response.status)

      setStatus('sent')
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'newsletter_signup' })
      setEmail('')
    } catch (error) {
      console.error('[NewsletterForm] submission failed', error)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-0 max-sm:flex-col max-sm:gap-3">
      <input
        type="email"
        placeholder="Enter your email address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-5 py-4 text-[0.85rem] font-light text-white bg-white/10 border border-white/20 rounded-none outline-none placeholder:text-white/40 focus:border-lagoon transition-colors duration-300"
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="px-8 py-4 text-[0.62rem] font-semibold tracking-[0.25em] uppercase text-white bg-ocean border-none cursor-pointer hover:bg-ocean-deep transition-colors duration-300"
      >
        Subscribe
      </button>
      {status === 'sent' && (
        <p className="mt-3 text-[0.8rem] font-light text-white/80" role="status">
          Thank you — you have been added to the list.
        </p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-[0.8rem] font-light text-red-300" role="alert">
          Sorry, something went wrong. Please try again.
        </p>
      )}
    </form>
  )
}
