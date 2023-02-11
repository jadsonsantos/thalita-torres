import styles from '../styles/Form.module.scss'
import Input from './Input'
import { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [source, setSource] = useState('')

  return (
    <section className={styles.form}>
      <div className="container">
        <form className="">
          <Input
            label="How do you like to be called?"
            placeholder="Please insert your name here"
            id="name"
            type="text"
            value={name}
            setValue={setName}
          />
          <Input
            label="What's your best e-mail?"
            placeholder="Please insert your e-mail here"
            id="email"
            type="text"
            value={email}
            setValue={setEmail}
          />
          <Input
            label="What's your company?"
            placeholder="Please insert your company here"
            id="company"
            type="text"
            value={company}
            setValue={setCompany}
          />
          <Input
            label="How did you find me?"
            placeholder="Google? Dribbble? Referral?"
            id="source"
            type="text"
            value={source}
            setValue={setSource}
          />
          <button className={styles.form__submit} type="submit">
            Let's do this!
          </button>
        </form>
      </div>
    </section>
  )
}

export default Form
