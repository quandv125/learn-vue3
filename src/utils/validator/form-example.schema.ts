import * as Yup from 'yup'
import { emailRegex, birthday2Regex } from '@/constants/common'

export const formComponentSampleSchema = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  email: Yup.string().email().required(),
  password: Yup.string().min(6, ' password must be at least 6 characters').required(),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
  status: Yup.string().required('message.hello'), // key of multi-language
  purposes: Yup.array()
    .of(Yup.string().required())
    .required('Purposes is a required field')
    .min(1, 'Purposes field must have at least 1 items')
    .max(2, 'Purposes field must have less than or equal to 2 items'),
})

export const ExampleSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().matches(emailRegex, 'email error message').required(),
  //email: Yup.string().required('Email is required').email('Email is invalid'),
  dob: Yup.string()
    .required('Date of Birth is required')
    .matches(birthday2Regex, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  acceptTerms: Yup.string().required('Accept Ts & Cs is required'),
})
