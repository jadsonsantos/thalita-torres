import classNames from 'classnames'
import styles from '../styles/MenuButton.module.scss'

const CLASS_NAME = 'hamburguer-button'
const MenuButton = ({ isActive, handleClick }) => (
  <button
  // className={classNames('hamburger-button', {
  //   'hamburger-button--active': isActive,
  // })}
  // onClick={() => handleClick()}
  >
    <div className="hamburger-button__icon">
      <div className="hamburger-button__line"></div>
    </div>
  </button>
)

export default MenuButton
