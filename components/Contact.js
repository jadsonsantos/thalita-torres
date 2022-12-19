import Link from './Link'
import styles from '../styles/Contact.module.scss'

const Contact = () => (
  <section className={styles.contact}>
    <div className="container">
      <h2 className={styles.contact__title}>Let&apos;s talk!</h2>
      <p className={styles.contact__text}>
        For partnerships, business inquiries or just for saying hi, send a
        &quot;hello there&quot; to{' '}
        <Link isExternal href="mailto:hello.thalitatorres@gmail.com">
          hello.thalitatorres@gmail.com
        </Link>{' '}
        or fill this form and I get in touch with you.
      </p>
      <p className={styles.contact__text}>
        You can also give a look at my{' '}
        <Link isExternal href="https://www.linkedin.com/in/thalita-torres/">
          LinkedIn
        </Link>{' '}
        or{' '}
        <Link isExternal href="https://dribbble.com/thalitatorres">
          Dribbble.
        </Link>{' '}
      </p>
    </div>
  </section>
)

export default Contact
