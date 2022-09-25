<template>
  <div>
    <pre>{{ errors }}</pre>

    <form @submit.prevent="onHandleSubmit">
      <TextInput
        name="username"
        type="text"
        label="Full Name"
        placeholder="Your Email"
        success-message="Nice to meet you!"
      />
      <TextInput
        name="password"
        type="text"
        label="password"
        placeholder="Your Password"
        success-message="Nice to meet you!"
      />
      <button :class="`submit-btn ${submitClass}`" type="submit">Submit</button>
    </form>
  </div>
</template>
<!-- Script -->
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useForm } from 'vee-validate'
import TextInput from '@/components/Common/FormInput/TextInput.vue'
import { loginSchema } from '@/utils/validator'

const submitClass = ref('')
const initValue = reactive({
  username: 'quan.duong@tda.company',
  password: '',
}) as { username: string; password: string }

const { handleSubmit, errors } = useForm({
  validationSchema: loginSchema,
  initialValues: initValue,
})

const onHandleSubmit = handleSubmit(values => {
  console.log(values)
}, onInvalidSubmit)

function onInvalidSubmit() {
  // Ex: function onInvalidSubmit({ values, errors, results }) {
  //   console.log(values) // current form values
  //   console.log(errors) // a map of field names and their first error message
  //   console.log(results) // a detailed map of field names and their validation results
  submitClass.value = 'invalid'
  setTimeout(() => {
    submitClass.value = ''
  }, 1000)
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
