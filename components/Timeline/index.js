import { experience, education } from './data.js'
import styles from '../../styles/Timeline.module.scss'

const Timeline = () => (
  <section className={styles.timeline}>
    <div className={`${styles.container} container`}>
      <div className={styles.timeline__block}>
        <h2 className={styles.timeline__heading}>Experience</h2>
        <ul className={styles.timeline__list}>
          {experience.map(({ title, description }) => (
            <li className={styles.timeline__item} key={title}>
              <strong>{title}</strong>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.timeline__block}>
        <h2 className={styles.timeline__heading}>Education</h2>
        <ul className={styles.timeline__list}>
          {education.map(({ title, description }) => (
            <li className={styles.timeline__item} key={title}>
              <strong>{title}</strong>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default Timeline
