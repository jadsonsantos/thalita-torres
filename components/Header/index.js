import NavBar from '../NavBar'
import logo from '../../public/icons/logo.svg'
import Image from 'next/image'
import styles from '../../styles/Header.module.scss'
import useHeader from './useHeader'
import classNames from 'classnames'
import MenuButton from '../MenuButton'
import Link from 'next/link'

const Header = () => {
  const { isActive, setActive, handleClick } = useHeader()

  return (
    <header
      className={classNames(styles.header, {
        'header--active': isActive,
      })}
    >
      <div className={`container ${styles.header__container}`}>
        <Link href="/">
          <Image
            src={logo}
            alt="Logo do site da Thalita Torres"
            className={styles.header__logo}
          />
        </Link>
        <MenuButton />
        <NavBar />
      </div>
    </header>
  )
}

export default Header
