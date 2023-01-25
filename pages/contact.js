import Head from 'next/head'
import Form from '../components/Form'
import Introduction from '../components/Introduction'
import Layout from './layout'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Thalita Torres | Contact</title>
      </Head>
      <Introduction />
      <Form />
    </Layout>
  )
}
