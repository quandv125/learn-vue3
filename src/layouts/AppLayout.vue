<script setup lang="ts">
import defaultLayout from '@/layouts/DefaultLayout.vue'
import { markRaw, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const layout = ref()
const route = useRoute()

watch(
  () => route.meta?.layout as string | undefined,
  async metaLayout => {
    try {
      const component = metaLayout && (await import(/* @vite-ignore */ `./${metaLayout}.vue`))
      layout.value = markRaw(component?.default || defaultLayout)
    } catch (e) {
      layout.value = markRaw(defaultLayout)
    }
  },
  { immediate: true },
)
</script>
<template>
  <component :is="layout">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </component>
</template>
