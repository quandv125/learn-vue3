<template>
  <div>
    <h1>Form Component Sample</h1>
    <Form @submit="onSubmit" :validation-schema="schema" @invalid-submit="onInvalidSubmit">
      <TextInput
        name="name"
        type="text"
        label="Full Name"
        placeholder="Your Name"
        success-message="Nice to meet you!"
      />
      <TextInput
        name="email"
        type="email"
        label="E-mail"
        :value="formValues.email"
        placeholder="Your email address"
        success-message="Got it, we won't spam you!"
      />
      <TextInput
        name="password"
        type="password"
        label="Password"
        :value="formValues.password"
        autocomplete="password"
        placeholder="Your password"
        success-message="Nice and secure!"
      />
      <TextInput
        name="confirm_password"
        type="password"
        label="Confirm Password"
        autocomplete="confirm_password"
        placeholder="Type it again"
        success-message="Glad you remembered it!"
      />

      <Button />
    </Form>
  </div>
</template>
<!-- Script -->
<script setup lang="ts">
import { Form } from 'vee-validate'
import * as Yup from 'yup'
import TextInput from '@/components/Common/FormInput/TextInput.vue'
import Button from '@/components/Common/FormInput/Button.vue'

const onSubmit = (values: any) => {
  alert(JSON.stringify(values, null, 2))
}

const onInvalidSubmit = () => {
  const submitBtn: any = document.querySelector('.submit-btn')
  submitBtn.classList.add('invalid')
  setTimeout(() => {
    submitBtn.classList.remove('invalid')
  }, 1000)
}

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required!'),
  email: Yup.string().email().required(),
  password: Yup.string().min(6, ' password must be at least 6 characters').required(),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
})

const formValues = {
  name: '',
  email: '',
  password: '',
  confirm_password: '',
}
</script>
<!-- Style -->
<style>
form {
  width: 300px;
  margin: 0px auto;
  padding-bottom: 60px;
}
</style>
