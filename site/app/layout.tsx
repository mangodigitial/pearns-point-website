import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://pearnspoint.com'
const OG_DESCRIPTION =
  'An exclusive 137-acre peninsula on the west coast of Antigua — luxury plots, bespoke villas, and Caribbean citizenship by investment.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    siteName: 'Pearns Point',
    locale: 'en_GB',
    url: SITE_URL,
    title: 'Pearns Point — Luxury Caribbean Living in Antigua',
    description: OG_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pearns Point — Luxury Caribbean Living in Antigua',
    description: OG_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  title: {
    default: 'Pearns Point — Luxury Caribbean Living in Antigua',
    template: '%s | Pearns Point',
  },
  description:
    'Discover Pearns Point, an exclusive 137-acre peninsula on Antigua\u2019s west coast offering luxury plots, bespoke villas, and Caribbean citizenship by investment.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Raleway:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body text-charcoal bg-cream antialiased">
        {children}
      </body>
    </html>
  )
}
