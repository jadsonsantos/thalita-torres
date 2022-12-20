import Image from 'next/image'
import DesktopIllustration from '../public/images/illustration-desktop.png'
// import MobileIllustration from '../public/images/illustration-mobile.png'

import styles from '../styles/Illustration.module.scss'

const Illustration = () => (
  <section className={styles.illustration}>
    <Image
      className={styles.illustration__image}
      src={DesktopIllustration}
      alt="Ilustração"
      priority
    />
  </section>
)

export default Illustration
