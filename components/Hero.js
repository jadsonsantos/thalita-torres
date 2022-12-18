import styles from '../styles/Hero.module.scss'
import Link from './Link'

const Hero = () => (
  <section className={styles.hero}>
    <div className="container">
      <h1 className={styles.hero__title}>
        Hi.
        <br />{' '}
        <strong className={styles.hero__name}>I’m Thalita Torres.</strong>
        <br /> A staff product designer at{' '}
        <Link
          className={styles.hero__link}
          href="https://nubank.com.br/"
          isExternal
        >
          Nubank.
        </Link>
        <br />
        Based in Sao Paulo, Brazil.
      </h1>
      <p className={styles.hero__description}>
        +13 years working with design, connecting user needs, product objectives
        and business goals in web projects, such as mobile apps, SaaS dashboards
        and websites.
      </p>
    </div>
  </section>
)

export default Hero
