import type { Metadata } from 'next'
import HomePage from './HomeContent'

export const metadata: Metadata = {
  title: 'Pearns Point — Luxury Caribbean Living in Antigua',
  description:
    'Discover Pearns Point, an exclusive 137-acre peninsula on Antigua\u2019s west coast offering luxury plots, bespoke villas, and Caribbean citizenship by investment.',
}

export default function Page() {
  return <HomePage />
}
