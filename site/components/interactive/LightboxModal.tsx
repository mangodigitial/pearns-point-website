'use client'

import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LightboxImage {
  src: string
  title?: string
  category?: string
}

interface LightboxModalProps {
  images: LightboxImage[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function LightboxModal({ images, currentIndex, isOpen, onClose, onPrev, onNext }: LightboxModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  const current = images[currentIndex]
  if (!current) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[2000] bg-black/90 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl cursor-pointer bg-transparent border-none z-10"
            onClick={onClose}
          >
            ✕
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 text-[0.65rem] font-medium tracking-[0.15em] uppercase text-white/50">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Prev/Next */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl cursor-pointer bg-transparent border-none"
            onClick={(e) => { e.stopPropagation(); onPrev() }}
          >
            ‹
          </button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-4xl cursor-pointer bg-transparent border-none"
            onClick={(e) => { e.stopPropagation(); onNext() }}
          >
            ›
          </button>

          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.title || ''}
              className="max-w-full max-h-[80vh] object-contain"
            />
            {(current.title || current.category) && (
              <div className="mt-4 text-center">
                {current.title && (
                  <p className="text-white text-[0.9rem] font-light">{current.title}</p>
                )}
                {current.category && (
                  <p className="text-white/50 text-[0.6rem] font-medium tracking-[0.2em] uppercase mt-1">
                    {current.category}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
