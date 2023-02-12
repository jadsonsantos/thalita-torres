import styles from '../styles/Input.module.scss'
import Label from './Label'

const TextArea = ({ id, label, setValue, ...props }) => {
  return (
    <>
      <Label label={label} id={id} />
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
