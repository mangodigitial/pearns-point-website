import type { Metadata } from 'next'
import LatestNewsPage from './NewsContent'

export const metadata: Metadata = {
  title: 'Latest News — Pearns Point',
  description:
    'Development updates, island events, lifestyle features, and investment insights from Pearns Point, Antigua.',
}

export default function Page() {
  return <LatestNewsPage />
}
