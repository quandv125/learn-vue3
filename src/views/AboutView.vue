<template>
  <div class="about">
    <h1>This is an about page: __ {{ estimating }}___</h1>
    <button class="btn btn-success" @click="fetch">fetch (5)</button>
    <button class="btn btn-success" @click="loadData">loadData</button>
  </div>
  <div>
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

        <tr v-for="(item, key) in purposes" :key="key">
          <td>{{ item.id }}</td>
          <td>{{ item.username }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { usePostHelper } from '@/helpers/usePostHelper' // (1)
import rf from '@/utils/repositories/RequestFactory'

export default defineComponent({
  name: 'App',
  data() {
    return {
      purposes: [],
      submitted: false,
    }
  },
  setup() {
    const myData = ref([])
    const { getItinerary, isEstimating } = usePostHelper() // (2)
    const estimating = computed(() => isEstimating()) // (2s)

    const fetch = async () => {
      // (3)
      const data = await getItinerary()
      if (data) {
        myData.value = data
      }
    }

    return {
      fetch, // (4)
      estimating,
      myData,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    loadData() {
      this.fetchData()
    },
    async fetchData() {
      const data = await rf.getRequest('PostRequest').getData()

      if (data) {
        this.purposes = data
      }
    },
  },
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
