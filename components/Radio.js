import styles from '../styles/Radio.module.scss'
import { forwardRef } from 'react'

const Radio = forwardRef((props, ref) => {
  const { options, ...otherProps } = props

  return (
    <>
      {options.map((option) => (
        <label
          key={option}
          htmlFor={option}
          className={`${styles.input__label}`}
        >
          <input
            id={option}
            name={option}
            value={option}
            type="radio"
            className={styles.input__field}
            ref={ref}
            {...otherProps}
          />
          {option}
        </label>
      ))}
    </>
  )
})

export default Radio
