import Image from 'next/image'
import useDeviceDetect from '../utils/useDeviceDetect'
import styles from '../styles/Illustration.module.scss'

const Illustration = ({ mobileIllustration, desktopIllustration }) => {
  const { isMobile } = useDeviceDetect()

  return (
    <section className={styles.illustration}>
      <Image
        className={styles.illustration__image}
        src={isMobile ? mobileIllustration : desktopIllustration}
        alt="Ilustração"
      />
    </section>
  )
}

export default Illustration
