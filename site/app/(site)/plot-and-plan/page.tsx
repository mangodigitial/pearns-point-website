import type { Metadata } from 'next'
import PlotAndPlanPage from './PlotAndPlanContent'

export const metadata: Metadata = {
  title: 'Plot & Plan — Turnkey Luxury Villas',
  description:
    'Choose from three pre-designed luxury villa styles delivered turnkey at a final price by world-class architects at Pearns Point, Antigua.',
}

export default function Page() {
  return <PlotAndPlanPage />
}
