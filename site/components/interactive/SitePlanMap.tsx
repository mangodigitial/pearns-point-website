'use client'

import { useMemo, useState } from 'react'
import { AREA_ORDER, VIEW_BOX, type Lot, type LotStatus } from '@/lib/sitePlanData'

/* Status colours sit deliberately outside the site's ocean accent, so a sold
   lot never reads as a highlighted one. Fill is the wash, line is the border
   and the legend swatch. */
const STATUS: { key: LotStatus; label: string; fill: string; line: string }[] = [
  { key: 'available', label: 'Available', fill: '#8fc9ba', line: '#2f8f7d' },
  { key: 'reserved',  label: 'Reserved',  fill: '#e2cfa5', line: '#b69a6a' },
  { key: 'sold',      label: 'Sold',      fill: '#d9b1a8', line: '#a4685c' },
]
const STATUS_BY_KEY = Object.fromEntries(STATUS.map((s) => [s.key, s]))

const money = (n: number) => '$' + n.toLocaleString('en-US')
const sqft = (n: number) => n.toLocaleString('en-US') + ' sq ft'
/** Collapse a run of lot numbers to "29-33, 37" rather than listing all six. */
const rangeLabel = (ns: number[]) => {
  const out: string[] = []
  for (let i = 0; i < ns.length; ) {
    let j = i
    while (j + 1 < ns.length && ns[j + 1] === ns[j] + 1) j++
    out.push(j > i + 1 ? `${ns[i]}\u2013${ns[j]}` : ns.slice(i, j + 1).join(', '))
    i = j + 1
  }
  return out.join(', ')
}
const lotName = (l: Lot) => (l.n !== null ? `Lot ${l.n}` : `Lots ${rangeLabel(l.group!)}`)
const lotCount = (l: Lot) => (l.group ? l.group.length : 1)

interface Props {
  shapes: Lot[]
  base: { land: string; beach: string[]; resort: string[]; roads: string[] }
  /** Shown under the status legend when the published lot count differs. */
  note?: string
}

