import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout({ children, className }) {
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
      <Contact />
      <Footer />
    </>
  )
}
