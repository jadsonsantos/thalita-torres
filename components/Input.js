import styles from '../styles/Input.module.scss'
import Label from './Label'

const Input = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <Label id={id} label={label} />
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
