'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface VideoModalProps {
  youtubeId: string
  isOpen: boolean
  onClose: () => void
}

export default function VideoModal({ youtubeId, isOpen, onClose }: VideoModalProps) {
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
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-none"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
