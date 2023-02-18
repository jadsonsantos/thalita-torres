import NavBar from '../NavBar'
import logo from '../../public/icons/logo.svg'
import Image from 'next/image'
import styles from '../../styles/Header.module.scss'
import useHeader from './useHeader'
import classNames from 'classnames/bind'
import MenuButton from '../MenuButton'
import Link from 'next/link'

const Header = () => {
  let cx = classNames.bind(styles)
  const { isActive, handleClick } = useHeader()
  const customClass = cx({
    header: true,
    'header--active': isActive,
  })

  return (
    <header className={customClass}>
      <div className={`container ${styles.header__container}`}>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo do site da Thalita Torres"
            className={styles.header__logo}
          />
        </Link>
        <MenuButton isActive={isActive} handleClick={handleClick} />
        <NavBar isActive={isActive} />
      </div>
    </header>
  )
}

export default Header
