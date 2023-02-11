import Head from 'next/head'
import Hero from '../components/Hero'
import Illustration from '../components/Illustration'
import Services from '../components/Services'
import Cases from '../components/Cases'
import Layout from './layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Thalita Torres | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Illustration />
      <Services />
      <Cases />
    </Layout>
  )
}
