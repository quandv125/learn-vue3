<template>
  <div>
    <h1>Form Component Sample</h1>

    <RouterLink to="/">Back to home</RouterLink>

    <Form @submit="onSubmit" :validation-schema="formComponentSampleSchema" @invalid-submit="onInvalidSubmit">
      <TextInput
        name="name"
        type="text"
        label="Full Name"
        :value="formValues.name"
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
        :value="formValues.password"
        autocomplete="confirm_password"
        placeholder="Type it again"
        success-message="Glad you remembered it!"
      />

      <SelectOptions name="status" :value="formValues.status" :options="PAYMENT_METHODS" />

      <ButtonCustom />
      <ErrorCustom />
    </Form>
  </div>
</template>
<!-- Script -->
<script setup lang="ts">
import { Form } from 'vee-validate'
import { formComponentSampleSchema } from '@/utils/validator'

const PAYMENT_METHODS = [
  { value: '', text: 'Null' },
  { value: 'cash', text: 'cash' },
  { value: 'bank_transfer', text: 'bank_transfer' },
  { value: 'bank_withdraw', text: 'bank_withdraw' },
  { value: 'credit_card', text: 'credit_card' },
  { value: 'combini_payment', text: 'combini_payment' },
]

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

const formValues = {
  name: 'test',
  email: 'quandv@gmail.com',
  password: '123123123',
  confirm_password: '123123123',
  status: '',
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
