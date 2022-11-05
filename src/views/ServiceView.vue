<template>
  <div>
    service
    <button class="grayBtn" @click="$router.push('/')">HOME</button>
    <br /><br /><br />
    <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
      <v-btn variant="flat"> Normal </v-btn>

      <v-btn variant="flat" color="secondary"> Secondary </v-btn>

      <v-btn variant="flat" color="error"> Error </v-btn>

      <v-btn variant="flat" disabled> Disabled </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
