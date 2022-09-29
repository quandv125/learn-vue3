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

import TextInput from '@/components/Common/FormInput/TextInput.vue'
import SelectOptions from '@/components/Common/FormInput/SelectOptions.vue'
import Radio from '@/components/Common/FormInput/Radio.vue'
import Checkbox from '@/components/Common/FormInput/Checkbox.vue'
import Button from '@/components/Common/FormInput/Button.vue'
import Errors from '@/components/Common/Messages/Errors.vue'

const app = createApp(App)

// Global Registration
app
  .component('TextInput', TextInput)
  .component('SelectOptions', SelectOptions)
  .component('Radio', Radio)
  .component('Checkbox', Checkbox)
  .component('ButtonCustom', Button)
  .component('ErrorCustom', Errors)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Toast, { shareAppContext: true })
app.use(Maska)
app.mount('#app')
