'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const developmentDropdown = [
  { label: 'The Development', href: '/the-development' },
  { label: 'Lots & Site Plan', href: '/lots-site-plan' },
  { label: 'Plot & Plan', href: '/plot-and-plan' },
  { label: 'The Villas', href: '/the-villas' },
]

const navLinks = [
  { label: 'Lifestyle', href: '/the-antigua-experience' },
  { label: 'Citizenship', href: '/citizenship-by-investment' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Latest News', href: '/latest-news' },
]

const allMobileLinks = [
  { label: 'The Development', href: '/the-development' },
  { label: 'Lots & Site Plan', href: '/lots-site-plan' },
  { label: 'Plot & Plan', href: '/plot-and-plan' },
  { label: 'The Villas', href: '/the-villas' },
  { label: 'Lifestyle', href: '/the-antigua-experience' },
  { label: 'Citizenship', href: '/citizenship-by-investment' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Latest News', href: '/latest-news' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setDropdownOpen(true)
  }
  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150)
  }

  const navBg = scrolled || mobileOpen
    ? 'bg-white/95 backdrop-blur-[20px] shadow-[0_1px_0_rgba(0,0,0,0.05)]'
    : ''
  const navPadY = scrolled ? 'py-4' : 'py-7'
  const logoColor = scrolled || mobileOpen ? 'text-navy' : 'text-white'
  const linkColor = (href: string) => {
    const isActive = pathname === href
    if (scrolled || mobileOpen) {
      return isActive ? 'text-ocean' : 'text-prose-mid hover:text-ocean'
    }
    return isActive ? 'text-white' : 'text-white/85 hover:text-ocean-light'
  }
  const isDevActive = developmentDropdown.some((d) => pathname === d.href)
  const devParentColor = () => {
    if (scrolled) return isDevActive ? 'text-ocean' : 'text-prose-mid hover:text-ocean'
    return isDevActive ? 'text-white' : 'text-white/85 hover:text-ocean-light'
  }
  const hamburgerBg = scrolled || mobileOpen ? 'bg-navy' : 'bg-white'

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] px-[60px] max-lg:px-7 flex items-center justify-between transition-all duration-500 ${navBg} ${navPadY}`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
      >
        <Link
          href="/"
          className={`font-display text-[1.5rem] font-normal tracking-[0.08em] no-underline transition-colors duration-400 ${logoColor}`}
        >
          Pearns <em className="font-light italic">Point</em>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-7 items-center list-none">
          {/* Development dropdown */}
          <li
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className={`font-body text-[0.67rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 bg-transparent border-none cursor-pointer flex items-center gap-1.5 ${devParentColor()}`}
            >
              Development
              <svg viewBox="0 0 10 6" className="w-2.5 h-1.5 fill-current opacity-60">
                <path d="M0 0l5 6 5-6z" />
              </svg>
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                >
                  <div className="bg-white/95 backdrop-blur-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-[4px] py-3 min-w-[200px]">
                    {developmentDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-6 py-2.5 font-body text-[0.65rem] font-medium tracking-[0.12em] uppercase no-underline transition-colors duration-200 ${
                          pathname === item.href ? 'text-ocean' : 'text-prose-mid hover:text-ocean'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-body text-[0.67rem] font-medium tracking-[0.18em] uppercase no-underline transition-colors duration-300 ${linkColor(link.href)}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className={`font-body text-[0.67rem] font-medium tracking-[0.18em] uppercase no-underline px-7 py-2.5 border-[1.5px] transition-all duration-400 ${
                scrolled
                  ? 'border-ocean text-ocean hover:bg-ocean hover:text-white'
                  : 'border-white/60 text-white/85 hover:bg-white hover:text-navy hover:border-white'
              }`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
            >
              Enquire Now
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden cursor-pointer flex flex-col gap-[6px] bg-transparent border-none p-0"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-[26px] h-[1.5px] transition-all duration-300 ${hamburgerBg} ${
              mobileOpen ? 'rotate-45 translate-y-[7.5px]' : ''
            }`}
          />
          <span
            className={`block w-[26px] h-[1.5px] transition-all duration-300 ${hamburgerBg} ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-[26px] h-[1.5px] transition-all duration-300 ${hamburgerBg} ${
              mobileOpen ? '-rotate-45 -translate-y-[7.5px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-[999] bg-white pt-24 px-7 overflow-y-auto lg:hidden"
          >
            <ul className="list-none flex flex-col gap-6">
              {allMobileLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Link
                    href={link.href}
                    className={`font-body text-[0.8rem] font-medium tracking-[0.15em] uppercase no-underline ${
                      pathname === link.href ? 'text-ocean' : 'text-navy'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                className="mt-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + allMobileLinks.length * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link
                  href="/contact"
                  className="inline-block font-body text-[0.67rem] font-semibold tracking-[0.25em] uppercase text-white bg-ocean px-10 py-4"
                  onClick={() => setMobileOpen(false)}
                >
                  Enquire Now
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
