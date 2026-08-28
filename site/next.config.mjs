/** @type {import('next').NextConfig} */

/* Content Security Policy.

   Deliberately permissive on script/img/connect: Google Tag Manager is live on
   the site and can inject arbitrary vendor tags, so a strict script-src would
   break tracking the moment a new tag is added in GTM. What this policy does
   buy is the set of directives GTM cannot undermine — frame-ancestors stops
   clickjacking, form-action stops a injected form posting off-site, base-uri
   stops a <base> tag hijacking every relative URL, and object-src kills plugin
   embeds outright.

   Not applied to /studio: Sanity Studio needs eval, blob workers and websocket
   connections that would need a much looser policy than the public site. */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://*.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com https://www.gstatic.com https://cdn.jsdelivr.net",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data: blob: https:",
  "media-src 'self' blob: https:",
  "connect-src 'self' https: wss:",
  "frame-src 'self' https://*.googletagmanager.com https://td.doubleclick.net https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com https://iframe.mediadelivery.net",
  "worker-src 'self' blob:",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ')

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
]

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      // Everything except the Studio gets the CSP.
      { source: '/((?!studio).*)', headers: [{ key: 'Content-Security-Policy', value: csp }] },
    ]
  },

  async redirects() {
    return [
      // The apex and www both resolve, which splits the site in Google's index.
      // www is the canonical host, so send the apex there permanently.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'pearnspoint.com' }],
        destination: 'https://www.pearnspoint.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
