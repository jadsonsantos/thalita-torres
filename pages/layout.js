import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout({ children, page }) {
  return (
    <>
      <Header />
      <main className={page}>{children}</main>
      <Contact />
      <Footer />
    </>
  )
}
