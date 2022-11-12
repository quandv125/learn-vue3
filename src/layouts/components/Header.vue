<template>
  <VTextField
    rounded
    prepend-inner-icon="mdi-magnify"
    density="compact"
    max-width="100px"
    class="app-bar-search d-none d-sm-block"
  />

  <VSpacer />

  <VBtn icon variant="text" color="default" class="me-2" size="small">
    <VIcon icon="mdi-github" size="24" />
  </VBtn>
  <!-- <NavbarThemeSwitcher /> -->
  <VBtn icon variant="text" color="default" class="me-2" size="small">
    <VIcon icon="mdi-bell-outline" size="24" />
  </VBtn>
  <v-menu>
    <template #activator="{ props }">
      <v-btn color="primary" v-bind="props"> {{ i18n.global.locale.value }} </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
        @click="handleClick(locale)"
      >
        <v-list-item-title> {{ locale }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>

  <UserProfile />
</template>
<script lang="ts" setup>
import UserProfile from '@/layouts/components/UserProfile.vue'
import { i18n } from '@/locales'

const handleClick = (locale: string) => {
  localStorage.setItem('locale', locale)
  i18n.global.locale.value = locale
}
</script>
