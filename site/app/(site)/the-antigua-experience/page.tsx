import type { Metadata } from 'next'
import TheAntiguaExperiencePage from './AntiguaContent'

export const metadata: Metadata = {
  title: 'The Antigua Experience — Island Life',
  description:
    'Discover Antigua — 365 beaches, world-class sailing, exceptional dining, year-round sunshine, and direct flights from London and New York.',
}

export default function Page() {
  return <TheAntiguaExperiencePage />
}
