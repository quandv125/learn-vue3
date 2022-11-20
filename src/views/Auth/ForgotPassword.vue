<template>
  <auth-form title="Forgot Password" desc="Please sign-in to your account and start the adventure">
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
          </VCol>
          <VCol cols="12">
            <ButtonCustom block type="submit" label="Forgot Password" :loading="isSubmitting" />
          </VCol>
          <VCol cols="12" class="text-center text-base">
            <RouterLink class="text-primary ms-2" :to="{ name: 'loginPage' }"> Back to login </RouterLink>
          </VCol>
          <VCol cols="12" class="text-center">
            <RouterLink :to="{ name: 'resetPassword' }">
              <p class="mb-0 text-primary">Reset Password</p>
            </RouterLink>
          </VCol>
        </Form>
      </VCardText>
    </template>
  </auth-form>
</template>

<script setup lang="ts">
import AuthForm from '@/views/Auth/AuthForm.vue'

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
<style scoped>
.auth-wrapper {
  min-block-size: calc(var(--vh, 1vh) * 95);
}
.auth-footer-start-tree,
.auth-footer-end-tree {
  position: absolute;
  z-index: 1;
}
.auth-footer-start-tree {
  inset-block-end: 0;
  inset-inline-start: 0;
}
.auth-footer-end-tree {
  inset-block-end: 0;
  inset-inline-end: 0;
}
</style>
