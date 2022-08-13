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
            <td>{{item.hash_id}}</td>
            <td>{{item.name}}</td>
          </tr>
        </tbody>
    </table>
  </div>
    
</template>
<script lang="ts">
import { defineComponent } from "vue";
import RepositoryFactory from '@/repositories/RepositoryFactory'
const Post = RepositoryFactory.get('posts')

export default defineComponent({
  name: "App",
   data() {
    return {
      purposes: [],
      submitted: false,
    };
  },
  methods: {
    setStatus(){
      this.callApi()
    },
    async callApi() {
      const {data} = await Post.getAll();

      if(data && data.status == 'success'){
        this.purposes = data.results
      }
      // Post.getAll().then((response) => {
      //   console.log(response)
      //   this.purposes = response.data.results
      //   // this.$store.dispatch("getPosts", { self: response.data.results });
      // })
      // .catch((e) => {
      //   console.log(e);
      // });
    },
  }
});
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
