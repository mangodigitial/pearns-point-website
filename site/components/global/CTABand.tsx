import ScrollReveal from './ScrollReveal'
import ButtonPrimary from '../buttons/ButtonPrimary'
import ButtonOutline from '../buttons/ButtonOutline'

interface CTABandProps {
  eyebrow?: string
  title: string
  subtitle?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
}

export default function CTABand({ eyebrow, title, subtitle, primaryCTA, secondaryCTA }: CTABandProps) {
  return (
    <section className="py-[100px] px-[60px] max-lg:px-7 bg-sand-light text-center">
      <ScrollReveal className="max-w-[700px] mx-auto">
        {eyebrow && (
          <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
            {eyebrow}
          </p>
        )}
        <h2
          className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.2] text-navy mb-5"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {subtitle && (
          <p className="text-[0.88rem] font-light leading-[1.85] text-prose-mid max-w-[600px] mx-auto mb-11">
            {subtitle}
          </p>
        )}
        <div className="flex gap-3 justify-center flex-wrap max-sm:flex-col max-sm:items-center">
          {primaryCTA && (
            <ButtonPrimary href={primaryCTA.href}>{primaryCTA.label}</ButtonPrimary>
          )}
          {secondaryCTA && (
            <ButtonOutline href={secondaryCTA.href}>{secondaryCTA.label}</ButtonOutline>
          )}
        </div>
      </ScrollReveal>
    </section>
  )
}
