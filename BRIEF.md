# Pearns Point — Full Site Build Brief

## Overview
Build a production-ready luxury real estate website for **Pearns Point**, a Caribbean peninsula development in Antigua. The site comprises **10 pages + 1 blog post template**, all provided as reference HTML files. The build should match these visually as closely as possible, be fully CMS-editable via Sanity, and deploy to Vercel.

**Reference HTML files:**
1. `pearns-point.html` — Homepage
2. `the-development.html` — The Development
3. `lots-site-plan.html` — Lots & Site Plan
4. `plot-and-plan.html` — Plot & Plan
5. `the-villas.html` — The Villas
6. `gallery.html` — Gallery
7. `the-antigua-experience.html` — The Antigua Experience
8. `citizenship-by-investment.html` — Citizenship by Investment
9. `latest-news.html` — Latest News
10. `contact-us.html` — Contact Us
11. `blog-post-template.html` — Blog Post Template (dynamic)

---

## Tech Stack
- **Next.js 14** (App Router, TypeScript)
- **Sanity v3** (embedded Studio at `/studio`)
- **Tailwind CSS v3** (for all styling)
- **Framer Motion** (for scroll-reveal animations and transitions)
- **Vercel** (deployment target)

---

## Phase 1: Project Scaffold
1. Create Next.js 14 app with TypeScript and Tailwind
2. Install dependencies: `sanity`, `next-sanity`, `@sanity/image-url`, `framer-motion`
3. Set up Sanity Studio embedded at `/app/studio/[[...tool]]/page.tsx`
4. Configure `sanity.config.ts` and `sanity.cli.ts` at project root
5. Set up Sanity client in `/lib/sanity.ts` with image URL builder
6. Configure environment variables: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`

---

## Phase 2: Design Tokens (Tailwind Config)

```js
theme: {
  extend: {
    colors: {
      cream: '#faf8f4',
      sand: { light: '#f5f0e8', DEFAULT: '#e8dfd2', dark: '#c4b49a' },
      gold: { warm: '#b69a6a', deep: '#97794a', champagne: '#d4c5a9' },
      ocean: { light: '#2ba5b5', DEFAULT: '#1a7a8a', deep: '#0d5f6e' },
      lagoon: '#48b5c4',
      navy: '#1a2f3a',
      charcoal: '#2c3e42',
    },
    fontFamily: {
      display: ['Playfair Display', 'Georgia', 'serif'],
      body: ['Raleway', 'Helvetica Neue', 'sans-serif'],
    },
  },
}
```

**Typography hierarchy:**
- Hero title: clamp(2.8rem, 6.5vw, 5.2rem), font-weight 400, italic emphasis at weight 300
- Page hero title: clamp(2.4rem, 5vw, 4rem)
- Section titles: clamp(2rem, 4vw, 3.2rem)
- Eyebrows: 0.58rem, weight 600, letter-spacing 0.45em, uppercase, ocean colour
- Body text: 0.88rem, weight 300, line-height 1.85
- Nav links: 0.67rem, weight 500, letter-spacing 0.18em, uppercase

**Spacing:**
- Major sections: 140px vertical padding
- Max content width: 1400px
- Grid gaps: 100px for two-column layouts, 32–40px for card grids
- Page hero height: 65vh (homepage 100vh)

**Responsive breakpoints:**
- 1024px: stack to single columns, hide nav / show hamburger, grids → 2 cols
- 640px: full single-column, stack CTAs vertically

---

## Phase 3: Sanity Schemas

### Global Schemas

#### `siteSettings` (singleton)
- `logo` (image)
- `siteName` (string)
- `contactPhoneAntigua` (string) — "+1 268-736-4028"
- `contactPhoneSales` (string) — "+1 268-720-2225"
- `contactEmail` (string) — "info@orangelimited.com"
- `footerTagline` (text)
- `navLinks` (array of { label: string, href: string })

#### `page` (base document for static pages)
- `title` (string)
- `slug` (slug)
- `heroImage` (image)
- `heroEyebrow` (string)
- `heroTitle` (string)
- `heroSubtitle` (text)

---

### Page-Specific Schemas

#### `homePage` (singleton)
- `hero` (object): eyebrow, title, subtitle, backgroundImage, primaryCTA, secondaryCTA
- `intro` (object): eyebrow, title, body, mainImage, accentImage, stats (array of { number, label })
- `lifestyle` (object): eyebrow, title, subtitle, cards (array of { image, tag, title, description })
- `quote` (object): text, attribution
- `features` (object): eyebrow, title, subtitle, cards (array of { icon, title, description })
- `villas` (object): eyebrow, title, description, cards (array of { image, category, title, isHero })
- `antigua` (object): eyebrow, title, body, image, badgeNumber, badgeLabel, details (array of { title, description })
- `cbi` (object): eyebrow, title, body, primaryCTA, secondaryCTA
- `developerStrip` (object): developers (array of { name, role })

#### `developmentPage` (singleton)
- `vision` (object): eyebrow, title, body, images (array of image), floatImage (image)
- `project` (object): eyebrow, title, body, lotTypes (array of { label, color })
- `amenities` (object): eyebrow, title, cards (array of { image, title, description })
- `quote` (object): text
- `developer` (object): eyebrow, title, body, image, highlights (array of { title, description })

#### `lotsSitePlanPage` (singleton)
- `siteMapImage` (image)
- `lotAreas` (array of objects):
  - `name` (string)
  - `lotRange` (string) — e.g. "Lots 1–21"
  - `description` (text)
  - `heroImage` (image)
  - `thumbnails` (array of image, max 2)
  - `features` (array of string)
  - `youtubeId` (string) — drone video
- `availabilityBanner` (object): stats (array of { number, label })

#### `plotAndPlanPage` (singleton)
- `intro` (object): eyebrow, title, subtitle, body
- `designs` (array of objects):
  - `optionLabel` (string) — "Option A"
  - `name` (string) — "Caribbean Chic"
  - `description` (text)
  - `image` (image)
  - `features` (array of string)
- `process` (array of objects): stepNumber, title, description
- `whatsIncluded` (array of string)
- `pricing` (object): eyebrow, title, price, subtitle
- `partners` (array of { name, role, logo })

#### `villasPage` (singleton)
- `philosophy` (object): eyebrow, title, body, image
- `showcaseImage` (image) — full-width cinematic break
- `features` (object): eyebrow, title, subtitle, cards (array of { iconSvg, title, description })
- `architects` (object): eyebrow, title, body, image, partners (array of { name, role, description })
- `quote` (object): text
- `gallery` (array of objects): image, title, isWide (boolean), isTall (boolean)
- `bespoke` (object): eyebrow, title, body, image

#### `galleryPage` (singleton)
- `categories` (array of string) — ["Aerial", "Beaches", "Villas", "Lifestyle", "Landscape"]
- `images` (array of objects):
  - `image` (image)
  - `title` (string)
  - `category` (string, reference to categories)
- `videoSection` (object): eyebrow, title, description, thumbnailImage, youtubeId

#### `antiguaPage` (singleton)
- `intro` (object): eyebrow, title, body, image, badgeNumber, badgeLabel
- `stats` (array of { number, suffix, label })
- `lifestyle` (object): eyebrow, title, subtitle, cards (array of { image, title, description })
- `quote` (object): text
- `gettingHere` (object): eyebrow, title, body, image, flights (array of { city, duration })
- `climate` (object): eyebrow, title, body, image, months (array of { name, temp })
- `experiences` (array of objects): image, title, description, tags (array of string)

#### `cbiPage` (singleton)
- `intro` (object): eyebrow, title, body, image
- `benefits` (object): eyebrow, title, subtitle, cards (array of { iconSvg, title, description })
- `passport` (object): eyebrow, title, body, image, stats (array of { value, label })
- `process` (array of objects): stepNumber, title, description, duration
- `qualifies` (object): eyebrow, title, body, features (array of string)
- `quote` (object): text
- `faq` (array of objects): question, answer

#### `contactPage` (singleton)
- `contactCards` (array of objects): icon, title, subtitle, linkText, linkHref, detail
- `formIntro` (object): eyebrow, title, body
- `enquiryTypes` (array of string)
- `offices` (array of objects): name, address (text)
- `officeHours` (array of objects): days, hours

#### `newsPage` (singleton)
- `featuredPost` (reference to blogPost)
- `categories` (array of string)

---

### Content Schemas

#### `blogPost` (document)
- `title` (string)
- `slug` (slug)
- `category` (string)
- `publishedAt` (datetime)
- `author` (object): name, bio, avatar (image)
- `heroImage` (image)
- `excerpt` (text)
- `body` (block content — Sanity portable text with):
  - Standard blocks (h2, h3, normal, blockquote)
  - Marks: strong, em, link
  - Custom blocks: `fullWidthImage` (image + caption), `imagePair` (2 images), `divider`
- `tags` (array of string)
- `relatedPosts` (array of references to blogPost)
- `readTime` (number) — minutes

---

## Phase 4: Shared Components

Build these in `/components/`:

### Global
1. **`Navbar`** — fixed, transparent → white on 60px scroll, logo left, links right, mobile hamburger. Active state per page.
2. **`Footer`** — 4-column (brand | explore | info | contact), cream bg, sand border top
3. **`ScrollReveal`** — Framer Motion wrapper, fade-up (y:40→0, opacity 0→1), 12% threshold
4. **`StaggerReveal`** — Parent wrapper triggering children with 0.12s delay increments
5. **`PageHero`** — 65vh with background image, gradient overlay fading to cream, eyebrow + title + subtitle
6. **`QuoteStrip`** — full-width ocean gradient (135deg deep→default→lagoon) with SVG cross pattern at 3% opacity
7. **`CTABand`** — centered title + subtitle + dual buttons on sand-light bg
8. **`GoldRule`** — 50px × 2px gradient divider

### Buttons
9. **`ButtonPrimary`** — ocean bg, white text, hover lift + shadow
10. **`ButtonOutline`** — ocean border, transparent bg, hover fills ocean

### Cards
11. **`FeatureCard`** — white bg, SVG icon, title, description, teal top-bar on hover, lift effect
12. **`LifestyleCard`** — full-bleed image with gradient overlay, hover reveals description text
13. **`ArticleCard`** — image with category badge, date, title, excerpt (3-line clamp), read more link

### Interactive
14. **`FilterPills`** — row of category buttons, active state fills ocean, updates visible count
15. **`LightboxModal`** — full-screen image viewer with prev/next (keyboard + click), counter, title/category
16. **`VideoModal`** — YouTube embed modal with backdrop click / escape to close
17. **`FAQAccordion`** — collapsible items, rotating plus icon, single-open behaviour
18. **`ScrollPillNav`** — horizontal pill bar that highlights active section on scroll (Lots page)

---

## Phase 5: Page-by-Page Structure

### 1. Homepage (`/`)
Reference: `pearns-point.html`
- 100vh hero with Ken Burns zoom (scale 1.05→1 over 18s), staggered text after 2s
- Intro: 2-col grid (image with floating accent + 5px cream border, offset -30px/-40px | text + 3 stats)
- Lifestyle: 4 edge-to-edge cards with hover description reveal
- Quote strip
- Features: 3 cards
- Villas: asymmetric grid (1 hero spanning 2 rows + 2 smaller)
- Antigua: 2-col with floating "365 beaches" badge
- CBI: centered with dual CTAs
- Developer strip: dark navy bar

### 2. The Development (`/the-development`)
Reference: `the-development.html`
- 65vh page hero
- The Vision: 2-col (images + float | content)
- The Project: lot type badges (Beach Front, Ocean Front, Ocean View)
- Amenities: 4-card grid (Beach Bar, Pool, Tennis, Fitness)
- Quote strip
- Developer: Orange Limited story with 4 highlight cards

### 3. Lots & Site Plan (`/lots-site-plan`)
Reference: `lots-site-plan.html`
- Site map image section (placeholder for interactive map)
- Scroll-activated pill nav bar: 8 lot areas
- 8 lot area sections in alternating layout:
  - Each: hero image + 2 thumbnails, description, feature dots, enquiry CTA
  - "Drone Video" button → YouTube modal per area
  - Areas: Oceans Edge, Five Islands Point, Pearns Bay, Secret Bay, Five Islands Bay, Pearns Beach, Five Islands View, The Look Out
- Dark availability banner: 49 plots, 8 areas, 137 acres

### 4. Plot & Plan (`/plot-and-plan`)
Reference: `plot-and-plan.html`
- Intro: problem/solution framing
- 3 design cards in 3-column grid:
  - Caribbean Chic (Option A)
  - Naturally Modern (Option B)
  - Caribbean Connected (Option C)
  - Each: image, name, description, 6 feature ticks, brochure CTA
- 5-step vertical timeline: Choose Plot → Select Design → Personalise → Construction → Handover
- What's Included checklist
- Pricing: US $6,000,000 starting (dark navy band)
- Partners: Orange Limited, KSR Architects, Studio Piet Boon

### 5. The Villas (`/the-villas`)
Reference: `the-villas.html`
- Design Philosophy: 2-col (image | text)
- Full-width showcase image with cream gradient fade top/bottom
- 6 feature cards: Horizontal Design, Bespoke to You, Natural Materials, Trade Wind Cooling, Indoor/Outdoor Flow, Low Maintenance
- Architects: 2-col with KSR + Piet Boon bordered cards
- Quote strip
- Villa gallery: masonry-style grid with wide + standard tiles, hover zoom
- Bespoke section: bring your own design team

### 6. Gallery (`/gallery`)
Reference: `gallery.html`
- Filter pill bar: All, Aerial, Beaches, Villas, Lifestyle, Landscape
- CSS columns masonry grid (3→2→1 columns responsive), 18 images
- Hover overlay with title + category
- Full lightbox: prev/next (arrows + keyboard), counter, caption, escape/backdrop close
- Aerial video section: cinematic thumbnail + play button → YouTube modal
- CTA band

### 7. The Antigua Experience (`/the-antigua-experience`)
Reference: `the-antigua-experience.html`
- Island intro: 2-col with floating "365" badge
- Stats band: 365 beaches, 28°C avg, 8hrs London, 4.5hrs Miami, 300+ days sunshine
- Lifestyle panels: 4 cards (Sailing, Dining, Beaches, Yacht & Marina)
- Quote strip
- Getting Here: 4 flight route cards (London 8h, JFK 4.5h, Miami 3.5h, Toronto 5h)
- Climate: 12-month temperature grid (27–30°C)
- Experiences: 3 alternating rows (Nelson's Dockyard, Sport & Wellness, Nature & Adventure) with tag pills

### 8. Citizenship by Investment (`/citizenship-by-investment`)
Reference: `citizenship-by-investment.html`
- CBI intro: 2-col with "CBI Approved" badge
- Benefits: 6 cards with gold accent hover bars (Visa-Free Travel, Tax Advantages, Fast Processing, Dual Citizenship, Minimal Residency, Family Inclusion)
- Passport highlights: 4 stat boxes (150+ countries, EU, UK, HK/Singapore)
- Process timeline: 5 steps with ocean dot markers and duration tags
- Qualifies band: dark navy, 4 tick-mark features
- Quote strip
- FAQ accordion: 6 questions (min investment, processing time, family, residency, resale, dual citizenship)

### 9. Latest News (`/latest-news`)
Reference: `latest-news.html`
- Featured article: large split card (image left | content right)
- Filter pills: All, Development, Lifestyle, Antigua, Citizenship
- 9 article cards in 3-column grid with category filtering
- Newsletter signup: dark navy, email input + subscribe button
- CTA band

### 10. Contact Us (`/contact`)
Reference: `contact-us.html`
- 3 contact cards: Call, Email, Visit
- Enquiry form: name, email, phone, country, interest dropdown, message, consent checkbox
- Info sidebar: phone numbers, email, 2 office cards, office hours
- Map section: placeholder with Google Maps link (17.0868, -61.8727)

### 11. Blog Post (`/news/[slug]`)
Reference: `blog-post-template.html`
- Article hero: full-width image, back arrow, category badge, title, meta (date, read time, author)
- Rich prose: drop cap, h2/h3, blockquotes with ocean border + citation, inline links, bullet lists
- Image components: full-width figure with caption, side-by-side image pair
- Gold divider
- Tags + share bar (Facebook, Twitter, LinkedIn, copy link)
- Author box: avatar, name, bio
- Related articles: 3-card grid
- Newsletter signup

---

## Phase 6: Animation Specifications

Using Framer Motion throughout:

- **Scroll reveal**: fade up (y: 40→0, opacity: 0→1) at 12% viewport threshold
- **Staggered children**: 0.12s delay increments between siblings
- **Homepage hero**: Ken Burns zoom (scale 1.05→1 over 18s), text staggers in after 2s
- **Navbar**: background transition at 60px scroll
- **Lifestyle/gallery cards**: image scale 1→1.06 on hover (1.2s ease)
- **Feature/benefit cards**: translateY(-4px) lift, top border scaleX(0→1) from left
- **FAQ accordion**: max-height transition with 0.5s ease
- **Filter transitions**: opacity + scale (0.92→1) for show/hide
- **Lightbox**: opacity fade + scale (0.92→1) on image
- **Easing**: cubic-bezier(0.25, 0.1, 0.25, 1) globally

---

## Phase 7: Key Visual Details

- **Gold rule dividers**: 50px × 2px, gradient warm-gold → champagne
- **Image shadows**: 0 24px 60px rgba(0,0,0,0.08)
- **Floating accent images**: 5px cream border, offset -30px/-40px
- **Nav CTA**: border style, fills on hover
- **Quote strips**: ocean gradient (135deg deep→default→lagoon) with SVG cross pattern at 3% opacity
- **Category badges**: ocean bg, white text, 0.48–0.52rem, uppercase
- **Feature dots**: 6px ocean circles (lot features)
- **Tag pills**: ocean tint bg (6% opacity), ocean text, 1px ocean border (12% opacity)
- **Timeline dots**: 26px white circle, 2px ocean border, 10px ocean inner dot
- **Contact form inputs**: 1.5px sand border, focus → ocean border + 3px ocean glow (8% opacity)

---

## Phase 8: Deployment & Configuration

- Configure for Vercel deployment
- `next.config.js` with image domains: `cdn.sanity.io`, `images.unsplash.com`
- Sanity Studio at `/studio` (protected by Sanity auth)
- ISR with on-demand revalidation via Sanity webhook, or `revalidate: 60` default
- Blog posts use `generateStaticParams` for static generation

---

## Phase 9: File Structure

```
/app
  /page.tsx                          ← Homepage
  /the-development/page.tsx
  /lots-site-plan/page.tsx
  /plot-and-plan/page.tsx
  /the-villas/page.tsx
  /gallery/page.tsx
  /the-antigua-experience/page.tsx
  /citizenship-by-investment/page.tsx
  /latest-news/page.tsx
  /contact/page.tsx
  /news/[slug]/page.tsx              ← Blog post (dynamic)
  /layout.tsx                        ← Root layout with fonts, metadata
  /studio/[[...tool]]/page.tsx       ← Sanity Studio

