<template>
  <div>
    <h1>This is an about page: {{ estimating }}</h1>

    <Suspense>
      <template #default>
        <example />
      </template>
      <template #fallback>
        <span style="border: 1px solid; margin: 20px; padding: 20px; background: #4caf50; color: #fff">
          Loading...
        </span>
      </template>
    </Suspense>

    <button class="grayBtn" @click="$router.push('/')">HOME</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Example from '@/components/Example.vue'
// import { defineAsyncComponent } from 'vue'
// const Example = defineAsyncComponent(() => import('@/components/Example.vue'))

import { usePostHelper } from '@/helpers/usePostHelper'

// Data
const { isEstimating } = usePostHelper() // (2)

// computed
const estimating = computed(() => isEstimating()) // (2s)
</script>
