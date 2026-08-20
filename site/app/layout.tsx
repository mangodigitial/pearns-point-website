import type { Metadata } from 'next'
import Script from 'next/script'
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
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WSKT4TXX');`}
        </Script>
      </head>
      <body className="font-body text-charcoal bg-cream antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WSKT4TXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
