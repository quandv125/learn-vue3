<template>
  <div class="home">
    <p>
      {{ $t('message.hello') }}
    </p>
    <h1>Hi {{ authUser?.firstName }}!</h1>
    <h3>Users from secure api end point:</h3>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">{{ user.firstName }} {{ user.lastName }}</li>
    </ul>
    <div v-if="users.loading" class="spinner-border spinner-border-sm"></div>
    <div v-if="users.error" class="text-danger">Error loading users: {{ users.error }}</div>

    <v-btn variant="flat" color="info" :loading="modalActive" @click="onToggleModal"> Open Modal </v-btn>

    <br /><br />
    <Modal :modal-active="modalActive" @close="onToggleModal">
      <div class="modal-content">
        <h1>This is modal header</h1>
        <p class="msg">This is modal message</p>
      </div>
    </Modal>
    <br />
    <ButtonCustom @click="test" :label="$t('message.hello')" />
    <br />

    <router-link :to="{ name: 'formPage', params: { id: 123 }, query: { name: 'Quan' } }">Go to form</router-link>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore, useUsersStore } from '@/stores'
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'

// data
const toast = useToast()
const { t } = useI18n()
const authStore = useAuthStore()
const modalActive = ref<boolean>(false)
const { user: authUser }: any = storeToRefs(authStore)
const usersStore = useUsersStore()
const { users }: any = storeToRefs(usersStore)

usersStore.getAll()
// Method
const onToggleModal = () => {
  modalActive.value = !modalActive.value
}

const test = () => {
  toast.success(t('message.hello'))
}
</script>
<style lang="scss" scoped>
.home {
  .modal-content {
    display: flex;
    flex-direction: column;
    min-height: 100px;
    h1 {
      text-align: center;
      margin: 0 20px;
      font-size: 32px;
      color: red;
    }
    p {
      color: red;
    }
  }
}
</style>
