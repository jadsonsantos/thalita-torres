import Head from 'next/head'
import Illustration from '../components/Illustration'
import Cases from '../components/Cases'
import Layout from './layout'

import DesktopIllustration from '../public/images/illustration-desktop-work.png'
import MobileIllustration from '../public/images/illustration-mobile.png'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Thalita Torres | Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cases />
      <Illustration
        mobileIllustration={MobileIllustration}
        desktopIllustration={DesktopIllustration}
      />
    </Layout>
  )
}
