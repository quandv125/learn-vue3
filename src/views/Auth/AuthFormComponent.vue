<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard class="auth-card pa-4 pt-7" width="500">
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <img :src="logo" />
          </div>
        </template>
        <VCardTitle class="font-weight-semibold text-2xl text-uppercase"> {{ props.title }} </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2 text-center">
        <p class="mb-0">{{ props.desc }}</p>
      </VCardText>

      <slot name="main"></slot>
    </VCard>

    <VImg :src="authV1Tree" :width="250" class="auth-footer-start-tree d-none d-md-block" />
    <VImg :src="authV1Tree2" :width="350" class="auth-footer-end-tree d-none d-md-block" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import logo from '@/assets/images/logos/aviato.png'
import authV1Tree2 from '@/assets/images/pages/auth-v1-tree-2.png'
import authV1Tree from '@/assets/images/pages/auth-v1-tree.png'

const props = defineProps({
  title: {
    type: String,
    default: 'My Theme',
  },
  desc: {
    type: String,
    default: 'Please sign-in to your account and start the adventure',
  },
})
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
