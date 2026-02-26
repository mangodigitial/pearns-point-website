'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter signup logic
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
        className="px-8 py-4 text-[0.62rem] font-semibold tracking-[0.25em] uppercase text-white bg-ocean border-none cursor-pointer hover:bg-ocean-deep transition-colors duration-300"
      >
        Subscribe
      </button>
    </form>
  )
}
