import Image from 'next/image'
import { data } from './data'
import styles from '../../styles/Gallery.module.scss'

const Gallery = () => (
  <section className={styles.gallery}>
    <ul className={styles.gallery__list}>
      {data.map(({ alt }, index) => (
        <li key={alt} className={styles.gallery__item}>
          <Image
            src={`/images/about-${index + 1}.png`}
            alt={alt}
            width={460}
            height={460}
          />
        </li>
      ))}
    </ul>
  </section>
)

export default Gallery
