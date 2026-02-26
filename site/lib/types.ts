import type { PortableTextBlock } from '@portabletext/types'

// Sanity image type
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

// Site Settings
export interface SiteSettings {
  logo: SanityImage
  siteName: string
  contactPhoneAntigua: string
  contactPhoneSales: string
  contactEmail: string
  footerTagline: string
  navLinks: { label: string; href: string }[]
}

// Homepage
export interface HomePage {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    backgroundImage: SanityImage
    primaryCTA: { label: string; href: string }
    secondaryCTA: { label: string; href: string }
  }
  intro: {
    eyebrow: string
    title: string
    body: string
    mainImage: SanityImage
    accentImage: SanityImage
    stats: { number: string; label: string }[]
  }
  lifestyle: {
    eyebrow: string
    title: string
    subtitle: string
    cards: { image: SanityImage; tag: string; title: string; description: string }[]
  }
  quote: { text: string; attribution: string }
  features: {
    eyebrow: string
    title: string
    subtitle: string
    cards: { icon: string; title: string; description: string }[]
  }
  villas: {
    eyebrow: string
    title: string
    description: string
    cards: { image: SanityImage; category: string; title: string; isHero: boolean }[]
  }
  antigua: {
    eyebrow: string
    title: string
    body: string
    image: SanityImage
    badgeNumber: string
    badgeLabel: string
    details: { title: string; description: string }[]
  }
  cbi: {
    eyebrow: string
    title: string
    body: string
    primaryCTA: { label: string; href: string }
    secondaryCTA: { label: string; href: string }
  }
  developerStrip: {
    developers: { name: string; role: string }[]
  }
}

// Development Page
export interface DevelopmentPage {
  heroImage: SanityImage
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  vision: {
    eyebrow: string
    title: string
    body: string
    images: SanityImage[]
    floatImage: SanityImage
  }
  project: {
    eyebrow: string
    title: string
    body: string
    lotTypes: { label: string; color: string }[]
  }
  amenities: {
    eyebrow: string
    title: string
    cards: { image: SanityImage; title: string; description: string }[]
  }
  quote: { text: string }
  developer: {
    eyebrow: string
    title: string
    body: string
    image: SanityImage
    highlights: { title: string; description: string }[]
  }
}

// Lots & Site Plan Page
export interface LotsSitePlanPage {
  heroImage: SanityImage
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  siteMapImage: SanityImage
  lotAreas: {
    name: string
    lotRange: string
    description: string
    heroImage: SanityImage
    thumbnails: SanityImage[]
    features: string[]
    youtubeId: string
  }[]
  availabilityBanner: {
    stats: { number: string; label: string }[]
  }
}

// Plot & Plan Page
export interface PlotAndPlanPage {
  heroImage: SanityImage
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  intro: {
    eyebrow: string
    title: string
    subtitle: string
    body: string
  }
  designs: {
    optionLabel: string
    name: string
    description: string
    image: SanityImage
    features: string[]
  }[]
  process: { stepNumber: number; title: string; description: string }[]
  whatsIncluded: string[]
  pricing: {
    eyebrow: string
    title: string
    price: string
    subtitle: string
  }
  partners: { name: string; role: string; logo: SanityImage }[]
}

// Villas Page
export interface VillasPage {
  heroImage: SanityImage
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  philosophy: {
    eyebrow: string
    title: string
    body: string
    image: SanityImage
  }
  showcaseImage: SanityImage
  features: {
    eyebrow: string
    title: string
    subtitle: string
    cards: { iconSvg: string; title: string; description: string }[]
  }
  architects: {
    eyebrow: string
    title: string
    body: string
    image: SanityImage
    partners: { name: string; role: string; description: string }[]
  }
  quote: { text: string }
  gallery: { image: SanityImage; title: string; isWide: boolean; isTall: boolean }[]
  bespoke: {
    eyebrow: string
    title: string
    body: string
    image: SanityImage
  }
}

// Gallery Page
export interface GalleryPage {
  heroImage: SanityImage
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  categories: string[]
  images: { image: SanityImage; title: string; category: string }[]
  videoSection: {
    eyebrow: string
    title: string
    description: string
    thumbnailImage: SanityImage
    youtubeId: string
  }
}

// Antigua Page
export interface AntiguaPage {
  heroImage: SanityImage
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  intro: {
    eyebrow: string
    title: string
    body: string
    image: SanityImage
    badgeNumber: string
    badgeLabel: string
  }
  stats: { number: string; suffix: string; label: string }[]
  lifestyle: {
    eyebrow: string
    title: string
    subtitle: string
    cards: { image: SanityImage; title: string; description: string }[]
  }
  quote: { text: string }
  gettingHere: {
    eyebrow: string
    title: string
    body: string
    image: SanityImage
    flights: { city: string; duration: string }[]
  }
  climate: {
    eyebrow: string
    title: string
    body: string
    image: SanityImage
    months: { name: string; temp: string }[]
  }
  experiences: {
    image: SanityImage
    title: string
    description: string
    tags: string[]
  }[]
}

// CBI Page
export interface CBIPage {
  heroImage: SanityImage
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  intro: {
    eyebrow: string
    title: string
    body: string
    image: SanityImage
  }
  benefits: {
    eyebrow: string
    title: string
    subtitle: string
    cards: { iconSvg: string; title: string; description: string }[]
  }
  passport: {
    eyebrow: string
    title: string
    body: string
    image: SanityImage
    stats: { value: string; label: string }[]
  }
  process: { stepNumber: number; title: string; description: string; duration: string }[]
  qualifies: {
    eyebrow: string
    title: string
    body: string
    features: string[]
  }
  quote: { text: string }
  faq: { question: string; answer: string }[]
}

// Contact Page
export interface ContactPage {
  heroImage: SanityImage
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  contactCards: {
    icon: string
    title: string
    subtitle: string
    linkText: string
    linkHref: string
    detail: string
  }[]
  formIntro: { eyebrow: string; title: string; body: string }
  enquiryTypes: string[]
  offices: { name: string; address: string }[]
  officeHours: { days: string; hours: string }[]
}

// News Page
export interface NewsPage {
  heroImage: SanityImage
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  featuredPost: BlogPost
  categories: string[]
}

// Blog Post
export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  category: string
  publishedAt: string
  author: { name: string; bio: string; avatar: SanityImage }
  heroImage: SanityImage
  excerpt: string
  body: PortableTextBlock[]
  tags: string[]
  relatedPosts: BlogPost[]
  readTime: number
}
