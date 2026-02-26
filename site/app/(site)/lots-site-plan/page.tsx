import type { Metadata } from 'next'
import LotsSitePlanPage from './LotsSitePlanContent'

export const metadata: Metadata = {
  title: 'Lots & Site Plan — Explore the Peninsula',
  description:
    'Browse eight distinct areas across the Pearns Point peninsula — from beachfront lots to elevated ocean-view positions with 360\u00b0 panoramas.',
}

export default function Page() {
  return <LotsSitePlanPage />
}
