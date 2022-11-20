<template>
  <auth-form title="Reset Password" desc="Please sign-in to your account and start the adventure">
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
              name="email"
              type="text"
              label="Email"
              :value="'quandv.125@gmail.com'"
              :disabled="true"
              autocomplete="password"
              placeholder="Your password"
            />

            <TextInput
              name="password"
              type="password"
              label="Password"
              :value="formValues.password"
              autocomplete="password"
              placeholder="Your password"
            />

            <TextInput
              name="password_confirmation"
              type="password"
              label="Password Confirmation"
              :value="formValues.password_confirmation"
              autocomplete="password"
              placeholder="Your password"
            />

            <ButtonCustom block type="submit" label="Reset Password" :loading="isSubmitting" />
          </VCol>
          <VCol cols="12" class="text-center text-base">
            <RouterLink class="text-primary ms-2" :to="{ name: 'loginPage' }"> Back to login </RouterLink>
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

// data
const formValues = reactive({
  username: 'quandv.125@gmail.com',
  password: 'abc12345@',
  password_confirmation: 'abc12345@',
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
