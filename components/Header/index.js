import NavBar from '../NavBar'
import logo from '../../public/icons/logo.svg'
import Image from 'next/image'
import styles from '../../styles/Header.module.scss'
import useHeader from './useHeader'
import classNames from 'classnames'
import MenuButton from '../MenuButton'

const Header = () => {
  const { isActive, setActive, handleClick } = useHeader()

  return (
    <header
      className={classNames(styles.header, {
        'header--active': isActive,
      })}
    >
      <div className={`container ${styles.header__container}`}>
        <Image src={logo} alt="logo" className={styles.header__logo} />
        <MenuButton />
        <NavBar />
      </div>
    </header>
  )
}

export default Header
