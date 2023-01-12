import Image from 'next/image'
import DesktopIllustration from '../public/images/illustration-desktop.png'
import MobileIllustration from '../public/images/illustration-mobile.png'
import isMobile from '../utils/isMobile'
import styles from '../styles/Illustration.module.scss'

const Illustration = () => (
  <section className={styles.illustration}>
    <Image
      className={styles.illustration__image}
      src={isMobile() ? MobileIllustration : DesktopIllustration}
      alt="Ilustração"
    />
  </section>
)

export default Illustration
