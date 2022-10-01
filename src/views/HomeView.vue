<template>
  <div>
    <p>
      {{ $t('message.hello') }}
    </p>
    <h1>Hi {{ authUser?.firstName }}!</h1>
    <p>You're logged in with Vue 3 + Pinia & JWT!!</p>
    <h3>Users from secure api end point:</h3>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">{{ user.firstName }} {{ user.lastName }}</li>
    </ul>
    <div v-if="users.loading" class="spinner-border spinner-border-sm"></div>
    <div v-if="users.error" class="text-danger">Error loading users: {{ users.error }}</div>

    <button @click="logout">Logout</button>

    <br /><br /><br />

    <router-link :to="{ name: 'formPage', params: { id: 123 }, query: { name: 'Quan' } }">Go to form</router-link>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore, useUsersStore } from '@/stores'
import { useToast } from 'vue-toastification'
const toast = useToast()

const authStore = useAuthStore()
const { user: authUser }: any = storeToRefs(authStore)

const usersStore = useUsersStore()
const { users }: any = storeToRefs(usersStore)

usersStore.getAll()

const logout = () => {
  toast.success('Logout! 🎉')
  return authStore.logout()
}
</script>
