import styles from '../../styles/Services.module.scss'
import { services } from './data.js'
import Image from 'next/image'

const Services = () => (
  <section className={styles.services}>
    <div className="container">
      <h2 className={styles.services__heading}>
        What do I (really like to) do
      </h2>
      <ul className={styles.services__list}>
        {services.map(({ name, title, description }) => (
          <li className={styles.services__item} key={title}>
            <Image
              src={`/icons/${name}.svg`}
              alt={`${name} logo`}
              className={styles.services__logo}
              width={64}
              height={64}
            />
            <p className={styles.services__title}>{title}</p>
            <p className={styles.services__description}>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Services
