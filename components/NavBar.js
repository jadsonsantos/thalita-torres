import Link from 'next/link'
import styles from '../styles/NavBar.module.scss'

const data = [
  { name: 'Home', link: '/' },
  { name: 'Work', link: '/work' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' },
]

const NavBar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.navbar__list}>
      {data.map(({ name, link }) => (
        <li key={name} className={styles.navbar__item}>
          <Link href={link}>{name}</Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default NavBar
