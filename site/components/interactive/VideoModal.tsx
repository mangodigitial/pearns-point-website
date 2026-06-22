'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type HlsType from 'hls.js'

interface VideoModalProps {
  /** Bunny.net video URL (.mp4 or .m3u8 HLS). Preferred. */
  videoUrl?: string
  /** Legacy YouTube embed ID (used when no videoUrl is set). */
  youtubeId?: string
  isOpen: boolean
  onClose: () => void
}

export default function VideoModal({ videoUrl, youtubeId, isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen) {
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
      }
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
      return () => {
        document.removeEventListener('keydown', handleKey)
        document.body.style.overflow = ''
      }
    }
  }, [isOpen, onClose])

  // Load the Bunny.net video into the native <video>. MP4 plays directly;
  // HLS (.m3u8) plays natively in Safari and via hls.js everywhere else.
  useEffect(() => {
    if (!isOpen || !videoUrl) return
    const video = videoRef.current
    if (!video) return

    const isHls = videoUrl.toLowerCase().includes('.m3u8')
    if (!isHls || video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoUrl
      return
    }

    let hls: HlsType | undefined
    let cancelled = false
    import('hls.js').then(({ default: Hls }) => {
      if (cancelled) return
      if (Hls.isSupported()) {
        hls = new Hls()
        hls.loadSource(videoUrl)
        hls.attachMedia(video)
      } else {
        video.src = videoUrl
      }
    })

    return () => {
      cancelled = true
      hls?.destroy()
    }
  }, [isOpen, videoUrl])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[2000] bg-black/90 flex items-center justify-center p-8"
          onClick={onClose}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl cursor-pointer bg-transparent border-none"
            onClick={onClose}
          >
            ✕
          </button>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-[900px] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            {videoUrl ? (
              <video
                ref={videoRef}
                controls
                autoPlay
                playsInline
                className="w-full h-full bg-black"
              />
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-none"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
