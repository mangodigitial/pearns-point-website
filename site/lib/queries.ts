import { groq } from 'next-sanity'

// Site Settings
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`

// Homepage
export const homePageQuery = groq`*[_type == "homePage"][0]`

// Development Page
export const developmentPageQuery = groq`*[_type == "developmentPage"][0]`

// Lots & Site Plan Page
export const lotsSitePlanPageQuery = groq`*[_type == "lotsSitePlanPage"][0]`

// Plot & Plan Page
export const plotAndPlanPageQuery = groq`*[_type == "plotAndPlanPage"][0]`

// Villas Page
export const villasPageQuery = groq`*[_type == "villasPage"][0]`

// Gallery Page
export const galleryPageQuery = groq`*[_type == "galleryPage"][0]`

// Antigua Page
export const antiguaPageQuery = groq`*[_type == "antiguaPage"][0]`

// CBI Page
export const cbiPageQuery = groq`*[_type == "cbiPage"][0]`

// Contact Page
export const contactPageQuery = groq`*[_type == "contactPage"][0]`

// News Page
export const newsPageQuery = groq`*[_type == "newsPage"][0]{
  ...,
  featuredPost->{...}
}`

// All Blog Posts
export const allBlogPostsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc){
  _id, title, slug, category, publishedAt, heroImage, excerpt, readTime,
  author { name, avatar }
}`

// Single Blog Post
export const blogPostQuery = groq`*[_type == "blogPost" && slug.current == $slug][0]{
  ...,
  relatedPosts[]->{
    _id, title, slug, category, publishedAt, heroImage, excerpt, readTime,
    author { name, avatar }
  }
}`

// Blog Post Slugs (for static generation)
export const blogPostSlugsQuery = groq`*[_type == "blogPost" && defined(slug.current)][].slug.current`
