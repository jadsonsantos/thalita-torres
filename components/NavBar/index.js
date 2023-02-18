import Link from 'next/link'
import styles from './NavBar.module.scss'
import { links } from './data'
import useNavBar from './useNavBar'
import classNames from 'classnames/bind'

const NavBar = ({ isActive }) => {
  const { isActiveLink } = useNavBar()
  let cx = classNames.bind(styles)
  const customClass = cx({
    navbar: true,
    'navbar--active': isActive,
  })

  return (
    <nav className={customClass}>
      <ul className={styles.navbar__list}>
        {links.map(({ name, link }) => {
          const customClass = cx({
            navbar__item: true,
            'navbar__item--active': isActiveLink(link),
          })

          return (
            <li key={name} className={customClass}>
              <Link className={styles.navbar__link} href={link}>
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar
