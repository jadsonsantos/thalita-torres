import Image from 'next/image'
import styles from '../../styles/Gallery.module.scss'
import galleryDesktop from '../../public/images/gallery-desktop.png'
import galleryMobile from '../../public/images/gallery-mobile.png'
import useDeviceDetect from '../../utils/useDeviceDetect'

const Gallery = () => {
  const { isMobile } = useDeviceDetect()

  return (
    <section className={styles.gallery}>
      <Image
        src={isMobile ? galleryMobile : galleryDesktop}
        alt="Galeria de imagens"
      />
    </section>
  )
}

export default Gallery
