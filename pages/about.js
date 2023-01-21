import Head from 'next/head'
import Timeline from '../components/Timeline'
import Topics from '../components/Topics'
import Bio from '../components/Bio'
import Gallery from '../components/Gallery'
import Layout from './layout'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Thalita Torres | About</title>
      </Head>
      <Bio />
      <Timeline />
      <Gallery />
      <Topics />
    </Layout>
  )
}
