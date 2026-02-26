'use client'

import { motion } from 'framer-motion'

interface PageHeroProps {
  backgroundImage: string
  eyebrow?: string
  title: string
  subtitle?: string
  isHome?: boolean
  heightClass?: string
  children?: React.ReactNode
  vimeoId?: string
  youtubeId?: string
}

export default function PageHero({ backgroundImage, eyebrow, title, subtitle, isHome = false, heightClass, children, vimeoId, youtubeId }: PageHeroProps) {
  const sectionHeight = heightClass ?? (isHome ? 'h-screen min-h-[700px]' : 'h-[65vh] min-h-[500px]')
  const titleSize = isHome
    ? 'text-[clamp(2.8rem,6.5vw,5.2rem)]'
    : 'text-[clamp(2.4rem,5vw,4rem)]'

  return (
    <section className={`${sectionHeight} relative flex items-center justify-center overflow-hidden`}>
      {/* Background image with Ken Burns */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center 30%',
        }}
        initial={isHome ? { scale: 1.05 } : {}}
        animate={isHome ? { scale: 1 } : {}}
        transition={isHome ? { duration: 18, ease: [0.25, 0.1, 0.25, 1] } : {}}
      />

      {/* Video background */}
      {(vimeoId || youtubeId) && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black/20">
          {vimeoId && (
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&muted=1&quality=1080p`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full"
              allow="autoplay; fullscreen"
              style={{ border: 0 }}
              title="Hero background video"
            />
          )}
          {youtubeId && (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3`}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full"
              allow="autoplay; fullscreen"
              style={{ border: 0 }}
              title="Hero background video"
            />
          )}
        </div>
      )}

      {/* Dark scrim for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.05) 70%, rgba(250,248,244,0.2) 88%, rgba(250,248,244,0.5) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-[2] text-center max-w-[850px] px-10 -mt-[60px] max-sm:px-5">
        {eyebrow && (
          <motion.p
            className="font-body text-[0.62rem] font-medium tracking-[0.5em] uppercase text-white mb-6"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: isHome ? 2 : 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          className={`font-display ${titleSize} font-normal leading-[1.1] text-white mb-6`}
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.25)' }}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: isHome ? 2.3 : 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {subtitle && (
          <motion.p
            className="font-body text-[0.88rem] font-light tracking-[0.04em] leading-[1.8] text-white/90 max-w-[540px] mx-auto mb-11"
            style={{ textShadow: '0 1px 6px rgba(0,0,0,0.2)' }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: isHome ? 2.6 : 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>

      {/* Scroll indicator (home only) */}
      {isHome && (
        <motion.div
          className="absolute bottom-[36px] left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2.5"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span
            className="text-[0.5rem] tracking-[0.3em] uppercase text-white/80"
            style={{ textShadow: '0 1px 6px rgba(0,0,0,0.3)' }}
          >
            Scroll to explore
          </span>
          <div
            className="w-px h-10"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)',
              animation: 'scrollPulse 2.5s infinite',
            }}
          />
        </motion.div>
      )}
    </section>
  )
}
