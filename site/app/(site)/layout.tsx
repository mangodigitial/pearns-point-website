import { draftMode } from 'next/headers'
import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'
import PageLoader from '@/components/global/PageLoader'
import DraftModeBanner from '@/components/global/DraftModeBanner'
import { fetchPage } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'
import JsonLd from '@/components/global/JsonLd'
import { organizationSchema, websiteSchema } from '@/lib/structuredData'

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled: preview } = draftMode()
  const settings = await fetchPage<{
    logo?: string
    logoLight?: string
    footerTagline?: string
    contactPhoneAntigua?: string
    contactPhoneSales?: string
    contactEmail?: string
  }>(siteSettingsQuery)

  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema()]} />
      <PageLoader />
      {preview && <DraftModeBanner />}
      {/* Keyboard users land here first and can jump the navigation. Visually
          hidden until it takes focus, at which point it sits over the header. */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-navy focus:text-white focus:px-5 focus:py-3 focus:text-[0.7rem] focus:font-semibold focus:tracking-[0.2em] focus:uppercase focus:no-underline"
      >
        Skip to content
      </a>
      <Navbar logoDark={settings?.logo ?? null} logoLight={settings?.logoLight ?? null} />
      <main id="main-content">{children}</main>
      <Footer
        tagline={settings?.footerTagline ?? null}
        phoneAntigua={settings?.contactPhoneAntigua ?? null}
        phoneSales={settings?.contactPhoneSales ?? null}
        email={settings?.contactEmail ?? null}
      />
    </>
  )
}
