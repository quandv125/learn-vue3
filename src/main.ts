import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import { i18n } from '@/locales'

// Styles css/scss
import '@/assets/styles/scss/style.scss'
import '@/assets/styles/main.css'

import { fakeBackend } from '@/helpers'
fakeBackend()

// Package, lib
import Toast from 'vue-toastification'
import Maska from 'maska'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
loadFonts()

const app = createApp(App)

// Global Registration
import { TextInput, SelectOptions, Radio, Checkbox, Button, Errors, Modal } from '@/components/Common/FormInput'
app
  .component('TextInput', TextInput)
  .component('SelectOptions', SelectOptions)
  .component('Radio', Radio)
  .component('Checkbox', Checkbox)
  .component('ButtonCustom', Button)
  .component('ErrorCustom', Errors)
  .component('Modal', Modal)

app.use(createPinia())
app.use(vuetify)
app.use(router)
app.use(i18n)
app.use(Toast, { shareAppContext: true })
app.use(Maska)
app.mount('#app')
