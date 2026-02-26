import Link from 'next/link'

const exploreLinks = [
  { label: 'The Development', href: '/the-development' },
  { label: 'The Villas', href: '/the-villas' },
  { label: 'Lots & Site Plan', href: '/lots-site-plan' },
  { label: 'Gallery', href: '/gallery' },
]

const infoLinks = [
  { label: 'The Antigua Experience', href: '/the-antigua-experience' },
  { label: 'Citizenship by Investment', href: '/citizenship-by-investment' },
  { label: 'Latest News', href: '/latest-news' },
  { label: 'Plot and Plan', href: '/plot-and-plan' },
]

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-sand">
      <div className="max-w-content mx-auto px-[60px] max-lg:px-7 pt-20 pb-12">
        <div className="grid grid-cols-[2fr_1fr_1fr_1.2fr] gap-[60px] max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-9">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-[1.3rem] font-normal text-navy no-underline block mb-4">
              Pearns <em className="font-light italic">Point</em>
            </Link>
            <p className="text-[0.78rem] font-light text-prose-light leading-[1.7] max-w-[300px]">
              An exclusive 137-acre peninsula development on Antigua&apos;s stunning west coast, offering the finest in Caribbean luxury living.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[0.58rem] font-semibold tracking-[0.3em] uppercase text-ocean mb-5">
              Explore
            </h4>
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[0.8rem] font-light text-prose-mid no-underline mb-3 hover:text-ocean transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Information */}
          <div>
            <h4 className="text-[0.58rem] font-semibold tracking-[0.3em] uppercase text-ocean mb-5">
              Information
            </h4>
            {infoLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-[0.8rem] font-light text-prose-mid no-underline mb-3 hover:text-ocean transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.58rem] font-semibold tracking-[0.3em] uppercase text-ocean mb-5">
              Get in Touch
            </h4>
            <p className="text-[0.8rem] font-light text-prose-mid mb-3">
              Antigua:{' '}
              <a href="tel:+12687364028" className="text-navy font-normal no-underline hover:text-ocean transition-colors duration-300">
                +1 268-736-4028
              </a>
            </p>
            <p className="text-[0.8rem] font-light text-prose-mid mb-3">
              Sales:{' '}
              <a href="tel:+12687202225" className="text-navy font-normal no-underline hover:text-ocean transition-colors duration-300">
                +1 268-720-2225
              </a>
            </p>
            <p className="text-[0.8rem] font-light text-prose-mid mb-3">
              Email:{' '}
              <a href="mailto:info@orangelimited.com" className="text-navy font-normal no-underline hover:text-ocean transition-colors duration-300">
                info@orangelimited.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-7 border-t border-sand flex justify-between items-center max-sm:flex-col max-sm:gap-3 max-sm:text-center">
          <p className="text-[0.65rem] font-light text-prose-light">
            &copy; {new Date().getFullYear()} Orange Limited. All rights reserved.
          </p>
          <span className="text-[0.6rem] font-light text-prose-light">
            Powered by{' '}
            <a href="https://mangodigitalmarketing.com" target="_blank" rel="noopener noreferrer" className="no-underline hover:text-ocean transition-colors duration-300">
              Mango Digital Marketing
            </a>
          </span>
          <div className="flex gap-6">
            <Link href="#" className="text-[0.65rem] font-light text-prose-light no-underline hover:text-ocean transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[0.65rem] font-light text-prose-light no-underline hover:text-ocean transition-colors duration-300">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
