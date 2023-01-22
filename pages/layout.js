import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Contact />
      <Footer />
    </>
  )
}
