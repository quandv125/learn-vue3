<script setup lang="ts">
import { Form } from 'vee-validate'
import * as Yup from 'yup'
import TextInput from '@/components/Common/FormInput/TextInput.vue'

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
  name: 'quan',
  email: 'quan@example.com',
  password: '123123',
  confirm_password: '123123',
}
</script>

<template>
  <div>
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
        placeholder="Your password"
        success-message="Nice and secure!"
      />
      <TextInput
        name="confirm_password"
        type="password"
        label="Confirm Password"
        placeholder="Type it again"
        success-message="Glad you remembered it!"
      />

      <button class="submit-btn" type="submit">Submit</button>
    </Form>
  </div>
</template>

<style>
:root {
  --primary-color: #0071fe;
  --error-color: #f23648;
  --error-bg-color: #fddfe2;
  --success-color: #21a67a;
  --success-bg-color: #e0eee4;
}

form {
  width: 300px;
  margin: 0px auto;
  padding-bottom: 60px;
}

.submit-btn {
  background: var(--primary-color);
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  padding: 10px 15px;
  display: block;
  width: 100%;
  border-radius: 7px;
  margin-top: 40px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.submit-btn.invalid {
  animation: shake 0.5s;
  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px);
  }
  10% {
    transform: translate(-1px, -2px);
  }
  20% {
    transform: translate(-3px, 0px);
  }
  30% {
    transform: translate(3px, 2px);
  }
  40% {
    transform: translate(1px, -1px);
  }
  50% {
    transform: translate(-1px, 2px);
  }
  60% {
    transform: translate(-3px, 1px);
  }
  70% {
    transform: translate(3px, 1px);
  }
  80% {
    transform: translate(-1px, -1px);
  }
  90% {
    transform: translate(1px, 2px);
  }
  100% {
    transform: translate(1px, -2px);
  }
}

.submit-btn:hover {
  transform: scale(1.1);
}
</style>
