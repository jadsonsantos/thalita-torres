import styles from '../styles/Bio.module.scss'
import Image from 'next/image'
import bioPicture from '../public/images/thalita.png'
import Link from './Link'

const Bio = () => (
  <section className={styles.bio}>
    <div className="container">
      <div className={styles.bio__content}>
        <div className={styles.bio__image}>
          <Image src={bioPicture} alt="Thalita Torres" />
        </div>
        <div>
          <h1 className={styles.bio__title}>
            I'm a designer living in Sao Paulo/BR, working at{' '}
            <Link className={styles.bio__link} href="https://nubank.com.br/">
              Nubank
            </Link>{' '}
            and trying to make people's lives easier.
          </h1>
          <p className={styles.bio__description}>
            I have more then 13 years of experience in design.
            <br /> I starter in the world of design in the graphic area.
            <br /> That gave me an excellent basis for design principles.
          </p>
          <p className={styles.bio__description}>
            I discovered the digital design after a few years and today I focus
            on people’s experience and usability of mobile apps, SaaS dashboards
            and websites, without leaving the visual aside.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Bio
