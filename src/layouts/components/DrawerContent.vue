<template>
  <!-- 👉 Nav header -->
  <div class="nav-header">
    <RouterLink to="/" class="app-logo d-flex align-center gap-x-3 app-title-wrapper">
      <!-- ℹ️ You can also use img tag or VImg here -->
      <div v-html="logo" />

      <Transition name="vertical-nav-app-title">
        <h1 class="font-weight-semibold leading-normal text-xl text-uppercase">Vue3</h1>
      </Transition>
    </RouterLink>
  </div>

  <ul>
    <VerticalNavLink
      :item="{
        title: 'Dashboard',
        to: 'homePage',
        // target: '_blank',
        icon: { icon: 'mdi-home' },
      }"
    />
    <VerticalNavSectionTitle :item="{ heading: 'Pages' }" />

    <VerticalNavLink
      :item="{
        title: 'About',
        to: 'aboutPage',
        // target: '_blank',
        icon: { icon: 'mdi-information' },
      }"
    />

    <VerticalNavLink
      :item="{
        title: 'Service',
        to: 'servicePage',
        // target: '_blank',
        icon: { icon: 'mdi-account-circle' },
      }"
    />

    <VerticalNavSectionTitle :item="{ heading: 'Login' }" />

    <VerticalNavLink
      :item="{
        title: 'Login',
        to: 'loginPage',
        // target: '_blank',
        icon: { icon: 'mdi-login' },
      }"
    />
  </ul>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.svg?raw'
import VerticalNavLink from './VerticalNavLink.vue'
import VerticalNavSectionTitle from './VerticalNavSectionTitle.vue'
</script>
