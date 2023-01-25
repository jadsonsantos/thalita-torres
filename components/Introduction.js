import styles from '../styles/Introduction.module.scss'
import Link from './Link'

const Introduction = () => (
  <section className={styles.introduction}>
    <div className="container">
      <h1 className={`title ${styles.introduction__title}`}>Let's talk.</h1>
      <p className={`paragraph ${styles.introduction__text}`}>
        Do you live nearby? How about a cup of coffee? Or a very cold tea (don’t
        forget, I’m in Sao Paulo 🤗).
      </p>
      <p className={`paragraph ${styles.introduction__text}`}>
        Live far away? Don’t worry, for partnerships, business inquiries or just
        for saying hi, send a "hello there" to{' '}
        <Link isExternal href="mailto:hello.thalitatorres@gmail.com">
          hello.thalitatorres@gmail.com
        </Link>{' '}
        or fill the form on the side.
      </p>
    </div>
  </section>
)

export default Introduction
