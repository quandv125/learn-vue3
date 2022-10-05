<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in myData" :key="key">
          <td>{{ item.id }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { TopLevel } from '@/types/fetchApi.type'

import { usePostHelper } from '@/helpers/usePostHelper' // (1)
const { getItinerary } = usePostHelper() // (2)
const myData = ref<TopLevel[]>([])
// method
const fetchApi = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  myData.value = await getItinerary()
}
// mounted
onMounted(() => {
  fetchApi()
  console.log('component đã mounted')
})
</script>
