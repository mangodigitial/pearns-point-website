import { draftMode } from 'next/headers'
import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'
import PageLoader from '@/components/global/PageLoader'
import DraftModeBanner from '@/components/global/DraftModeBanner'
import { fetchPage } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'

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
      <PageLoader />
      {preview && <DraftModeBanner />}
      <Navbar logoDark={settings?.logo ?? null} logoLight={settings?.logoLight ?? null} />
      <main>{children}</main>
      <Footer
        tagline={settings?.footerTagline ?? null}
        phoneAntigua={settings?.contactPhoneAntigua ?? null}
        phoneSales={settings?.contactPhoneSales ?? null}
        email={settings?.contactEmail ?? null}
      />
    </>
  )
}
