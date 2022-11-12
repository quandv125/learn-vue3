<!-- eslint-disable vue/no-v-model-argument -->
<template>
  <div class="nav-header">
    <RouterLink to="/" class="app-logo d-flex align-center gap-x-3 app-title-wrapper">
      <img :src="logo" />

      <Transition name="vertical-nav-app-title">
        <h1 class="font-weight-semibold leading-normal text-xl text-uppercase">Vue</h1>
      </Transition>
    </RouterLink>
  </div>
  <v-list v-model:opened="open" shaped>
    <v-list-item prepend-icon="mdi-home" title="Home" :to="{ name: 'homePage' }" rounded="shaped"></v-list-item>
    <v-list-item
      prepend-icon="mdi-ceiling-light"
      title="About"
      :to="{ name: 'aboutPage' }"
      rounded="shaped"
    ></v-list-item>
    <v-list-item
      prepend-icon="mdi-chart-pie"
      title="Service"
      :to="{ name: 'servicePage' }"
      rounded="shaped"
    ></v-list-item>

    <v-list-group value="Product">
      <template #activator="{ props }">
        <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Product" rounded="shaped"></v-list-item>
      </template>

      <v-list-item
        v-for="(item, i) in products"
        :key="i"
        :title="item.text"
        :prepend-icon="item.icon"
        :value="item.text"
        :to="item.to"
        rounded="shaped"
      ></v-list-item>
    </v-list-group>

    <v-list-group value="Admin">
      <template #activator="{ props }">
        <v-list-item v-bind="props" prepend-icon="mdi-home" title="Admin" rounded="shaped"></v-list-item>
      </template>

      <v-list-item
        v-for="(item, i) in admins"
        :key="i"
        :title="item.text"
        :prepend-icon="item.icon"
        :value="item.text"
        rounded="shaped"
      ></v-list-item>
    </v-list-group>
  </v-list>
</template>

<script setup lang="ts">
import logo from '@/assets/images/logos/aviato.png'

import { ref } from 'vue'

const open: any = ref(['Product'])

const products: any = ref([
  { text: 'Real-Time', icon: 'mdi-clock', to: { name: 'formPage', params: { id: 123 }, query: { name: 'Quan' } } },
  { text: 'Audience', icon: 'mdi-account', to: { name: 'register' } },
  { text: 'Conversions', icon: 'mdi-flag', to: 'service' },
])
const admins: any = ref([
  { text: 'Menu 1', icon: 'mdi-chevron-right' },
  { text: 'Menu 2', icon: 'mdi-chevron-right' },
  { text: 'Menu 3', icon: 'mdi-chevron-right' },
])
</script>
<style scoped>
.rounded-shaped {
  border-bottom-left-radius: 0px !important;
  border-top-left-radius: 0px !important;

  border-bottom-right-radius: 32px !important;
  border-top-right-radius: 32px !important;
}

.v-list-group {
  --list-indent-size: 16px;
  --prepend-width: 0px;
}
</style>
