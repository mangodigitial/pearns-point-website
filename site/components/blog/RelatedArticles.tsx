import StaggerReveal from '../global/StaggerReveal'
import ArticleCard from '../cards/ArticleCard'

interface RelatedPost {
  _id: string
  title: string
  slug: { current: string }
  category: string
  publishedAt: string
  heroImage?: { asset?: { _ref: string } }
  excerpt: string
  readTime?: number
}

interface RelatedArticlesProps {
  posts: RelatedPost[]
}

export default function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (!posts || posts.length === 0) return null

  return (
    <section className="mt-20 pt-16 border-t border-sand">
      <p className="font-body text-[0.58rem] font-semibold tracking-[0.45em] uppercase text-ocean mb-4">
        Continue Reading
      </p>
      <h3 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-normal text-navy mb-10">
        Related Articles
      </h3>
      <StaggerReveal className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {posts.slice(0, 3).map((post) => (
          <ArticleCard
            key={post._id}
            image={'/placeholder.jpg'}
            category={post.category || 'News'}
            date={new Date(post.publishedAt).toLocaleDateString('en-GB', {
              day: 'numeric', month: 'long', year: 'numeric',
            })}
            title={post.title}
            excerpt={post.excerpt || ''}
            slug={post.slug.current}
            readTime={post.readTime}
          />
        ))}
      </StaggerReveal>
    </section>
  )
}
