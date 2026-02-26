import ButtonPrimary from '../buttons/ButtonPrimary'

interface DesignCardProps {
  tag: string
  title: string
  image: string
  imageAlt: string
  description: string
  features: string[]
}

export default function DesignCard({ tag, title, image, imageAlt, description, features }: DesignCardProps) {
  return (
    <div className="group h-full flex flex-col bg-cream rounded-[6px] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full aspect-[16/10] object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
          style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
        />
      </div>
      {/* Body */}
      <div className="p-10 flex flex-col flex-1">
        <span className="inline-block text-[0.52rem] font-semibold tracking-[0.25em] uppercase text-ocean bg-ocean/[0.08] border border-ocean/[0.12] px-4 py-1.5 rounded-sm mb-5">
          {tag}
        </span>
        <h3
          className="font-display text-[1.8rem] font-normal text-navy leading-[1.2] mb-3"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-[0.82rem] font-light leading-[1.8] text-prose-mid mb-7">
          {description}
        </p>
        {/* Feature checklist */}
        <div className="grid grid-cols-2 gap-4 mb-8 mt-auto">
          {features.map((feat, j) => (
            <span key={j} className="flex items-start gap-2.5 text-[0.72rem] font-normal text-prose-mid leading-[1.4]">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4 shrink-0 text-ocean mt-px"
              >
                <polyline points="2,8 6,12 14,4" />
              </svg>
              {feat}
            </span>
          ))}
        </div>
        <ButtonPrimary href="/contact" className="block w-full">Request Brochure</ButtonPrimary>
      </div>
    </div>
  )
}
