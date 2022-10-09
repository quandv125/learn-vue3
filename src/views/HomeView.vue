<template>
  <div class="home">
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

    <button @click="logout">Logout - {{ modalActive }}</button>
    <button type="button" @click="onToggleModal">Open Modal</button>
    <br /><br />
    <Modal :modal-active="modalActive" @close="onToggleModal">
      <div class="modal-content">
        <h1>This is modal header</h1>
        <p>This is modal message</p>
      </div>
    </Modal>
    <br />

    <router-link :to="{ name: 'formPage', params: { id: 123 }, query: { name: 'Quan' } }">Go to form</router-link>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore, useUsersStore } from '@/stores'
import { useToast } from 'vue-toastification'

// data
const authStore = useAuthStore()
const toast = useToast()
const modalActive = ref<boolean>(false)
const { user: authUser }: any = storeToRefs(authStore)
const usersStore = useUsersStore()
const { users }: any = storeToRefs(usersStore)

usersStore.getAll()
// Method
const logout = () => {
  toast.success('Logout! 🎉')
  return authStore.logout()
}

const onToggleModal = () => {
  modalActive.value = !modalActive.value
}
</script>
<style scoped>
.home .modal-content {
  display: flex;
  flex-direction: column;
}
.home .modal-content h1 {
  font-size: 32px;
  color: red;
}
.home .modal-content h1,
.home .modal-content p {
  margin-bottom: 16px;
}
</style>
