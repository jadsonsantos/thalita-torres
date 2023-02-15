import Head from 'next/head'
import Form from '../components/Form'
import Introduction from '../components/Introduction'
import Layout from './layout'
import styles from '../styles/Contact.module.scss'

export default function Contact() {
  return (
    <Layout className={`container ${styles.contact}`}>
      <Head>
        <title>Thalita Torres | Contact</title>
      </Head>
      <Introduction />
      <Form />
    </Layout>
  )
}
