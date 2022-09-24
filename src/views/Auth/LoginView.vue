<template>
  <div>
    <div class="alert alert-info">
      <p>
        {{ $t('sign_in.messages.none_account', { value: 'This is an example of content translation' }) }}
      </p>
      {{ $t('sign_in.input_text.username') }}: test<br />
      {{ $t('sign_in.input_text.password') }}: test
    </div>
    <h2>{{ $t('sign_in.title') }}</h2>
    <Form @submit="onHandleSubmit" :validation-schema="loginSchema" v-slot="{ errors, isSubmitting }">
      <div class="form-group">
        <label> {{ $t('sign_in.input_text.username') }} </label>
        <Field
          name="username"
          type="text"
          class="form-control"
          v-model="form.username"
          :class="{ 'is-invalid': errors.username }"
        />
        <div class="invalid-feedback">{{ errors.username }}</div>
      </div>
      <div class="form-group">
        <label>{{ $t('sign_in.input_text.password') }}</label>
        <Field
          name="password"
          type="password"
          class="form-control"
          autocomplete="on"
          v-model="form.password"
          :class="{ 'is-invalid': errors.password }"
        />
        <div class="invalid-feedback">{{ errors.password }}</div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" :disabled="isSubmitting">
          <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
          {{ $t('sign_in.title') }}
        </button>
      </div>
      <div v-if="errors.apiError" class="alert alert-danger mt-3 mb-0">
        {{ errors.apiError }}
      </div>
    </Form>
    <h1 v-if="authUser">Hi {{ authUser.username }}!</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { Form, Field } from 'vee-validate'
import { loginSchema } from '@/utils/validator'
import { useAuthStore } from '@/utils/stores'
import type { LoginType } from '@/utils/types'

const form: LoginType = reactive({ username: 'quandv.125@gmail.com', password: 'abc12345@' })

const authStore = useAuthStore()

const { user: authUser } = storeToRefs(authStore)

const onHandleSubmit = async (values: any, { setErrors }: any) => {
  const authStore = useAuthStore()
  const { username, password } = values
  return await authStore.login(username, password).catch(error => setErrors({ apiError: error }))
}

onMounted(() => {
  console.log(import.meta.env.VITE_APP_NAME)
  console.log('Component is mounted!', authStore.user)
})
</script>
