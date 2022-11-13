<template>
  <div>
    <perfect-scrollbar>
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
    </perfect-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import type { TopLevel } from '@/types/fetchApi.type'
import { usePostHelper } from '@/helpers/usePostHelper' // (1)
const { getItinerary } = usePostHelper() // (2)

const myData = ref<TopLevel[]>([])

myData.value = await getItinerary()
</script>
<style src="vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css" />

<style>
.ps {
  height: 100px;
}
</style>
