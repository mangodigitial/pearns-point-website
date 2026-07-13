/**
 * July 2026 blog batch — Pearns Point
 *
 * Creates 3 blog posts (Cricket, West-Coast Sunsets, The Hut) with uploaded
 * images and schedules them for consecutive Fridays at 08:00 UK time (BST = 07:00Z):
 *   Blog 1 — Fri 17 Jul 2026
 *   Blog 2 — Fri 24 Jul 2026
 *   Blog 3 — Fri 31 Jul 2026
 *
 * Auth: reads a token from env SANITY_WRITE_TOKEN, else from the Sanity CLI
 * login (~/.config/sanity/config.json after `npx sanity login`).
 *
 * Modes (first CLI arg):
 *   draft        Upload images + create/replace DRAFT docs only (nothing goes live). [default]
 *   schedule     draft, then create native scheduled-draft releases (needs Growth plan).
 *   publish-now  draft, then publish immediately (used with the query date-gate approach).
 *
 * Run from the `site` folder:  node scripts/july-2026-blogs.mjs draft
 */
import { createClient } from '@sanity/client'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const PROJECT_ID = 'st9j6mh7'
const DATASET = 'production'
const IMG_DIR = 'C:/Users/matty/Dropbox/5. Pearns Point/Blogs/July 2026'

function getToken() {
  if (process.env.SANITY_WRITE_TOKEN) return process.env.SANITY_WRITE_TOKEN.trim()
  const cfgPath = path.join(os.homedir(), '.config', 'sanity', 'config.json')
  if (fs.existsSync(cfgPath)) {
    try {
      const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'))
      if (cfg.authToken) return cfg.authToken
    } catch {}
  }
  throw new Error(
    'No Sanity token found. Run `npx sanity login` in this folder, or set SANITY_WRITE_TOKEN.'
  )
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2025-02-19',
  token: getToken(),
  useCdn: false,
})

/* ── portable-text helpers ── */
let _k = 0
const key = () => 'j26' + (_k++).toString(36)
const span = (text, marks = []) => ({ _type: 'span', _key: key(), text, marks })

const p = (text, { first = false } = {}) => ({
  _type: 'block',
  _key: first ? 'first' : key(),
  style: 'normal',
  markDefs: [],
  children: [span(text)],
})

// Paragraph ending with an inline link: `${lead}${linkText}${tail}`
const pLink = (lead, linkText, href, tail = '') => {
  const defKey = key()
  const children = []
  if (lead) children.push(span(lead))
  children.push({ _type: 'span', _key: key(), text: linkText, marks: [defKey] })
  if (tail) children.push(span(tail))
  return {
    _type: 'block',
    _key: key(),
    style: 'normal',
    markDefs: [{ _type: 'link', _key: defKey, href }],
    children,
  }
}

const h2 = (text) => ({
  _type: 'block',
  _key: key(),
  style: 'h2',
  markDefs: [],
  children: [span(text)],
})

const img = (assetId, caption) => ({
  _type: 'fullWidthImage',
  _key: key(),
  image: { _type: 'image', asset: { _type: 'reference', _ref: assetId } },
  ...(caption ? { caption } : {}),
})

const imageRef = (assetId) => ({
  _type: 'image',
  asset: { _type: 'reference', _ref: assetId },
})

/* ── post definitions ──
 * `images` maps a local filename to a slot name used by `body`.
 * `body(a)` receives { slot: assetId } after upload and returns portable text.
 */
const CREDIT_ABTA = '*Credit: Antigua and Barbuda Tourism Authority'
const CREDIT_HUT = '*Credit: The Hut, Little Jumby'

