import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import Toast from 'vue-toastification'
import Maska from 'maska'

import '@/assets/main.css'

import { fakeBackend } from '@/helpers'
fakeBackend()

import { i18n } from '@/locales'

import { TextInput, SelectOptions, Radio, Checkbox, Button, Errors, Modal } from '@/components/Common/FormInput'

import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
loadFonts()

const app = createApp(App)

// Global Registration
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
