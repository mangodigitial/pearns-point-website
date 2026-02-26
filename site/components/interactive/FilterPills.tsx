'use client'

interface FilterPillsProps {
  categories: string[]
  activeCategory: string
  onSelect: (category: string) => void
  counts?: Record<string, number>
}

export default function FilterPills({ categories, activeCategory, onSelect, counts }: FilterPillsProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <button
        onClick={() => onSelect('All')}
        className={`px-6 py-2.5 text-[0.62rem] font-semibold tracking-[0.2em] uppercase border-[1.5px] transition-all duration-300 cursor-pointer ${
          activeCategory === 'All'
            ? 'bg-ocean border-ocean text-white'
            : 'bg-transparent border-ocean/20 text-prose-mid hover:border-ocean hover:text-ocean'
        }`}
      >
        All{counts ? ` (${Object.values(counts).reduce((a, b) => a + b, 0)})` : ''}
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-6 py-2.5 text-[0.62rem] font-semibold tracking-[0.2em] uppercase border-[1.5px] transition-all duration-300 cursor-pointer ${
            activeCategory === cat
              ? 'bg-ocean border-ocean text-white'
              : 'bg-transparent border-ocean/20 text-prose-mid hover:border-ocean hover:text-ocean'
          }`}
        >
          {cat}{counts && counts[cat] ? ` (${counts[cat]})` : ''}
        </button>
      ))}
    </div>
  )
}