const posts = [
  {
    id: 'blogPost-cricket-in-antigua-the-heartbeat-of-an-island',
    title: 'Cricket in Antigua: The Heartbeat of an Island',
    slug: 'cricket-in-antigua-the-heartbeat-of-an-island',
    category: 'Latest News',
    publishAt: '2026-07-17T07:00:00Z',
    readTime: 4,
    tags: ['Cricket', 'Antigua', 'Lifestyle'],
    excerpt:
      'From Sir Vivian Richards to the stadium that bears his name, cricket is woven into Antiguan life — part of the authentic island lifestyle at Pearns Point.',
    seoTitle: 'Cricket in Antigua: The Heartbeat of an Island | Pearns Point',
    seoDescription:
      "Discover Antigua's rich cricketing heritage, from Sir Vivian Richards to the Sir Vivian Richards Stadium, and how it shapes island life near Pearns Point.",
    dir: 'Blog 1',
    heroFile: 'Cricket.jpg',
    images: {
      statue: 'Sir Vivian Richards at Statue in his likeness.jpg',
      stadium:
        'Sir Vivian Richards Stadium will be home of Beach 366 - Photo Courtesy The Antigua and Barbuda Tourism Authority.jpg',
      jolly: 'ant 222 cricket at jolly beach.jpg',
    },
    body: (a) => [
      p(
        'Cricket is an important part of Antiguan culture and one of the many traditions that shape life on the island. From local matches to international fixtures, the sport has long brought communities together and helped put Antigua on the global stage. For residents of Pearns Point, this rich sporting heritage forms part of the authentic island lifestyle that makes Antigua such a compelling place to call home.',
        { first: true }
      ),
      h2('An Island That Produced a Legend'),
      p('No conversation about cricket in Antigua can begin other than with Sir Vivian Richards.'),
      p(
        'Born and raised in Antigua, Sir Viv became one of the most celebrated batsmen in cricket history. His style, confidence and leadership helped define an era of West Indies dominance that remains legendary today.'
      ),
      img(a.statue, CREDIT_ABTA),
      p(
        "His legacy lives on at the Sir Vivian Richards Stadium, one of the Caribbean's premier cricket venues. Located just a short drive from St. John's and 30 minutes from Pearns Point, the stadium has hosted international Test matches, One Day Internationals, T20 fixtures and major global tournaments since its construction for the 2007 Cricket World Cup."
      ),
      img(a.stadium, CREDIT_ABTA),
      h2('A Rich Cricketing Heritage'),
      p(
        "Antigua's cricket story stretches back generations. The island has witnessed some of the sport's most memorable moments, including Sir Vivian Richards' famous 56-ball Test century against England in 1986, a record that stood for nearly three decades. Antigua has also played host to major international events, including World Cup matches and championship finals that have brought the world's best players to its shores."
      ),
      h2('Experiencing Cricket on the Island'),
      p(
        'For residents and visitors to Antigua, cricket offers another way to connect with the authentic spirit of Antigua.'
      ),
      p(
        "Attending a match at Sir Vivian Richards Stadium provides a unique window into local culture, whether you're a lifelong cricket enthusiast or discovering the sport for the first time. The atmosphere is welcoming, vibrant and unmistakably Antiguan."
      ),
      img(a.jolly, CREDIT_ABTA),
      p(
        "Even outside of match days, the stadium stands as a symbol of the island's remarkable contribution to world sport and serves as a reminder that Antigua's influence extends far beyond its size."
      ),
      pLink(
        'For the latest fixtures and upcoming events at the Sir Vivian Richards Stadium, ',
        'find out more here',
        'https://www.windiescricket.com/',
        '.'
      ),
      h2('The Spirit of Antigua'),
      p(
        'Cricket embodies many of the qualities that make Antigua such a special place to call home: community, heritage, resilience and passion.'
      ),
      p(
        "At Pearns Point, residents enjoy a lifestyle defined by natural beauty, privacy, and connection to the island around them. And just as Antigua's beaches and sailing traditions form part of its character, so too does cricket, a sport that continues to inspire pride across generations."
      ),
      p(
        "Because in Antigua, cricket is never far away. It's celebrated and carried forward by an island that has helped shape the history of the game."
      ),
      pLink(
        '',
        'Contact us today',
        '/contact',
        ' for more information about availability at Pearns Point.'
      ),
    ],
  },

  {
    id: 'blogPost-the-magic-of-antiguas-west-coast-sunsets',
    title: "The Magic of Antigua's West Coast Sunsets",
    slug: 'the-magic-of-antiguas-west-coast-sunsets',
    category: 'Latest News',
    publishAt: '2026-07-24T07:00:00Z',
    readTime: 4,
    tags: ['Sunsets', 'Lifestyle', 'Antigua'],
    excerpt:
      "Along Antigua's west coast, every evening brings a front-row seat to the sun sinking into the Caribbean Sea — a natural advantage that defines life at west-facing Pearns Point.",
    seoTitle: "The Magic of Antigua's West Coast Sunsets | Pearns Point",
    seoDescription:
      "From Deep Bay to Little Jumby, discover the best west-coast sunset spots in Antigua and why Pearns Point's west-facing setting offers some of the island's finest views.",
    dir: 'Blog 2',
    heroFile: 'DJI_0687 (1).jpg',
    images: {
      sugarMill: 'antigua sugar mill sunset (1).jpg',
      jolly: 'ant 247l sunset over jolly beach(1).jpg',
      englishHarbour: 'sunset in english harbour.jpg',
      tamarind: 'Tammarind Hills Sunset.jpg',
    },
    body: (a) => [
      p(
        'There are many reasons people fall in love with Antigua and Pearns Point. The crystal-clear waters, warm climate, and relaxed Caribbean lifestyle are among the most obvious. Yet for many residents and visitors, it is the island’s sunsets that leave a lasting impression.',
        { first: true }
      ),
      p(
        "Along Antigua's west coast, each evening brings a front-row seat to one of nature's most beautiful displays. As the sun slowly descends into the Caribbean Sea, the sky transforms into a canvas, creating a moment that feels both spectacular and wonderfully serene."
      ),
      p(
        "Antigua's west coast has a unique orientation towards the setting sun. Unlike many Caribbean destinations, where sunsets are hidden behind hills or neighbouring islands, Pearns Point's setting on Antigua's western shoreline enjoys uninterrupted views across open water."
      ),
      p('Some of the best spots include…'),
      img(a.sugarMill, CREDIT_ABTA),
      h2('Deep Bay'),
      p(
        "Known for its calm waters and historic setting, Deep Bay is one of Antigua's most popular sunset locations. The wide bay faces directly west, creating beautiful reflections across the water as the sun dips below the horizon."
      ),
      p(
        'The silhouette of Fort Barrington adds an extra layer of character to the view, particularly during the golden hour.'
      ),
      h2('Jolly Harbour and Jolly Beach'),
      p(
        'The expansive coastline around Jolly Harbour provides a classic Caribbean sunset experience. Long stretches of white sand and open water create unobstructed views, while nearby restaurants and beach bars offer the perfect setting to linger into the evening.'
      ),
      p(
        'It is a favourite location for both residents and visitors seeking a relaxed atmosphere at the end of the day.'
      ),
      img(a.jolly, CREDIT_ABTA),
      h2('Aboard a Sunset Sail'),
      p(
        "Some of Antigua's finest sunset views are experienced from the water itself. Sailing along the west coast offers a constantly changing perspective of the island's shoreline, while the open sea provides uninterrupted views of the sun sinking into the Caribbean."
      ),
      p('For many, a sunset sail is one of the most memorable experiences Antigua has to offer.'),
      img(a.englishHarbour, CREDIT_ABTA),
      h2('Little Jumby'),
      p(
        "The waters surrounding Little Jumby provide another exceptional vantage point for sunset. As the afternoon light softens, the island's tranquil beaches and surrounding coastline create a peaceful setting to enjoy the transition from day to evening."
      ),
      p(
        'A sunset dinner following an afternoon on the beach is a quintessential west coast experience.'
      ),
      img(a.tamarind, CREDIT_ABTA),
      h2('Pearns Point: Living with the Best Views in Antigua'),
      p(
        "At Pearns Point, the surrounding landscape plays a central role in the lifestyle experience. The peninsula's west-facing position ensures residents enjoy some of Antigua's most coveted coastal views, with the Caribbean Sea stretching endlessly towards the horizon. This natural advantage becomes part of everyday life."
      ),
      p(
        'While luxury can be defined in many ways, there is something timeless about watching the sun disappear into the ocean from the comfort of your own home.'
      ),
      pLink('', 'Contact us', '/contact', ' for further details.'),
    ],
  },

  {
    id: 'blogPost-the-hut-antiguas-iconic-beachfront-dining-experience',
    title: "The Hut: Antigua's Iconic Beachfront Dining Experience",
    slug: 'the-hut-antiguas-iconic-beachfront-dining-experience',
    category: 'Latest News',
    publishAt: '2026-07-31T07:00:00Z',
    readTime: 3,
    tags: ['Dining', 'Lifestyle', 'Antigua'],
    excerpt:
      "A short boat ride from the mainland, The Hut on Little Jumby Island blends beautiful surroundings, fresh local flavours and laid-back island hospitality — world-class dining within easy reach of Pearns Point.",
    seoTitle: "The Hut: Antigua's Iconic Beachfront Dining Experience | Pearns Point",
    seoDescription:
      'Discover The Hut on Little Jumby Island — a relaxed yet sophisticated beachfront restaurant, and one of the exceptional experiences within reach of life at Pearns Point.',
    dir: 'Blog 3',
    heroFile: 'The_Hut_Web_218.jpg',
    images: {
      arrival: 'F101E521-E829-4E81-9E3E-79CEEEA8F4A2.JPG',
    },
    eyebrowPara: 'Local Business Spotlight…',
    body: (a) => [
      p('Local Business Spotlight…', { first: true }),
      p(
        "One of the great pleasures of life in Antigua is the abundance of exceptional dining experiences, many of which are defined as much by their setting as their cuisine. Among the island's most sought-after destinations is The Hut, a relaxed yet sophisticated beachfront restaurant located on the shores of Little Jumby Island."
      ),
      p(
        'Just a short boat ride from the mainland, The Hut offers a uniquely Antiguan blend of beautiful surroundings, fresh local flavours, and laid-back island hospitality.'
      ),
      h2('A Unique Island Escape'),
      p(
        "Part of The Hut's appeal lies in the journey itself. Accessible only by boat, Little Jumby feels wonderfully removed from the pace of everyday life. The short crossing sets the tone for an experience centred around relaxation, connection and appreciation of Antigua's natural beauty."
      ),
      p(
        'Upon arrival, guests are greeted by white sand, crystal-clear waters, and uninterrupted views across the Caribbean Sea. Whether arriving for a leisurely lunch or a special celebration, the setting immediately creates a sense of occasion.'
      ),
      img(a.arrival, CREDIT_HUT),
      h2('A Different Kind of Dining Experience'),
      p(
        'The Hut is renowned for its elegant yet unpretentious approach to dining. The menu celebrates fresh seafood, locally sourced ingredients, and Mediterranean influences, complemented by a carefully curated cocktail and wine selection. It is a dining experience that perfectly captures the spirit of Antigua, effortlessly sophisticated without ever feeling formal.'
      ),
      h2('A Favourite Among Residents and Visitors'),
      p(
        "The Hut has become a favourite gathering place for both visitors and island residents. Its combination of exclusivity and natural beauty makes it one of Antigua's most memorable destinations."
      ),
      p(
        'For owners at Pearns Point, having world-class culinary experiences such as The Hut within easy reach is part of what makes life on Antigua so appealing. Whether entertaining guests, celebrating a special occasion, or enjoying a spontaneous afternoon on the water, it offers another opportunity to embrace the island’s exceptional lifestyle.'
      ),
      h2('Experiencing the Best of Antigua'),
      p(
        'As well as spectacular waterfront homes, life at Pearns Point is about enjoying the experiences that make Antigua one of the Caribbean’s most desirable destinations.'
      ),
      p(
        'From sailing and secluded beaches to renowned restaurants like The Hut, residents are surrounded by opportunities to enjoy the very best the island has to offer, defining the Pearns Point lifestyle.'
      ),
      pLink('For more information about Pearns Point, ', 'click here', '/contact', '.'),
    ],
  },
]

