import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Cases.module.scss'
import Text from '../Text'
import { cases } from './data.js'

const Cases = () => (
  <section className={styles.cases}>
    <div className="container">
      <ul className={styles.cases__list}>
        {cases.map(({ icon, title, name, color }) => (
          <li className={styles.cases__item} key={title}>
            <Link href="">
              <div
                className={styles.cases__card}
                style={{ backgroundColor: color }}
              >
                <Image
                  className={styles.cases__image}
                  src={`/images/${name}-desktop.svg`}
                  alt={title}
                  priority
                  width={672}
                  height={672}
                />
              </div>
              <p className={`${styles.cases__title} paragraph`}>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Cases
