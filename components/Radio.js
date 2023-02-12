import styles from '../styles/Radio.module.scss'

const Radio = ({ options, value, setValue, ...props }) => {
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
            type="radio"
            value={option}
            checked={option === value}
            onChange={({ target }) => setValue(target.value)}
            className={styles.input__field}
            {...props}
          />
          {option}
        </label>
      ))}
    </>
  )
}

export default Radio
