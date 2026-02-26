import type { Metadata } from 'next'
import { client, isSanityConfigured } from '@/lib/sanity'
import { blogPostQuery, blogPostSlugsQuery } from '@/lib/queries'
import BlogPostContent from './BlogPostContent'

/* ─── ISR: revalidate every 60 seconds ─── */
export const revalidate = 60

/* ─── Static generation: pre-build known slugs ─── */
export async function generateStaticParams() {
  if (!isSanityConfigured || !client) {
    return [{ slug: 'three-new-villa-designs-unveiled' }]
  }
  try {
    const slugs: string[] = await client.fetch(blogPostSlugsQuery)
    return slugs.map((slug) => ({ slug }))
  } catch {
    return [{ slug: 'three-new-villa-designs-unveiled' }]
  }
}

/* ─── Metadata ─── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  if (isSanityConfigured && client) {
    try {
      const post = await client.fetch(blogPostQuery, { slug })
      if (post?.title) {
        return {
          title: `${post.title} — Pearns Point`,
          description: post.excerpt || undefined,
        }
      }
    } catch {
      // Sanity fetch failed
    }
  }
  return {
    title: 'Three New Villa Designs Unveiled — Pearns Point',
    description:
      'We are excited to reveal three distinctive architectural visions for the Plot & Plan programme.',
  }
}

/* ─── Fallback data (used when Sanity is not configured) ─── */
const fallbackPost = {
  title: 'Three New Villa Designs Unveiled for Pearns Point',
  titleHtml:
    'Three New Villa Designs <em class="font-light italic">Unveiled</em> for Pearns Point',
  category: 'Development',
  date: 'February 12, 2026',
  readTime: '5 min read',
  author: 'Pearns Point Team',
  heroImage:
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85',
  tags: ['Villas', 'Architecture', 'Plot & Plan'],
}

const fallbackRelated = [
  {
    slug: 'infrastructure-phase-one-reaches-completion',
    title: 'Infrastructure Phase One Reaches Completion',
    category: 'Development',
    date: 'January 2026',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80',
  },
  {
    slug: 'ksr-architects-designing-for-the-tropics',
    title: 'In Conversation: KSR Architects on Designing for the Tropics',
    category: 'Development',
    date: 'October 2025',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  },
  {
    slug: 'conservation-at-pearns-point',
    title: 'Conservation at Pearns Point: Protecting 70% of the Peninsula',
    category: 'Development',
    date: 'August 2025',
    image:
      'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&q=80',
  },
]

/* ─── Page (server component) ─── */
export default async function BlogPostPage() {
  // Once Sanity is configured, fetch real data here:
  // const post = await client.fetch(blogPostQuery, { slug })
  // For now, use fallback data
  const post = fallbackPost
  const relatedArticles = fallbackRelated

  return <BlogPostContent post={post} relatedArticles={relatedArticles} />
}
