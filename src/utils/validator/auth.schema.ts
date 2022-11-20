import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  username: Yup.string().email().required('Username is required'),
  password: Yup.string().required('Password is required').min(8),
})

export const registerSchema = Yup.object().shape({
  username: Yup.string().email().required('Username is required'),
  password: Yup.string().required('Password is required').min(8),
})

export const forgotPasswordSchema = Yup.object().shape({
  username: Yup.string().email().required('Username is required'),
  password: Yup.string().required('Password is required').min(8),
})

export const resetPasswordSchema = Yup.object().shape({
  username: Yup.string().email().required('Username is required'),
  password: Yup.string().required('Password is required').min(8),
  password_confirmation: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
})
