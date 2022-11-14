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
  <perfect-scrollbar>
    <v-list class="nav-menu" v-model:opened="open" shaped>
      <v-list-item
        prepend-icon="mdi-home"
        :title="$t('menu.home')"
        :to="{ name: 'homePage' }"
        rounded="shaped"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-ceiling-light"
        :title="$t('menu.about')"
        :to="{ name: 'aboutPage' }"
        rounded="shaped"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-chart-pie"
        :title="$t('menu.service')"
        :to="{ name: 'servicePage' }"
        rounded="shaped"
      ></v-list-item>

      <v-list-group value="Product">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            :title="$t('menu.products.title')"
            rounded="shaped"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="(item, i) in products"
          :key="i"
          :title="$t(item.text)"
          :prepend-icon="item.icon"
          :value="item.text"
          :to="item.to"
          rounded="shaped"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="Admin">
        <template #activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-home" :title="$t('menu.admins')" rounded="shaped"></v-list-item>
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
   </perfect-scrollbar>
</template>

<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import logo from '@/assets/images/logos/aviato.png'
import { ref } from 'vue'
const open: any = ref(['Product'])

const products: any = ref([
  { text: 'menu.products.real_time', icon: 'mdi-clock', to: { name: 'formPage', params: { id: 123 } } },
  { text: 'menu.products.audience', icon: 'mdi-account', to: { name: 'register' } },
  { text: 'menu.products.contact', icon: 'mdi-pig-variant', to: 'contact' },
])
const admins: any = ref([
  { text: 'Menu 1', icon: 'mdi-chevron-right' },
  { text: 'Menu 2', icon: 'mdi-chevron-right' },
  { text: 'Menu 3', icon: 'mdi-chevron-right' },
])
</script>
<style src="vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css" />
<style lang="scss" scoped>
.v-navigation-drawer__content {
  .v-list.nav-menu {
    a.v-list-item.v-list-item--active {
      background: linear-gradient(270deg, rgb(var(--v-theme-primary)) 0%, white 300%);
      color: rgb(var(--v-theme-on-primary)) !important;
      box-shadow: 0 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
        0 3px 4px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
        0 1px 8px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
    }
    .v-list-group {
      --list-indent-size: 16px;
      --prepend-width: 0px;
    }
    .rounded-shaped {
      border-bottom-left-radius: 0 !important;
      border-top-left-radius: 0 !important;

      border-bottom-right-radius: 32px !important;
      border-top-right-radius: 32px !important;
    }
  }
}
.ps {
  height: 90vh;
}
</style>
