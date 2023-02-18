import Link from '../Link'
import NextLink from 'next/link'
import styles from './Contact.module.scss'

const Contact = () => (
  <section className={styles.contact}>
    <div className="container">
      <h2 className={styles.contact__title}>Let&apos;s talk!</h2>
      <p className={styles.contact__text}>
        For partnerships, business inquiries or just for saying hi, send a
        &quot;hello there&quot; to{' '}
        <Link href="mailto:hello.thalitatorres@gmail.com">
          hello.thalitatorres@gmail.com
        </Link>{' '}
        or fill{' '}
        <NextLink href="/contact" className="external-link">
          this form
        </NextLink>{' '}
        and I get in touch with you.
      </p>
      <p className={styles.contact__text}>
        You can also give a look at my{' '}
        <Link href="https://www.linkedin.com/in/thalita-torres/">LinkedIn</Link>{' '}
        or <Link href="https://dribbble.com/thalitatorres">Dribbble.</Link>{' '}
      </p>
    </div>
  </section>
)

export default Contact
