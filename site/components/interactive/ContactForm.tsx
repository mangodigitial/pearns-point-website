'use client'

import { useState } from 'react'

interface ContactFormProps {
  enquiryTypes?: string[]
}

export default function ContactForm({ enquiryTypes = [] }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', country: '', interest: '', message: '', consent: false,
  })

  const inputClass = 'w-full px-4 py-3.5 text-[0.85rem] font-light text-charcoal bg-white border-[1.5px] border-sand rounded-none outline-none transition-all duration-300 focus:border-ocean focus:shadow-[0_0_0_3px_rgba(26,122,138,0.08)] placeholder:text-prose-light placeholder:font-light'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
        <input
          type="text"
          placeholder="Full Name *"
          required
          className={inputClass}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email Address *"
          required
          className={inputClass}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
        <input
          type="tel"
          placeholder="Phone Number"
          className={inputClass}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Country of Residence"
          className={inputClass}
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
        />
      </div>
      {enquiryTypes.length > 0 && (
        <select
          className={inputClass}
          value={formData.interest}
          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
        >
          <option value="">I&apos;m interested in...</option>
          {enquiryTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      )}
      <textarea
        placeholder="Your Message"
        rows={5}
        className={`${inputClass} resize-none`}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-1 accent-ocean"
        />
        <span className="text-[0.75rem] font-light text-prose-mid leading-[1.6]">
          I consent to Pearns Point storing my details and contacting me regarding my enquiry.
        </span>
      </label>
      <button
        type="submit"
        className="inline-block font-body text-[0.62rem] font-semibold tracking-[0.25em] uppercase text-white bg-ocean px-12 py-4 border-none cursor-pointer transition-all duration-400 hover:bg-ocean-deep hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(26,122,138,0.25)]"
        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
      >
        Send Enquiry
      </button>
    </form>
  )
}
