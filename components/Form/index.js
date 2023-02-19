import styles from './Form.module.scss'
import Input from '../Input'
import { useRef } from 'react'
import TextArea from '../TextArea'
import Radio from '../Radio'
import Label from '../Label'
import { useForm } from 'react-hook-form'
import useContactForm from './useForm'

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const ref = useRef(null)
  const { nameValidator, emailValidator, messageValidator } = useContactForm()

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <section className={styles.form}>
      <div className="container">
        <form className="" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Input
            label="How do you like to be called?"
            placeholder="Please insert your name here"
            id="name"
            type="text"
            errors={errors.name}
            ref={ref}
            {...register('name', nameValidator)}
          />
          <Input
            label="What's your best e-mail?"
            placeholder="Please insert your e-mail here"
            id="email"
            type="email"
            errors={errors.email}
            errorMessage="Please enter a valid email address"
            {...register('email', emailValidator)}
          />
          <Input
            label="What's your company?"
            placeholder="Please insert your company here"
            id="company"
            type="text"
            {...register('company')}
          />
          <Label label="What do you need?" />
          <Radio
            options={[
              'Mobile App',
              'Saas Dashboard',
              'Website',
              'I’m not sure yet',
              'Other',
            ]}
            {...register('project')}
          />
          <Input
            placeholder="If other, please insert your need here"
            id="specificProject"
            type="text"
            {...register('specificProject')}
          />
          <Input
            label="How did you find me?"
            placeholder="Google? Dribbble? Referral?"
            id="source"
            type="text"
            {...register('source')}
          />
          <TextArea
            label="Tell me about your project"
            placeholder="To help me understand a little bit more of your needs, and then I'll get in touch with you."
            type="text"
            id="message"
            rows="3"
            errors={errors.message}
            errorMessage="Please enter a message"
            {...register('message', messageValidator)}
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
