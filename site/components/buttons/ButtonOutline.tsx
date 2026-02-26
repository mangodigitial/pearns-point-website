import Link from 'next/link'

interface ButtonOutlineProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function ButtonOutline({ href, children, className = '' }: ButtonOutlineProps) {
  return (
    <Link
      href={href}
      className={`inline-block font-body text-[0.62rem] font-medium tracking-[0.25em] uppercase text-ocean bg-transparent border-[1.5px] border-ocean px-12 py-4 transition-all duration-400 hover:bg-ocean hover:text-white ${className}`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
    >
      {children}
    </Link>
  )
}
