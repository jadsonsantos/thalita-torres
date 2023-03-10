import Head from 'next/head'
import Hero from '../components/Hero'
import Illustration from '../components/Illustration'
import Services from '../components/Services'
import Cases from '../components/Cases'
import Layout from './layout'
import styles from '../styles/Home.module.scss'

import DesktopIllustration from '../public/images/illustration-desktop.png'
import MobileIllustration from '../public/images/illustration-mobile.png'

export default function Home() {
  return (
    <Layout className={styles.home}>
      <Head>
        <title>Thalita Torres | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Illustration
        mobileIllustration={MobileIllustration}
        desktopIllustration={DesktopIllustration}
      />
      <Services />
      <Cases backgroundColor="#EAEBEF" />
    </Layout>
  )
}
