import Head from 'next/head'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Timeline from '../components/Timeline'
import Topics from '../components/Topics'

export default function About() {
  return (
    <>
      <Head>
        <title>Thalita Torres | About</title>
      </Head>
      <Timeline />
      <Topics />
      <Contact />
      <Footer />
    </>
  )
}