export default function SitePlanMap({ shapes, base, note }: Props) {
  const [statusFilter, setStatusFilter] = useState<Set<LotStatus>>(new Set())
  const [areaFilter, setAreaFilter] = useState<Set<string>>(new Set())
  const [selected, setSelected] = useState<Lot | null>(null)
  const [hover, setHover] = useState<{ lot: Lot; x: number; y: number } | null>(null)

  const areas = useMemo(() => {
    const found = new Set(shapes.flatMap((l) => (l.tally ?? []).map((t) => t[0])))
    return AREA_ORDER.filter((a) => found.has(a))
  }, [shapes])

  const statusCount = (s: LotStatus) =>
    shapes.reduce((n, l) => n + (l.status === s ? lotCount(l) : 0), 0)
  const areaCount = (a: string) =>
    shapes.reduce((n, l) => n + (l.tally?.find((t) => t[0] === a)?.[1] ?? 0), 0)

  const isShown = (l: Lot) =>
    (statusFilter.size === 0 || statusFilter.has(l.status)) &&
    (areaFilter.size === 0 || (l.tally ?? []).some((t) => areaFilter.has(t[0])))

  const toggle = <T,>(set: Set<T>, v: T, apply: (s: Set<T>) => void) => {
    const next = new Set(set)
    if (next.has(v)) next.delete(v)
    else next.add(v)
    apply(next)
  }

  const available = shapes.filter((l) => l.status === 'available')
  const prices = available.filter((l) => l.price).map((l) => l.price!)

  const chip = (on: boolean) =>
    `inline-flex items-center gap-2 px-3.5 py-1.5 text-[0.78rem] font-medium border rounded-sm transition-colors duration-200 ${
      on
        ? 'bg-navy text-cream border-navy'
        : 'bg-white text-prose-mid border-sand-dark hover:border-ocean hover:text-navy'
    }`

  return (
    <div>
      {/* ── Legend and filters ── */}
      <div className="flex flex-wrap gap-x-10 gap-y-6 items-start pb-6 mb-7 border-b border-sand text-left">
        <div>
          <p className="text-[0.56rem] font-semibold tracking-[0.22em] uppercase text-prose-light mb-2.5">
            Status
          </p>
          <div className="flex flex-wrap gap-2">
            {STATUS.map((s) => {
              const on = statusFilter.has(s.key)
              return (
                <button
                  key={s.key}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(statusFilter, s.key, setStatusFilter)}
                  className={chip(on)}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-[1px] flex-none"
                    style={{ background: s.fill, border: `1px solid ${s.line}` }}
                  />
                  {s.label}
                  <span className="tabular-nums opacity-60 text-[0.72rem]">{statusCount(s.key)}</span>
                </button>
              )
            })}
          </div>
          {note && (
            <p className="text-[0.72rem] font-light text-prose-light mt-3 max-w-[44ch] leading-[1.5] border-l-2 border-gold-warm pl-2.5">
              {note}
            </p>
          )}
        </div>

        <div>
          <p className="text-[0.56rem] font-semibold tracking-[0.22em] uppercase text-prose-light mb-2.5">
            Area
          </p>
          <div className="flex flex-wrap gap-2">
            {areas.map((a) => {
              const on = areaFilter.has(a)
              return (
                <button
                  key={a}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(areaFilter, a, setAreaFilter)}
                  className={chip(on)}
                >
                  {a}
                  <span className="tabular-nums opacity-60 text-[0.72rem]">{areaCount(a)}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Map + detail rail ── */}
      <div className="grid grid-cols-[1fr_320px] gap-6 items-start max-lg:grid-cols-1">
        <div
          className="relative bg-[#d7e9ef] border border-sand rounded-[4px] overflow-hidden"
          onMouseLeave={() => setHover(null)}
        >
          {/* At phone width the whole peninsula in 340px makes the lot numbers
              unreadable and the tap targets a few pixels across, so the map keeps
              a usable minimum width and this container scrolls sideways instead. */}
          <div className="overflow-x-auto">
          <svg
            viewBox={`0 0 ${VIEW_BOX.w} ${VIEW_BOX.h}`}
            className="block w-full h-auto min-w-[760px]"
            role="img"
            aria-label="Interactive site plan of Pearns Point showing every lot and its status"
          >
            <rect x={0} y={0} width={VIEW_BOX.w} height={VIEW_BOX.h} fill="#d7e9ef" />
            {base.land && <path d={base.land} fill="#efe9dd" stroke="#d6c9b4" strokeWidth={1} />}
            {base.beach.map((d, i) => <path key={`b${i}`} d={d} fill="#f2e3c4" />)}
            {base.resort.map((d, i) => <path key={`r${i}`} d={d} fill="#dfe9df" />)}
            {base.roads.map((d, i) => <path key={`o${i}`} d={d} fill="#e4ded3" />)}

            <g>
              {shapes.map((l, i) => {
                const s = STATUS_BY_KEY[l.status]
                const shown = isShown(l)
                const active = selected === l
                return (
                  <path
                    key={`l${i}`}
                    d={l.d}
                    fill={s.fill}
                    stroke={active ? '#1a2f3a' : s.line}
                    strokeWidth={active ? 3 : 1}
                    opacity={shown ? 1 : 0.2}
                    tabIndex={0}
                    role="button"
                    aria-label={`${lotName(l)}, ${l.area}, ${l.status}`}
                    className="cursor-pointer outline-none transition-opacity duration-150"
                    onMouseMove={(e) => {
                      const box = e.currentTarget.ownerSVGElement!.getBoundingClientRect()
                      setHover({ lot: l, x: e.clientX - box.left, y: e.clientY - box.top })
                    }}
                    onMouseLeave={() => setHover(null)}
                    onClick={() => setSelected(l)}
                    onFocus={() => setSelected(l)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setSelected(l)
                      }
                    }}
                  />
                )
              })}
            </g>

            <g className="pointer-events-none">
              {shapes.map((l, i) => (
                <text
                  key={`t${i}`}
                  x={l.lx}
                  y={l.ly}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={l.n === null
                    ? Math.max(9, Math.min(15, l.r * 0.42))
                    : Math.max(9, Math.min(23, l.r * 0.78))}
                  opacity={isShown(l) ? 1 : 0.2}
                  fill="#1a2f3a"
                  style={{
                    fontWeight: 600,
                    paintOrder: 'stroke',
                    stroke: 'rgba(255,255,255,0.55)',
                    strokeWidth: 2.4,
                    strokeLinejoin: 'round',
                  }}
                >
                  {l.n !== null ? l.n : rangeLabel(l.group!)}
                </text>
              ))}
            </g>
          </svg>
          </div>

          <p className="lg:hidden absolute bottom-0 left-0 right-0 text-center text-[0.62rem] tracking-[0.14em] uppercase text-navy/55 bg-gradient-to-t from-white/70 to-transparent pt-5 pb-1.5 pointer-events-none">
            Swipe the map to pan
          </p>

          {hover && (
            <div
              className="absolute z-[2] pointer-events-none bg-navy text-cream px-3.5 py-2.5 rounded-sm min-w-[152px] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]"
              style={{
                left: hover.x,
                top: hover.y,
                // Near the top edge the card would clip a tooltip drawn above the
                // cursor, so it flips underneath instead.
                transform: hover.y < 96 ? 'translate(-50%, 22%)' : 'translate(-50%, -116%)',
              }}
            >
              <p className="font-display text-[1rem] leading-tight">{lotName(hover.lot)}</p>
              <p className="text-[0.62rem] tracking-[0.16em] uppercase opacity-70 mt-0.5">
                {hover.lot.area}
              </p>
              <p className="text-[0.76rem] tabular-nums mt-1.5">
                {hover.lot.status === 'available'
                  ? hover.lot.price
                    ? `${sqft(hover.lot.sq!)} · ${money(hover.lot.price)}`
                    : 'Price on application'
                  : hover.lot.status[0].toUpperCase() + hover.lot.status.slice(1)}
              </p>
            </div>
          )}
        </div>

        {/* ── Rail ── */}
        <aside className="bg-white border border-sand rounded-[4px] p-5 text-left lg:sticky lg:top-24">
          {!selected ? (
            <>
              <h3 className="font-display text-[1.5rem] font-normal text-navy mb-0.5">Select a lot</h3>
              <p className="text-[0.6rem] tracking-[0.2em] uppercase text-ocean mb-4">
                {available.length} available
              </p>
              <p className="text-[0.88rem] font-light text-prose-mid leading-[1.7]">
                Select any lot on the map to see its full details here.
              </p>
              <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-3.5 gap-y-2 text-[0.84rem] items-baseline">
                <dt className="text-[0.6rem] tracking-[0.14em] uppercase text-prose-light">From</dt>
                <dd className="m-0 text-right font-medium tabular-nums">{money(Math.min(...prices))}</dd>
                <dt className="text-[0.6rem] tracking-[0.14em] uppercase text-prose-light">To</dt>
                <dd className="m-0 text-right font-medium tabular-nums">{money(Math.max(...prices))}</dd>
              </dl>
            </>
          ) : (
            <>
              <h3 className="font-display text-[1.5rem] font-normal text-navy mb-0.5">
                {lotName(selected)}
              </h3>
              <p className="text-[0.6rem] tracking-[0.2em] uppercase text-ocean mb-4">{selected.area}</p>
              <span
                className="inline-flex items-center px-2.5 py-1 rounded-sm text-[0.6rem] font-bold tracking-[0.16em] uppercase"
                style={{
                  background: STATUS_BY_KEY[selected.status].fill,
                  color: STATUS_BY_KEY[selected.status].line,
                }}
              >
                {selected.status}
              </span>

              {selected.sq || selected.price ? (
                <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-3.5 gap-y-2.5 text-[0.84rem] items-baseline">
                  {selected.sq && (
                    <>
                      <dt className="text-[0.6rem] tracking-[0.14em] uppercase text-prose-light">Size</dt>
                      <dd className="m-0 text-right font-medium tabular-nums">{sqft(selected.sq)}</dd>
                    </>
                  )}
                  {selected.view && (
                    <>
                      <dt className="text-[0.6rem] tracking-[0.14em] uppercase text-prose-light">Outlook</dt>
                      <dd className="m-0 text-right font-medium">{selected.view}</dd>
                    </>
                  )}
                  {selected.rate && (
                    <>
                      <dt className="text-[0.6rem] tracking-[0.14em] uppercase text-prose-light">Per sq ft</dt>
                      <dd className="m-0 text-right font-medium tabular-nums">${selected.rate}</dd>
                    </>
                  )}
                  {selected.price && (
                    <>
                      <dt className="text-[0.6rem] tracking-[0.14em] uppercase text-prose-light">Price</dt>
                      <dd className="m-0 text-right font-display text-[1.28rem] font-medium tabular-nums">
                        {money(selected.price)}
                      </dd>
                    </>
                  )}
                </dl>
              ) : (
                <p className="mt-4 text-[0.88rem] font-light text-prose-light">
                  {selected.status === 'sold'
                    ? 'This lot is sold.'
                    : 'Reserved — not currently released for sale.'}
                </p>
              )}

              {selected.status === 'available' && !selected.price && (
                <p className="text-[0.72rem] font-light text-prose-light mt-3 leading-[1.55]">
                  No price published for this lot in the August 2026 list.
                </p>
              )}

              <div className="mt-5 pt-4 border-t border-sand">
                <a
                  href="/contact"
                  className="block text-center text-[0.6rem] font-bold tracking-[0.24em] uppercase text-white bg-ocean hover:bg-ocean-deep transition-colors duration-200 py-3.5 rounded-sm no-underline"
                >
                  Enquire about this lot
                </a>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  )
}
