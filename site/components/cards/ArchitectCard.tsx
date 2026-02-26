interface ArchitectCardProps {
  name: string
  role: string
  description: string
}

export default function ArchitectCard({ name, role, description }: ArchitectCardProps) {
  return (
    <div className="py-7 px-8 bg-cream rounded-[4px] border-l-[3px] border-ocean">
      <h4 className="font-display text-[1.2rem] font-normal text-navy mb-1">
        {name}
      </h4>
      <p className="text-[0.58rem] font-semibold tracking-[0.2em] uppercase text-ocean mb-2.5">
        {role}
      </p>
      <p className="text-[0.78rem] font-light leading-[1.75] text-prose-mid">
        {description}
      </p>
    </div>
  )
}
