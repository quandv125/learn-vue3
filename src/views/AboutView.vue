<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button class="btn btn-success" @click="setStatus">change</button>
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
          <tr  v-for="(item, key) in purposes" :key="key">
            <td>{{item.id}}</td>
            <td>{{item.title}}</td>
          </tr>
        </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import rf from '@/utils/repositories/RequestFactory'

export default defineComponent({
  name: "App",
   data() {
    return {
      purposes: [],
      submitted: false,
    };
  },
  created () {
    if(!this.purposes){
      this.fetch()
    }
  },
  methods: {
    setStatus(){
      this.fetch()
    },
    async fetch() {
      const data = await rf.getRequest('PostRequest').getData()

      if(data){
        this.purposes = data
      }
    },
  }
});
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 15vh;
    align-items: center;
  }
}
</style>
