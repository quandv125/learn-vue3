<template>
  <div>
    <h1>Form Component Sample</h1>

    <RouterLink to="/">Back to home</RouterLink>

    <Form
      @submit="onSubmit"
      :validation-schema="formComponentSampleSchema"
      :initial-values="formValues"
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
      <div>
        <Radio name="favorite" label="Coffee" v-model="formValues.favorite" value="coffee"  />
        <Radio name="favorite" label="Coca" v-model="formValues.favorite" value="coca"  />
        <Radio name="favorite" label="Tea" v-model="formValues.favorite" value="tea"  />
        {{ errors.favorite }}
      </div>
      <br />

      <div>
        <Checkbox name="purposes" label="Travel"  v-model="formValues.purposes" value="travel" />
        <Checkbox name="purposes" label="Movie"  v-model="formValues.purposes" value="movie" />
        <Checkbox name="purposes" label="Football"  v-model="formValues.purposes" value="football" />
        <p>{{ errors.purposes }}</p>
      </div>

      <ButtonCustom />
      <ErrorCustom />

      <pre> {{ values }} </pre>
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
  name: 'test123',
  email: 'quandv@gmail.com',
  password: '123123123',
  confirm_password: '123123123',
  status: 'credit_card',
  favorite: 'coca',
  purposes: ['movie', 'football'],
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
