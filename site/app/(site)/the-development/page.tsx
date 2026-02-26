import type { Metadata } from 'next'
import TheDevelopmentPage from './DevelopmentContent'

export const metadata: Metadata = {
  title: 'The Development — Pearns Point, Antigua',
  description:
    'Explore the vision behind Pearns Point — a rare peninsula development on Antigua\u2019s west coast with 49 exclusive plots across seven private beaches.',
}

export default function Page() {
  return <TheDevelopmentPage />
}
