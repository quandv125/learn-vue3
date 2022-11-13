<template>
  <v-btn icon variant="text" color="default" class="me-2" size="small">
    <v-badge content="5" color="error">
      <v-icon icon="mdi-bell-outline" size="24" />
    </v-badge>

    <v-menu activator="parent">
      <v-list class="notification">
        <v-list-item link :title="`Notification`">
          <template #append>
            <v-badge color="info" :content="`5 New`" inline></v-badge>
          </template>
        </v-list-item>

        <v-divider />
        <v-list-item class="notify-item" link>
          <template #prepend>
            <v-avatar color="primary" size="40" variant="tonal">
              <v-img :src="avatar1" />
            </v-avatar>
          </template>
          <v-list-item-title>Congratulation Flora! 🎉</v-list-item-title>
          <v-list-item-subtitle class="text-disabled"> Won the monthly best seller badge </v-list-item-subtitle>
        </v-list-item>

        <v-list-item class="notify-item" link>
          <template #prepend>
            <v-avatar color="primary" size="40" variant="tonal">
              <v-img :src="avatar1" />
            </v-avatar>
          </template>
          <v-list-item-title>New message received 👉 </v-list-item-title>
          <v-list-item-subtitle class="text-disabled"> You have 10 unread messages </v-list-item-subtitle>
        </v-list-item>

        <v-list-item class="notify-item" link>
          <template #prepend>
            <v-avatar color="primary" size="40" variant="tonal">
              <v-img :src="avatar1" />
            </v-avatar>
          </template>
          <v-list-item-title>New message received 👋🏻</v-list-item-title>
          <v-list-item-subtitle class="text-disabled"> You have 10 unread messages </v-list-item-subtitle>
        </v-list-item>

        <v-list-item class="notify-item" link>
          <template #prepend>
            <v-avatar color="primary" size="40" variant="tonal">
              <v-img :src="avatar1" />
            </v-avatar>
          </template>
          <v-list-item-title>New message received 👋🏻</v-list-item-title>
          <v-list-item-subtitle class="text-disabled"> You have 10 unread messages </v-list-item-subtitle>
        </v-list-item>

        <v-list-item class="notify-item" link>
          <template #prepend>
            <v-avatar color="primary" size="40" variant="tonal">
              <v-img :src="avatar1" />
            </v-avatar>
          </template>
          <v-list-item-title>Received Order 📦</v-list-item-title>
          <v-list-item-subtitle class="text-disabled"> New order received from john </v-list-item-subtitle>
        </v-list-item>

        <v-divider />
        <v-list-item class="text-center">
          <v-btn primary> READ ALL NOTIFICATION </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>

<script lang="ts" setup>
import avatar1 from '@/assets/images/avatars/avatar-1.png'
</script>

<style scoped>
.v-list-item.notify-item {
  padding: 15px 0;
}
.notification {
  min-width: 400px;
}
</style>
