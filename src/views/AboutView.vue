<template>
  <div>
    <h1>This is an about page: {{ estimating }}</h1>
    <br /><br />
    <Suspense>
      <template #default>
        <example />
      </template>
      <template #fallback>
        <v-progress-circular></v-progress-circular>
      </template>
    </Suspense>
    <br /><br /><br />
    <button class="grayBtn" @click="$router.push('/')">HOME</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// import { defineAsyncComponent } from 'vue'
import Example from '@/components/Example.vue'
import { usePostHelper } from '@/helpers/usePostHelper'
// const Example = defineAsyncComponent(() => import('@/components/Example.vue'))

// Data
const { isEstimating } = usePostHelper() // (2)

// computed
const estimating = computed(() => isEstimating()) // (2s)
</script>
