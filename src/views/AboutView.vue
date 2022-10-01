<template>
  <div>
    <h1 @click="fetchApi">This is an about page: __ {{ estimating }}___</h1>

    <br /><br /><br />

    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in myData" :key="key">
          <td>{{ item.id }}</td>
          <td>{{ item.username }}</td>
        </tr>
      </tbody>
    </table>
    <button class="grayBtn" @click="$router.push('/')">HOME</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { usePostHelper } from '@/helpers/usePostHelper' // (1)
import type { ResItemType } from '@/types/fetchApi.type'

// Data
const { getItinerary, isEstimating } = usePostHelper() // (2)
const myData = ref<ResItemType[]>([])
// computed
const estimating = computed(() => isEstimating()) // (2s)
// method
const fetchApi = async () => {
  myData.value = await getItinerary()
}
// mounted
onMounted(() => {
  fetchApi()
  console.log('component đã mounted')
})
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 15vh;
    align-items: center;
  }
}
</style>
