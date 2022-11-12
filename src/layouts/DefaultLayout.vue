<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    floating
    sticky
    :absolute="false"
    style="background: rgb(var(--v-theme-background))"
    class="layout-vertical-nav position-fixed"
  >
    <NavBarContent />
  </v-navigation-drawer>

  <v-app-bar app flat class="px-6 layout-navbar app-header" style="background: transparent">
    <template v-if="mdAndDown">
      <v-app-bar-nav-icon class="d-block d-lg-none me-2 ms-n3" color="inherit" @click="drawer = true" />
    </template>
    <template v-else>
      <Header />
    </template>
  </v-app-bar>

  <v-main class="w-100">
    <div class="pa-6">
      <slot />
    </div>
  </v-main>

  <v-footer app style="background: transparent" class="app-footer">
    <Footer />
  </v-footer>
</template>
<!-- Script -->
<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import NavBarContent from '@/layouts/components/NavBar/NavBarContent.vue'
import Header from '@/layouts/components/Header.vue'
import Footer from './components/Footer.vue'
import { ref } from 'vue'
const { lgAndUp, mdAndDown } = useDisplay()

const drawer = ref(lgAndUp.value)
</script>

<style lang="scss">
.layout-vertical-nav {
  top: 0 !important;
  height: 100% !important;

  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;

    > ul {
      flex-grow: 1;
    }
  }
}

.v-toolbar__prepend {
  margin-inline-start: 0 !important;
}

.v-footer {
  padding-left: 24px !important;
  padding-right: 24px !important;
}
</style>