/* ── upload one image, return asset._id ── */
async function uploadImage(dir, filename) {
  const filePath = path.join(IMG_DIR, dir, filename)
  if (!fs.existsSync(filePath)) throw new Error('Missing image: ' + filePath)
  const asset = await client.assets.upload('image', fs.createReadStream(filePath), {
    filename,
  })
  console.log(`  uploaded ${filename} -> ${asset._id}`)
  return asset._id
}

async function buildDraft(post) {
  console.log(`\n[${post.slug}]`)
  const hero = await uploadImage(post.dir, post.heroFile)
  const slots = {}
  for (const [slot, file] of Object.entries(post.images)) {
    slots[slot] = await uploadImage(post.dir, file)
  }
  const doc = {
    _id: `drafts.${post.id}`,
    _type: 'blogPost',
    title: post.title,
    slug: { _type: 'slug', current: post.slug },
    category: post.category,
    publishedAt: post.publishAt,
    author: { name: 'Pearns Point' },
    heroImage: imageRef(hero),
    excerpt: post.excerpt,
    readTime: post.readTime,
    tags: post.tags,
    seoTitle: post.seoTitle,
    seoDescription: post.seoDescription,
    body: post.body(slots),
  }
  await client.createOrReplace(doc)
  console.log(`  draft saved: drafts.${post.id}`)
  return post
}

