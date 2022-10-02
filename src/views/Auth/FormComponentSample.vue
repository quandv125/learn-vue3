<template>
  <div>
    <h1>Form Component Sample</h1>

    <RouterLink to="/">Back to home</RouterLink>

    <Form
      @submit="onSubmit"
      :validation-schema="formComponentSampleSchema"
      @invalid-submit="onInvalidSubmit"
      v-slot="{ errors, values }"
    >
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

      <SelectOptions name="status" :value="formValues.status" v-model="formValues.status" :options="PAYMENT_METHODS" />

      <Radio name="favorite" label="Coca" value="coca" v-model="formValues.favorite" />
      <Radio name="favorite" label="Tea" value="tea" v-model="formValues.favorite" />
      <Radio name="favorite" label="Coffee" value="coffee" v-model="formValues.favorite" />
      <br />

      <div>
        <Checkbox name="purposes" label="Travel" value="travel" v-model="formValues.purposes" />
        <Checkbox name="purposes" label="Movie" value="movie" v-model="formValues.purposes" />
        <Checkbox name="purposes" label="Football" value="football" v-model="formValues.purposes" />
        <p>{{ errors.purposes }}</p>
      </div>

      <ButtonCustom />
      <ErrorCustom />

      <pre>
        {{ values }}
      </pre>
    </Form>
  </div>
</template>
<!-- Script -->
<script setup lang="ts">
import { reactive } from 'vue'
import { Form } from 'vee-validate'
import { formComponentSampleSchema } from '@/utils/validator'
import { PAYMENT_METHODS } from '@/constants/resources'

// import { useRoute } from 'vue-router'
// const router = useRoute()

// data
const formValues = reactive({
  name: 'test',
  email: 'quandv@gmail.com',
  password: '123123123',
  confirm_password: '123123123',
  status: 'credit_card',
  favorite: 'tea',
  purposes: [],
})
// method
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
</script>
<!-- Style -->
<style>
form {
  width: 400px;
  margin: 0px auto;
  padding-bottom: 60px;
}
</style>
