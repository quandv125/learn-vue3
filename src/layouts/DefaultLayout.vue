<template>
  <VerticalNavLayout>
    <VNavigationDrawer
      v-model="drawer"
      app
      floating
      sticky
      :absolute="false"
      style="background: rgb(var(--v-theme-background))"
      class="layout-vertical-nav position-fixed"
    >
      <!-- <slot name="navigation-drawer-content" /> -->
      <DrawerContent />
    </VNavigationDrawer>

    <VAppBar app flat class="px-6 layout-navbar app-header" style="background: transparent">
      <template v-if="mdAndDown" #prepend>
        <VAppBarNavIcon class="d-block d-lg-none me-2 ms-n3" color="inherit" @click="drawer = true" />
      </template>
      <slot name="navbar" />
    </VAppBar>

    <VMain class="w-100">
      <div class="pa-6">
        <slot />
      </div>
    </VMain>

    <VFooter app style="background: transparent" class="app-footer">
      <Footer />
    </VFooter>
  </VerticalNavLayout>
</template>
<!-- Script -->
<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import DrawerContent from '@/layouts/components/DrawerContent.vue'
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