async function scheduleNative(post) {
  const publishAt = new Date(post.publishAt)
  const release = await client.releases.create({
    metadata: {
      title: post.title,
      releaseType: 'scheduled',
      cardinality: 'one',
      intendedPublishAt: publishAt.toISOString(),
    },
  })
  const releaseId = release.releaseId
  await client.createVersion({
    publishedId: post.id,
    baseId: `drafts.${post.id}`,
    releaseId,
  })
  await client.releases.schedule({ releaseId, publishAt: publishAt.toISOString() })
  console.log(`  scheduled ${post.slug} for ${publishAt.toISOString()} (release ${releaseId})`)
}

async function publishNow(post) {
  // Promote draft -> published (used with the query date-gate approach).
  const draft = await client.getDocument(`drafts.${post.id}`)
  if (!draft) throw new Error('No draft to publish for ' + post.id)
  const { _id, ...rest } = draft
  await client.createOrReplace({ ...rest, _id: post.id })
  await client.delete(`drafts.${post.id}`)
  console.log(`  published ${post.slug} (hidden until ${post.publishAt} by date-gate)`)
}

async function main() {
  const mode = process.argv[2] || 'draft'
  console.log(`Mode: ${mode}`)
  for (const post of posts) {
    // schedule-only / publish-now-only reuse existing drafts (no re-upload)
    if (mode !== 'schedule-only' && mode !== 'publish-now-only') {
      await buildDraft(post)
    } else {
      console.log(`\n[${post.slug}] (using existing draft)`)
    }
    if (mode === 'schedule' || mode === 'schedule-only') await scheduleNative(post)
    else if (mode === 'publish-now' || mode === 'publish-now-only') await publishNow(post)
  }
  console.log('\nDone.')
}

main().catch((err) => {
  console.error('\nERROR:', err.message)
  process.exit(1)
})