/components
  /global/
    Navbar.tsx
    Footer.tsx
    PageHero.tsx
    QuoteStrip.tsx
    CTABand.tsx
    GoldRule.tsx
    ScrollReveal.tsx
    StaggerReveal.tsx
  /buttons/
    ButtonPrimary.tsx
    ButtonOutline.tsx
  /cards/
    FeatureCard.tsx
    LifestyleCard.tsx
    ArticleCard.tsx
    ArchitectCard.tsx
    OfficeCard.tsx
    FlightRouteCard.tsx
    DesignCard.tsx
    ContactCard.tsx
  /interactive/
    FilterPills.tsx
    LightboxModal.tsx
    VideoModal.tsx
    FAQAccordion.tsx
    ScrollPillNav.tsx
    ContactForm.tsx
    NewsletterForm.tsx
  /blog/
    Prose.tsx              ← Rich text renderer for portable text
    AuthorBox.tsx
    ShareBar.tsx
    RelatedArticles.tsx

/lib
  sanity.ts                ← Client, image builder
  queries.ts               ← All GROQ queries
  types.ts                 ← TypeScript interfaces

/sanity
  /schemas/
    index.ts
    siteSettings.ts
    homePage.ts
    developmentPage.ts
    lotsSitePlanPage.ts
    plotAndPlanPage.ts
    villasPage.ts
    galleryPage.ts
    antiguaPage.ts
    cbiPage.ts
    contactPage.ts
    newsPage.ts
    blogPost.ts
  sanity.config.ts
  sanity.cli.ts

