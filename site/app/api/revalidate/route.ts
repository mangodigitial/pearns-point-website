import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

/**
 * On-demand revalidation endpoint for Sanity webhooks.
 *
 * Configure in Sanity:
 *   URL:    https://your-domain.com/api/revalidate?secret=YOUR_SECRET
 *   Method: POST
 *   Body:   Sanity webhook payload (includes _type, slug, etc.)
 */
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const { _type, slug } = body

    // Map Sanity document types to paths
    const pathMap: Record<string, string[]> = {
      homePage: ['/'],
      developmentPage: ['/the-development'],
      lotsSitePlanPage: ['/lots-site-plan'],
      plotAndPlanPage: ['/plot-and-plan'],
      villasPage: ['/the-villas'],
      galleryPage: ['/gallery'],
      antiguaPage: ['/the-antigua-experience'],
      cbiPage: ['/citizenship-by-investment'],
      newsPage: ['/latest-news'],
      contactPage: ['/contact'],
      siteSettings: ['/'],
    }

    if (_type === 'blogPost') {
      // Revalidate the specific post and the news listing
      if (slug?.current) {
        revalidatePath(`/news/${slug.current}`)
      }
      revalidatePath('/latest-news')
    } else if (pathMap[_type]) {
      pathMap[_type].forEach((path) => revalidatePath(path))
    } else {
      // Unknown type — revalidate everything
      revalidatePath('/', 'layout')
    }

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
