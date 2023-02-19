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

  return { nameValidator, emailValidator, messageValidator }
}

export default useForm
