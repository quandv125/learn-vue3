<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard class="auth-card pa-4 pt-7" max-width="448">
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <img :src="logo" />
          </div>
        </template>
        <VCardTitle class="font-weight-semibold text-2xl text-uppercase"> My Theme </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <p class="mb-0">Please sign-in to your account and start the adventure</p>
      </VCardText>

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

              <a class="ms-2 mb-1" href="javascript:void(0)"> Forgot Password? </a>
            </div>
            <ButtonCustom block type="submit" label="Login" :loading="isSubmitting" />
          </VCol>
        </Form>
      </VCardText>
    </VCard>

    <VImg :src="authV1Tree" :width="250" class="auth-footer-start-tree d-none d-md-block" />
    <VImg :src="authV1Tree2" :width="350" class="auth-footer-end-tree d-none d-md-block" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { Form } from 'vee-validate'
import { loginSchema } from '@/utils/validator'
import { useAuthStore } from '@/stores'
import type { LoginType } from '@/types'
import logo from '@/assets/images/logos/aviato.png'
import authV1Tree2 from '@/assets/images/pages/auth-v1-tree-2.png'
import authV1Tree from '@/assets/images/pages/auth-v1-tree.png'

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
