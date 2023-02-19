import styles from './ErrorMessage.module.scss'
import classNames from 'classnames/bind'

const ErrorMessage = ({
  errors = null,
  errorMessage = '',
  isCustom = false,
}) => {
  let cx = classNames.bind(styles)
  const customClass = cx({
    ['error-message']: true,
    ['error-message--custom']: isCustom,
  })
  const hasError = errors

  const result = hasError ? (
    <span className={customClass}>{errors?.message || errorMessage}</span>
  ) : (
    ''
  )
  return result
}

export default ErrorMessage
