import styles from '../styles/Input.module.scss'
import Label from './Label'
import { forwardRef } from 'react'
import ErrorMessage from './ErrorMessage'
import classNames from 'classnames/bind'

const TextArea = forwardRef((props, ref) => {
  const { id, label, errors, errorMessage, ...otherProps } = props
  let cx = classNames.bind(styles)
  const customClass = cx({
    input__field: true,
    'input__field--error': errors,
  })

  return (
    <div className={styles.input}>
      <Label label={label} id={id} />
      <textarea
        id={id}
        name={id}
        className={customClass}
        ref={ref}
        {...otherProps}
      ></textarea>
      <ErrorMessage errors={errors} errorMessage={errorMessage} />
    </div>
  )
})

export default TextArea
