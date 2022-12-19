import Link from './Link'
import styles from '../styles/Footer.module.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <p className={styles.footer__text}>
          © {currentYear} by Thalita Torres.
        </p>
        <p className={styles.footer__text}>
          Need a developer? Check{' '}
          <Link
            href="https://www.linkedin.com/in/jadsonsantos/"
            className={styles.footer__link}
            isExternal
          >
            this
          </Link>{' '}
          awesome one.
        </p>
      </div>
    </footer>
  )
}

export default Footer
