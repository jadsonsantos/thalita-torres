import Head from 'next/head'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Timeline from '../components/Timeline'

export default function About() {
  return (
    <>
      <Head>
        <title>Thalita Torres | About</title>
      </Head>
      <Timeline />
      <Contact />
      <Footer />
    </>
  )
}
