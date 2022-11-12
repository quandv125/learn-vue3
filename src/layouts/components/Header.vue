<template>
  <VTextField
    rounded
    prepend-inner-icon="mdi-magnify"
    density="compact"
    max-width="100px"
    class="app-bar-search d-none d-sm-block"
  />

  <VSpacer />

  <a
    href="https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free"
    target="_blank"
    rel="noopener noreferrer"
    style="color: inherit"
  >
    <VIcon class="ms-6 me-4" icon="mdi-github" />
  </a>
  <!-- <NavbarThemeSwitcher /> -->
  <VBtn icon variant="text" color="default" class="me-2" size="small">
    <VIcon icon="mdi-bell-outline" size="24" />
  </VBtn>

  <UserProfile />
</template>
<script lang="ts" setup>
import UserProfile from '@/layouts/components/UserProfile.vue'
</script>
