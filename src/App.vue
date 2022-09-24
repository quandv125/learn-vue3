<template>
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
          <select v-model="$i18n.locale" @change="changeLanguage">
            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
              {{ locale }}
            </option>
          </select>
          <br /><br />
          <button @click="showToast">showToast</button>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <AppLayout />
  </main>
</template>

<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { RouterLink } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useToast } from 'vue-toastification'
const toast = useToast()

const changeLanguage = (e: any) => {
  localStorage.setItem('locale', e.target.value)
}

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
