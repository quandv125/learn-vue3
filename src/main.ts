import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import Toast from 'vue-toastification'
import VueTheMask from 'vue-the-mask'

import '@/assets/main.css'

import { fakeBackend } from '@/helpers'
fakeBackend()

import { i18n } from '@/locales'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Toast, { shareAppContext: true })
app.use(VueTheMask)
app.mount('#app')
