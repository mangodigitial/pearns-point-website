import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'
import PageLoader from '@/components/global/PageLoader'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
