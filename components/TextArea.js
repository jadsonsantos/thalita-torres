import styles from '../styles/Input.module.scss'
import Label from './Label'
import { forwardRef } from 'react'

const TextArea = forwardRef((props, ref) => {
  const { id, label, ...otherProps } = props

  return (
    <>
      <Label label={label} id={id} />
      <textarea
        id={id}
        name={id}
        className={styles.input__field}
        ref={ref}
        {...otherProps}
      ></textarea>
    </>
  )
})

export default TextArea
