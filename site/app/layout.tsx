import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
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
