'use client'

interface LifestyleCardProps {
  image: string
  tag?: string
  title: string
  description?: string
  aspectClass?: string
}

export default function LifestyleCard({ image, tag, title, description, aspectClass }: LifestyleCardProps) {
  const aspect = aspectClass ?? 'aspect-[3/4] max-lg:aspect-square max-sm:aspect-[4/3]'
  return (
    <div className={`group relative overflow-hidden ${aspect} cursor-pointer rounded-[4px]`}>
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-[1.2s]  group-hover:scale-[1.06]"
        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
      />
      {tag && (
        <span className="absolute top-6 left-6 text-[0.52rem] font-semibold tracking-[0.25em] uppercase text-white bg-ocean/80 px-3.5 py-1.5 backdrop-blur-[8px] rounded-[2px]">
          {tag}
        </span>
      )}
      <div className="lifestyle-overlay absolute inset-0 flex flex-col justify-end p-10 px-8">
        <h3 className="font-display text-[1.4rem] font-normal text-white mb-1.5">{title}</h3>
        {description && (
          <p className="text-[0.72rem] font-light text-white/70 leading-[1.6] max-w-[260px] translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
            style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
