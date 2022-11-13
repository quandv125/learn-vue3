<template>
  <v-badge v-bind="avatarBadgeProps">
    <v-avatar style="cursor: pointer" color="primary" variant="tonal">
      <v-img :src="avatar1" />

      <!-- SECTION Menu -->
      <v-menu activator="parent" width="230" location="bottom end" offset="14px">
        <v-list>
          <!-- 👉 User Avatar & Name -->
          <v-list-item>
            <template #prepend>
              <v-list-itemAction start>
                <v-badge v-bind="avatarBadgeProps">
                  <v-avatar color="primary" size="40" variant="tonal">
                    <v-img :src="avatar1" />
                  </v-avatar>
                </v-badge>
              </v-list-itemAction>
            </template>

            <v-list-item-title class="font-weight-semibold">
              {{ username }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-disabled">
              {{ email }}
            </v-list-item-subtitle>
          </v-list-item>

          <v-divider class="my-2" />

          <!-- 👉 Profile -->
          <v-list-item @click="test" link>
            <template #prepend>
              <v-icon class="me-2" icon="mdi-account-outline" size="22" />
            </template>

            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>

          <!-- 👉 Settings -->
          <v-list-item link>
            <template #prepend>
              <v-icon class="me-2" icon="mdi-cog-outline" size="22" />
            </template>

            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>

          <!-- 👉 Pricing -->
          <v-list-item link>
            <template #prepend>
              <v-icon class="me-2" icon="mdi-currency-usd" size="22" />
            </template>

            <v-list-item-title>Pricing</v-list-item-title>
          </v-list-item>

          <!-- 👉 FAQ -->
          <v-list-item link>
            <template #prepend>
              <v-icon class="me-2" icon="mdi-help-circle-outline" size="22" />
            </template>

            <v-list-item-title>FAQ</v-list-item-title>
          </v-list-item>

          <!-- Divider -->
          <v-divider class="my-2" />

          <!-- 👉 Logout -->
          <v-list-item @click="onHandleLogout" link>
            <template #prepend>
              <v-icon class="me-2" icon="mdi-logout-variant" size="22" />
            </template>

            <v-list-item-title> Logout </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- !SECTION -->
    </v-avatar>
  </v-badge>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores'
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'
import avatar1 from '@/assets/images/avatars/avatar-1.png'
const { t } = useI18n()
const avatarBadgeProps = {
  dot: true,
  offsetX: 3,
  offsetY: 3,
  color: 'success',
  bordered: true,
}

// data
const authStore = useAuthStore()
const toast = useToast()
const users = JSON.parse(localStorage.getItem('user') || '{}')

// computed
const username = computed(() => users?.name || '')
const email = computed(() => users?.email || '')

// Method
const onHandleLogout = () => {
  toast.success('Logout! 🎉')
  return authStore.logout()
}

const test = () => {
  toast.success(t('message.hello'))
}
</script>
