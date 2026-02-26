import type { Metadata } from 'next'
import CitizenshipByInvestmentPage from './CbiContent'

export const metadata: Metadata = {
  title: 'Citizenship by Investment — Antigua & Barbuda',
  description:
    'Learn about Antigua\u2019s CBI programme — visa-free access to 150+ countries, fast processing, and full family inclusion through Pearns Point.',
}

export default function Page() {
  return <CitizenshipByInvestmentPage />
}
