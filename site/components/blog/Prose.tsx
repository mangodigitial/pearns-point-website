'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import GoldRule from '../global/GoldRule'

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-normal text-navy mt-14 mb-5 leading-[1.3]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-[1.35rem] font-normal text-navy mt-10 mb-4 leading-[1.3]">
        {children}
      </h3>
    ),
    normal: ({ children, value }) => {
      const isFirst = value?._key === 'first'
      return (
        <p className={`text-[0.9rem] font-light leading-[1.95] text-prose-mid mb-6 ${isFirst ? 'first-letter:text-[3.2rem] first-letter:font-display first-letter:text-navy first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.8]' : ''}`}>
          {children}
        </p>
      )
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-[3px] border-ocean pl-8 my-10 py-2">
        <p className="font-display text-[1.3rem] font-light italic text-navy leading-[1.5]">
          {children}
        </p>
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-charcoal">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="text-ocean underline underline-offset-2 hover:text-ocean-deep transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-none space-y-3 my-6 pl-0">
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-[0.9rem] font-light text-prose-mid leading-[1.8]">
        <span className="w-1.5 h-1.5 rounded-full bg-ocean mt-2.5 flex-shrink-0" />
        <span>{children}</span>
      </li>
    ),
  },
  types: {
    fullWidthImage: ({ value }) => (
      <figure className="my-12 -mx-4">
        <img
          src={value.image?.asset ? `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${value.image.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}` : '/placeholder.jpg'}
          alt={value.caption || ''}
          className="w-full rounded-[4px] shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
        />
        {value.caption && (
          <figcaption className="text-center text-[0.72rem] font-light text-prose-light mt-4 italic">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
    imagePair: ({ value }) => (
      <div className="grid grid-cols-2 gap-5 my-12 max-sm:grid-cols-1">
        <img
          src={value.imageLeft?.asset ? '/placeholder.jpg' : '/placeholder.jpg'}
          alt=""
          className="w-full rounded-[4px] shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
        />
        <img
          src={value.imageRight?.asset ? '/placeholder.jpg' : '/placeholder.jpg'}
          alt=""
          className="w-full rounded-[4px] shadow-[0_16px_40px_rgba(0,0,0,0.06)]"
        />
      </div>
    ),
    divider: () => (
      <div className="flex justify-center my-12">
        <GoldRule />
      </div>
    ),
  },
}

interface ProseProps {
  content: PortableTextBlock[]
}

export default function Prose({ content }: ProseProps) {
  return (
    <div className="prose-custom">
      <PortableText value={content} components={components} />
    </div>
  )
}
