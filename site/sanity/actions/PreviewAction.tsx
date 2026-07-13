import { EyeOpenIcon } from '@sanity/icons'
import { useClient, type DocumentActionComponent, type DocumentActionProps } from 'sanity'
import { createPreviewSecret } from '@sanity/preview-url-secret/create-secret'

/**
 * Studio document action that opens the current blog post on the live website
 * in Next.js Draft Mode, so editors can preview draft & scheduled posts before
 * they publish. Generates a short-lived, single-use preview secret.
 */
// Canonical host — the apex domain 308-redirects to www and drops the preview
// query params/cookies, so the preview link must target www directly.
const SITE_URL = 'https://www.pearnspoint.com'

export const PreviewAction: DocumentActionComponent = (props: DocumentActionProps) => {
  const client = useClient({ apiVersion: '2025-02-19' })
  const doc = (props.draft || props.published) as { slug?: { current?: string } } | null
  const slug = doc?.slug?.current

  return {
    label: 'Open Preview',
    icon: EyeOpenIcon,
    disabled: !slug,
    title: slug ? 'Preview this post on the website' : 'Add a slug first',
    onHandle: async () => {
      try {
        const { secret } = await createPreviewSecret(
          client,
          'blogPost-preview',
          typeof location !== 'undefined' ? location.href : SITE_URL
        )
        const url = new URL('/api/draft', SITE_URL)
        url.searchParams.set('sanity-preview-secret', secret)
        url.searchParams.set('sanity-preview-pathname', `/news/${slug}`)
        window.open(url.toString(), '_blank', 'noopener,noreferrer')
      } finally {
        props.onComplete()
      }
    },
  }
}
