import emailjs from 'emailjs-com'

const useForm = () => {
  const nameValidator = {
    required: { value: true, message: 'Please enter your name' },
    maxLength: {
      value: 30,
      message: 'Please use 30 characters or less',
    },
  }

  const emailValidator = {
    required: true,
    pattern:
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  }

  const messageValidator = {
    required: true,
  }

  const onSubmit = async (data) => {
    const { name, email, company, project, specificProject, source, message } =
      data

    try {
      const templateParams = {
        name,
        email,
        company,
        project,
        specificProject,
        source,
        message,
      }

      await emailjs.send(
        'service_6jm3g1j',
        'template_jzzd5ll',
        templateParams,
        '8GESXPaRiyLj6AqPc'
      )

      // reset()
      alert('mensagem enviada')
    } catch (e) {
      console.error(e)
    }
  }

  return { nameValidator, emailValidator, messageValidator, onSubmit }
}

export default useForm
