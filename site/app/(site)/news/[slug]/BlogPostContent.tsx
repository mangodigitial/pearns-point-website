'use client'

import Link from 'next/link'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import ScrollReveal from '@/components/global/ScrollReveal'
import ShareBar from '@/components/blog/ShareBar'
import AuthorBox from '@/components/blog/AuthorBox'
import NewsletterForm from '@/components/interactive/NewsletterForm'

/* ─── Portable Text custom components ─── */
const portableTextComponents: PortableTextComponents = {
  types: {
    fullWidthImage: ({ value }: { value: any }) => (
      <figure className="my-11 -mx-[60px] max-lg:mx-0 rounded overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <img
          src={value.imageUrl || value.image}
          alt={value.alt || ''}
          className="w-full block"
        />
        {value.caption && (
          <figcaption className="px-5 py-3.5 text-[0.68rem] font-light text-prose-light text-center bg-white">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
    imagePair: ({ value }: { value: any }) => (
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 my-11">
        {[value.imageLeft, value.imageRight].filter(Boolean).map((img: string, i: number) => (
          <img
            key={i}
            src={img}
            alt=""
            className="w-full aspect-[3/2] object-cover rounded shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
          />
        ))}
      </div>
    ),
    divider: () => (
      <div className="w-[50px] h-0.5 mx-auto my-12 bg-gradient-to-r from-gold-warm to-gold-champagne rounded-sm" />
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="font-display text-[1.8rem] font-normal text-navy leading-[1.3] mt-12 mb-5">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-[1.3rem] font-normal text-navy leading-[1.35] mt-9 mb-3.5">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-10 py-8 px-9 border-l-[3px] border-ocean bg-white rounded-r">
        <p className="font-display text-[1.15rem] font-light italic leading-[1.6] text-navy !mb-0">
          {children}
        </p>
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-[0.92rem] font-light leading-[2] text-prose-mid mb-6">
        {children}
      </p>
    ),
  },
  marks: {
    em: ({ children }) => <em className="font-light italic">{children}</em>,
    strong: ({ children }) => <strong className="font-medium">{children}</strong>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
        rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="text-ocean underline underline-offset-[3px] hover:text-ocean-deep transition-colors duration-300"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-5 my-5 mb-7 text-[0.88rem] font-light leading-[2] text-prose-mid list-disc marker:text-ocean">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="ml-5 my-5 mb-7 text-[0.88rem] font-light leading-[2] text-prose-mid list-decimal marker:text-ocean">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1.5">{children}</li>,
    number: ({ children }) => <li className="mb-1.5">{children}</li>,
  },
}

/* ─── types ─── */

interface RelatedArticle {
  slug: string
  title: string
  category: string
  date: string
  image: string
}

interface BlogPostData {
  title: string
  titleHtml: string
  category: string
  date: string
  readTime: string
  author: string
  heroImage: string
  tags: string[]
  body?: any
}

interface BlogPostContentProps {
  post: BlogPostData
  relatedArticles: RelatedArticle[]
}

/* ─── component ─── */

export default function BlogPostContent({ post, relatedArticles }: BlogPostContentProps) {
  return (
    <>
      {/* ── Article Hero ── */}
      <section className="h-[60vh] min-h-[450px] relative flex items-end overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${post.heroImage}')` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/15 via-navy/5 via-[40%] to-cream/70 to-[80%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-[79%] to-cream" />

        {/* Content */}
        <div className="relative z-10 px-[60px] max-lg:px-7 pb-20 max-lg:pb-[60px] max-w-[900px]">
          {/* Back Link */}
          <Link
            href="/latest-news"
            className="inline-flex items-center gap-2 text-[0.58rem] font-medium tracking-[0.18em] uppercase text-ocean mb-5 hover:gap-3 transition-[gap] duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current stroke-[1.5] fill-none">
              <polyline points="15,4 7,12 15,20" />
            </svg>
            Back to News
          </Link>

          {/* Category Badge */}
          <span className="inline-block px-3.5 py-[5px] mb-4 bg-ocean text-[0.48rem] font-semibold tracking-[0.22em] uppercase text-white rounded-sm">
            {post.category}
          </span>

          {/* Title */}
          <h1
            className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-normal leading-[1.2] text-navy"
            dangerouslySetInnerHTML={{ __html: post.titleHtml }}
          />

          {/* Meta */}
          <div className="mt-5 flex items-center gap-5 flex-wrap">
            <span className="text-[0.68rem] font-normal text-prose-light tracking-[0.05em]">
              {post.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-sand-dark" />
            <span className="text-[0.68rem] font-normal text-prose-light tracking-[0.05em]">
              {post.readTime}
            </span>
            <span className="w-1 h-1 rounded-full bg-sand-dark" />
            <span className="text-[0.68rem] font-normal text-prose-light tracking-[0.05em]">
              {post.author}
            </span>
          </div>
        </div>
      </section>

      {/* ── Article Body ── */}
      <ScrollReveal>
        <article className="max-w-[740px] mx-auto px-[60px] max-lg:px-7 pt-[60px] pb-20">
          {post.body ? (
            <div className="prose">
              <PortableText value={post.body} components={portableTextComponents} />
            </div>
          ) : (
          <div className="prose">
            {/* Paragraph with Drop Cap */}
            <p className="text-[0.92rem] font-light leading-[2] text-prose-mid mb-6 first-letter:font-display first-letter:text-[3.6rem] first-letter:font-normal first-letter:text-navy first-letter:float-left first-letter:leading-[0.85] first-letter:mr-2.5 first-letter:mt-1.5">
              We are delighted to unveil three distinctive architectural visions for the Pearns Point Plot &amp; Plan programme &mdash; Caribbean Chic, Naturally Modern, and Caribbean Connected. Each has been created by internationally renowned architects with an intimate understanding of the peninsula and its extraordinary natural setting.
            </p>

            <p className="text-[0.92rem] font-light leading-[2] text-prose-mid mb-6">
              The three designs represent different expressions of Caribbean luxury living, but all share a common philosophy: horizontal architecture that maximises the breathtaking views, seamless indoor/outdoor flow, and a deep respect for the natural landscape that makes Pearns Point so exceptional.
            </p>

            {/* H2 */}
            <h2 className="font-display text-[1.8rem] font-normal text-navy leading-[1.3] mt-12 mb-5">
              Caribbean <em className="font-light italic">Chic</em>
            </h2>

            <p className="text-[0.92rem] font-light leading-[2] text-prose-mid mb-6">
              The first of our three designs draws on timeless Caribbean elegance, reimagined for contemporary living. Natural stone, graceful proportions, and expansive covered terraces create a home that feels both grand and perfectly at ease within its tropical surroundings. With open-plan living spaces, panoramic terraces, and an infinity pool that appears to dissolve into the ocean, Caribbean Chic offers a refined approach to island life.
            </p>

            {/* Full-width Image */}
            <figure className="my-11 -mx-[60px] max-lg:mx-0 rounded overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
                alt="Caribbean Chic villa exterior"
                className="w-full block"
              />
              <figcaption className="px-5 py-3.5 text-[0.68rem] font-light text-prose-light text-center bg-white">
                Caribbean Chic &mdash; timeless elegance meets tropical warmth
              </figcaption>
            </figure>

            {/* H2 */}
            <h2 className="font-display text-[1.8rem] font-normal text-navy leading-[1.3] mt-12 mb-5">
              Naturally <em className="font-light italic">Modern</em>
            </h2>

            <p className="text-[0.92rem] font-light leading-[2] text-prose-mid mb-6">
              Our second design embraces clean contemporary lines and the power of minimal forms. Floor-to-ceiling glass, horizontal planes, and natural timber create a seamless connection between the interior spaces and the Caribbean landscape beyond. Every room is designed to frame the view, while the trade winds are harnessed for natural ventilation &mdash; reducing energy consumption and keeping the home cool year-round.
            </p>

            {/* Blockquote */}
            <blockquote className="my-10 py-8 px-9 border-l-[3px] border-ocean bg-white rounded-r">
              <p className="font-display text-[1.15rem] font-light italic leading-[1.6] text-navy !mb-0 !first-letter:text-[inherit] !first-letter:float-none !first-letter:mr-0 !first-letter:mt-0 !first-letter:leading-normal !first-letter:font-display">
                Our approach has always been to let the landscape lead. The architecture should frame the extraordinary natural beauty of this peninsula &mdash; not compete with it.
              </p>
              <cite className="block mt-3 font-body text-[0.68rem] not-italic font-medium tracking-[0.1em] text-prose-light">
                &mdash; KSR Architects
              </cite>
            </blockquote>

            {/* H2 */}
            <h2 className="font-display text-[1.8rem] font-normal text-navy leading-[1.3] mt-12 mb-5">
              Caribbean <em className="font-light italic">Connected</em>
            </h2>

            <p className="text-[0.92rem] font-light leading-[2] text-prose-mid mb-6">
              The third vision celebrates the relationship between architecture and nature in the most direct way possible. A series of interconnected pavilions, covered walkways, and open courtyards weave through the tropical landscape &mdash; blurring the boundaries between home and paradise. This design is ideal for those who want to live immersed in the landscape, with the sound of the sea and the rustle of palms as a constant companion.
            </p>

            {/* Image Pair */}
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 my-11">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                alt="Modern villa interior"
                className="w-full aspect-[3/2] object-cover rounded shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
              />
              <img
                src="https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=600&q=80"
                alt="Connected pavilion design"
                className="w-full aspect-[3/2] object-cover rounded shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
              />
            </div>

            {/* H3 */}
            <h3 className="font-display text-[1.3rem] font-normal text-navy leading-[1.35] mt-9 mb-3.5">
              What all three designs share
            </h3>

            <p className="text-[0.92rem] font-light leading-[2] text-prose-mid mb-6">
              While each design offers a distinct aesthetic, every villa at Pearns Point shares a set of core principles that ensure durability, sustainability, and an exceptional standard of living:
            </p>

            {/* Bullet List */}
            <ul className="ml-5 my-5 mb-7 text-[0.88rem] font-light leading-[2] text-prose-mid list-disc marker:text-ocean">
              <li className="mb-1.5">Minimum 5,000 sq ft of living space across generous open-plan layouts</li>
              <li className="mb-1.5">Private infinity pool with panoramic ocean or landscape views</li>
              <li className="mb-1.5">Natural ventilation designed around Antigua&apos;s prevailing trade winds</li>
              <li className="mb-1.5">Locally sourced materials including natural stone and tropical hardwoods</li>
              <li className="mb-1.5">Full turnkey delivery including furnishing, landscaping, and utilities</li>
              <li className="mb-1.5">CBI-qualifying investment with pricing from US $6,000,000</li>
            </ul>

            {/* Gold Divider */}
            <div className="w-[50px] h-0.5 mx-auto my-12 bg-gradient-to-r from-gold-warm to-gold-champagne rounded-sm" />

            <p className="text-[0.92rem] font-light leading-[2] text-prose-mid mb-6">
              The Plot &amp; Plan programme offers a fully managed route to owning a home at Pearns Point &mdash; from selecting your plot and design through to construction, furnishing, and handover. To explore the three designs in detail or discuss your requirements, please{' '}
              <Link href="/contact" className="text-ocean underline underline-offset-[3px] hover:text-ocean-deep transition-colors duration-300">
                get in touch with our team
              </Link>
              .
            </p>
          </div>
          )}
        </article>
      </ScrollReveal>

      {/* ── Tags & Share ── */}
      <ScrollReveal>
        <div className="max-w-[740px] mx-auto px-[60px] max-lg:px-7 pb-20 flex items-center justify-between flex-wrap gap-6 max-sm:flex-col max-sm:items-start border-t border-sand pt-8">
          {/* Tags */}
          <div className="flex gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/latest-news?tag=${encodeURIComponent(tag)}`}
                className="text-[0.55rem] font-medium tracking-[0.12em] uppercase px-4 py-1.5 bg-ocean/[0.06] text-ocean rounded-sm border border-ocean/[0.12] hover:bg-ocean hover:text-white hover:border-ocean transition-all duration-300"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Share */}
          <ShareBar title={post.title} />
        </div>
      </ScrollReveal>

      {/* ── Author Box ── */}
      <ScrollReveal>
        <div className="max-w-[740px] mx-auto px-[60px] max-lg:px-7 pb-20">
          <AuthorBox
            name={post.author}
            bio="Updates from the development team at Pearns Point, bringing you the latest news on architecture, construction progress, and island life at Antigua's foremost luxury real estate development."
          />
        </div>
      </ScrollReveal>

      {/* ── Related Articles ── */}
      <section className="py-[100px] max-lg:py-20 px-[60px] max-lg:px-7 bg-white">
        <div className="max-w-content mx-auto">
          {/* Header */}
          <ScrollReveal>
            <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-4 max-sm:items-start mb-12">
              <h2 className="font-display text-[1.6rem] font-normal text-navy">
                More <em className="font-light italic">Articles</em>
              </h2>
              <Link
                href="/latest-news"
                className="inline-flex items-center gap-2 text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-ocean hover:gap-3 transition-[gap] duration-300"
              >
                View All News
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 stroke-current stroke-[1.5] fill-none"
                >
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <polyline points="14,6 20,12 14,18" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          {/* Related Grid */}
          <ScrollReveal>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8">
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  className="group bg-cream rounded overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.06]"
                    />
                    <span className="absolute top-3.5 left-3.5 px-3 py-1 bg-ocean text-[0.48rem] font-semibold tracking-[0.2em] uppercase text-white rounded-sm">
                      {article.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6 pb-7">
                    <div className="text-[0.58rem] font-normal text-prose-light mb-2.5">
                      {article.date}
                    </div>
                    <h3 className="font-display text-[1.08rem] font-normal text-navy leading-[1.35] group-hover:text-ocean transition-colors duration-300">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-[100px] max-lg:py-20 px-[60px] max-lg:px-7 bg-navy text-center">
        <ScrollReveal>
          <div className="max-w-[600px] mx-auto">
            <p className="text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-lagoon mb-4">
              Stay Informed
            </p>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-normal text-white mb-3">
              Subscribe to <em className="font-light italic text-lagoon">Updates</em>
            </h2>
            <p className="text-[0.84rem] font-light text-white/55 mb-9">
              Development news, lifestyle features, and market insights delivered to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
