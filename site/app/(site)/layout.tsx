import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'
import PageLoader from '@/components/global/PageLoader'
import { fetchPage } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = await fetchPage<{ logo?: string; logoLight?: string }>(siteSettingsQuery)

  return (
    <>
      <PageLoader />
      <Navbar logoDark={settings?.logo ?? null} logoLight={settings?.logoLight ?? null} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
