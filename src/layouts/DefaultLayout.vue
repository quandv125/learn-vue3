<template>
  <div class="default_layout">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <HelloWorld msg="You did it!" />
        <h1 id="test">
          <span>{{ $t('common.select_lang') }}</span>
        </h1>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
          <div class="locale-changer">
            <v-select label="Language" v-model="$i18n.locale" :items="$i18n.availableLocales"></v-select>

            <br /><br />
            <v-btn @click="showToast">Show Toast</v-btn>
            <br /><br />
            <input type="tel" v-maska="'###-####'" />
          </div>
        </nav>
      </div>
      <!-- Menu -->
      <ul>
        <li v-for="(menu, key) in SIDEBAR_MENU" :key="key">
          <span v-if="menu.route">
            <router-link :to="{ name: menu.route }">{{ menu.title }}</router-link>
          </span>
          <span v-else>
            {{ menu.title }}
          </span>
          <ul v-for="(sub, sub_key) in menu.children" :key="sub_key">
            <li>
              <router-link :to="{ name: sub.route }">
                {{ sub.route }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
      <!-- End menu -->
    </header>
    <div class="p-4">
      <div class="container">
        <slot />
      </div>
    </div>
  </div>
</template>
<!-- Script -->

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import { useToast } from 'vue-toastification'
import { SIDEBAR_MENU } from '@/config/sidebar_menu'

const toast = useToast()

const showToast = () => {
  toast.success('You did it! 🎉')
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
