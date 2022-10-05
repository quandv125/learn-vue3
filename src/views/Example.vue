<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>Example</h1>
    {{ result }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const result = ref()

// const response = await fetch('https://api.publicapis.org/entries')
// result.value = await response.json()
result.value = await new Promise(resolve => setTimeout(() => resolve('Hello'), 2000))
</script>
