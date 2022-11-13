<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn color="primary" v-bind="props"> {{ i18n.global.locale.value }} </v-btn>
    </template>
    <v-list class="language">
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
</template>

<script lang="ts" setup>
import { i18n } from '@/locales'
const handleClick = (locale: string) => {
  localStorage.setItem('locale', locale)
  i18n.global.locale.value = locale
}
</script>

<style scoped>
.language {
  min-width: 100px;
}
</style>
