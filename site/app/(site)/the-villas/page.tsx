import type { Metadata } from 'next'
import TheVillasPage from './VillasContent'

export const metadata: Metadata = {
  title: 'The Villas — Architecture & Design',
  description:
    'Discover the design philosophy behind Pearns Point villas — horizontal architecture, natural materials, and world-class creative partners.',
}

export default function Page() {
  return <TheVillasPage />
}
