import { topics } from './data.js'
import styles from '../../styles/Topics.module.scss'
import Image from 'next/image'

const Topics = () => (
  <section className={styles.topic}>
    <div className="container">
      <h2 className={styles.topic__heading}>Who I (really) am</h2>
      <ul className={styles.topic__list}>
        {topics.map(({ title, description }) => (
          <li className={styles.topic__item} key={title}>
            <Image
              src={`/icons/${title}.svg`}
              width="28"
              height="42"
              alt={title}
              className={styles.topic__icon}
            />
            <p className={styles.topic__description}>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Topics
