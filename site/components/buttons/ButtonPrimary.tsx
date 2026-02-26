import Link from 'next/link'

interface ButtonPrimaryProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function ButtonPrimary({ href, children, className = '' }: ButtonPrimaryProps) {
  return (
    <Link
      href={href}
      className={`inline-block text-center font-body text-[0.62rem] font-semibold tracking-[0.25em] uppercase text-white bg-ocean px-12 py-4 transition-all duration-400 hover:bg-ocean-deep hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(26,122,138,0.25)] ${className}`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
    >
      {children}
    </Link>
  )
}
