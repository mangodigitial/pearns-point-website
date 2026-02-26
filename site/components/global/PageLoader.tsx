'use client'

import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (hidden) return null

  return (
    <div
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
      style={{ animation: 'fadeUp 0.6s 1.4s forwards' }}
    >
      <div className="w-[60px] h-[2px] bg-sand overflow-hidden rounded-full">
        <div
          className="h-full bg-ocean rounded-full"
          style={{ animation: 'loadLine 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) infinite' }}
        />
      </div>
    </div>
  )
}
