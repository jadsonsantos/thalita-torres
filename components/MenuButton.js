import classNames from 'classnames/bind'
import Image from 'next/image'
import styles from '../styles/MenuButton.module.scss'
import hamburguerIcon from '../public/icons/hamburguer.svg'
import closeIcon from '../public/icons/close.svg'

const MenuButton = ({ isActive, handleClick }) => {
  let cx = classNames.bind(styles)
  const customClass = cx({
    ['hamburguer-button']: true,
    ['hamburguer-button--active']: isActive,
  })
  const currentIcon = isActive ? closeIcon : hamburguerIcon

  return (
    <button className={customClass} onClick={() => handleClick()}>
      <Image src={currentIcon} alt="Menu hamburguer" />
    </button>
  )
}

export default MenuButton
