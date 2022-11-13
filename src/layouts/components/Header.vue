<template>
  <VTextField rounded prepend-inner-icon="mdi-magnify" density="compact" class="app-bar-search d-none d-sm-block" />

  <VSpacer />

  <Notification />

  <Language />

  <UserProfile />
</template>
<script lang="ts" setup>
import Notification from '@/layouts/components/HeaderNotification.vue'
import Language from '@/layouts/components/HeaderLanguage.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
</script>
