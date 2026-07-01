import { ImageResponse } from 'next/og'

// Site-wide social share image. File-based convention: Next injects this as
// og:image AND twitter:image for every route that doesn't define its own.
export const runtime = 'edge'
export const alt = 'Pearns Point — Luxury Caribbean Living in Antigua'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a2f3a',
          color: '#faf8f4',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Inner gold frame */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            right: 40,
            bottom: 40,
            border: '2px solid #b69a6a',
          }}
        />
        <div
          style={{
            fontSize: 26,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: '#b69a6a',
            marginBottom: 28,
          }}
        >
          Antigua · West Indies
        </div>
        <div
          style={{
            fontSize: 104,
            fontWeight: 600,
            letterSpacing: 4,
            lineHeight: 1,
            textAlign: 'center',
          }}
        >
          PEARNS POINT
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 34,
            fontStyle: 'italic',
            color: '#d4c5a9',
            textAlign: 'center',
          }}
        >
          Luxury Caribbean Living
        </div>
      </div>
    ),
    { ...size }
  )
}
