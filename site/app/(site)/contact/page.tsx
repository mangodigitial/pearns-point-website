import type { Metadata } from 'next'
import ContactPage from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us — Pearns Point',
  description:
    'Get in touch with the Pearns Point sales team. Call, email, or book a site visit to Antigua\u2019s premier luxury development.',
}

export default function Page() {
  return <ContactPage />
}
