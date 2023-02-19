import styles from '../styles/Input.module.scss'
import Label from './Label'
import { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  const { id, label, ...otherProps } = props

  return (
    <>
      <Label id={id} label={label} />
      <input
        id={id}
        name={id}
        className={styles.input__field}
        ref={ref}
        {...otherProps}
      />
    </>
  )
})

export default Input
