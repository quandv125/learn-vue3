<template>
  <auth-form title="Login" desc="Please sign-in to your account and start the adventure">
    <template #main>
      <VCardText>
        <Form
          @submit="onSubmit"
          :validation-schema="loginSchema"
          :initial-values="formValues"
          v-slot="{ isSubmitting }"
        >
          <VCol cols="12">
            <TextInput
              name="username"
              type="text"
              label="E-mail"
              :value="formValues.username"
              placeholder="Your email address"
            />

            <TextInput
              name="password"
              type="password"
              label="Password"
              :value="formValues.password"
              autocomplete="password"
              placeholder="Your password"
            />

            <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
              <VCheckbox label="Remember me" />

              <RouterLink :to="{ name: 'forgotPassword' }" class="ms-2 mb-1 text-primary">
                Forgot Password?
              </RouterLink>
            </div>
            <ButtonCustom block type="submit" label="Login" :loading="isSubmitting" />
          </VCol>

          <VCol cols="12" class="text-center text-base">
            <span>New on our platform?</span>
            <RouterLink class="text-primary ms-2" :to="{ name: 'register' }"> Create an account </RouterLink>
          </VCol>
        </Form>
      </VCardText>
    </template>
  </auth-form>
</template>

<script setup lang="ts">
import AuthForm from '@/views/Auth/AuthFormComponent.vue'

import { reactive } from 'vue'
import { Form } from 'vee-validate'
import { loginSchema } from '@/utils/validator'
import { useAuthStore } from '@/stores'
import type { LoginType } from '@/types'

// data
const formValues: LoginType = reactive({
  username: 'quandv.125@gmail.com',
  password: 'abc12345@',
})
// method
const onSubmit = async (values: any) => {
  const authStore = useAuthStore()
  const { username, password } = values
  return await authStore.login(username, password)
}
</script>
