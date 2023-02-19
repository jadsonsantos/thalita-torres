import styles from '../styles/Input.module.scss'
import Label from './Label'
import { forwardRef } from 'react'
import classNames from 'classnames/bind'
import ErrorMessage from './ErrorMessage'

const Input = forwardRef((props, ref) => {
  const { id, label, errors, errorMessage, ...otherProps } = props
  let cx = classNames.bind(styles)
  const customClass = cx({
    input__field: true,
    'input__field--error': errors,
  })

  return (
    <div className={styles.input}>
      <Label id={id} label={label} />
      <input
        id={id}
        name={id}
        className={customClass}
        ref={ref}
        {...otherProps}
      />
      <ErrorMessage errors={errors} errorMessage={errorMessage} />
    </div>
  )
})

export default Input
