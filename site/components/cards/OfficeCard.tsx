interface OfficeCardProps {
  title: string
  lines: string[]
}

export default function OfficeCard({ title, lines }: OfficeCardProps) {
  return (
    <div className="p-6 bg-white rounded border-l-[3px] border-ocean">
      <h5 className="font-display text-[1.05rem] font-normal text-navy mb-1.5">
        {title}
      </h5>
      <p className="text-[0.78rem] font-light text-prose-mid leading-[1.7]">
        {lines.map((line, i) => (
          <span key={i}>
            {line}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  )
}