/public
  /fonts (if self-hosting)
```

---

## Initial Content (Seed Data)

All placeholder content is visible in the reference HTML files. Key values:

**Contact:**
- Antigua: +1 268-736-4028
- Sales: +1 268-720-2225
- Email: info@orangelimited.com

**Developer:** Orange Limited (Albert Hartog, Dutch entrepreneur)
**Architects:** KSR Architects, Studio Piet Boon
**Location:** Pearns Point, Five Islands, St. John's, Antigua (17.0868, -61.8727)

**Key stats:** 49 exclusive plots, 7 beaches, 137 acres, 8 lot areas, 360° views
**Pricing:** from US $6,000,000
**CBI:** 150+ visa-free countries, 3–6 month processing

---

## How to Prompt Claude Code

Start in an empty project directory with all HTML reference files and this brief, then:

```
Read BRIEF.md for the full build specification. The /reference/ folder contains 11 HTML files — these are the visual reference for every page. Match them as closely as possible.

Build the full project following the phases in order. Make sure:
1. All Sanity schemas are complete and Studio works at /studio
2. Every page matches its HTML reference — same colours, fonts, spacing, animations
3. All content is CMS-editable
4. Responsive at 1024px and 640px breakpoints
5. Framer Motion animations match the spec
6. Blog posts render from Sanity portable text with all custom blocks
7. Gallery lightbox, video modals, FAQ accordion, and filter systems all work

Begin with Phase 1.
```
