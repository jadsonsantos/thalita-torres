import Link from 'next/link'
import styles from './NavBar.module.scss'
import { links } from './data'
import useNavBar from './useNavBar'

const NavBar = () => {
  const { isActiveLink } = useNavBar()

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {links.map(({ name, link }) => (
          <li key={name} className={styles.navbar__item}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
