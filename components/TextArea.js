import styles from '../styles/Input.module.scss'

const TextArea = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id} className={`${styles.input__label}`}>
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        className={styles.input__field}
        {...props}
      ></textarea>
    </>
  )
}

export default TextArea
