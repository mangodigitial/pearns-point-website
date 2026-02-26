interface FlightRouteCardProps {
  city: string
  detail: string
}

export default function FlightRouteCard({ city, detail }: FlightRouteCardProps) {
  return (
    <div className="flex items-center gap-4 px-5 py-4 bg-cream rounded-[4px]">
      <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center text-ocean">
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
      <span className="font-display text-base font-normal text-navy">
        {city}
      </span>
      <span className="text-[0.72rem] font-light text-prose-light ml-auto whitespace-nowrap">
        {detail}
      </span>
    </div>
  )
}
