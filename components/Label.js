import styles from '../styles/Label.module.scss'

const Label = ({ id, label }) => {
  return (
    <label htmlFor={id} className={`${styles.label}`}>
      {label}
    </label>
  )
}

export default Label
