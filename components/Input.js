import styles from '../styles/Input.module.scss'

const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id} className={`${styles.input__label}`}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        className={styles.input__field}
        {...props}
      />
    </>
  )
}

export default Input
