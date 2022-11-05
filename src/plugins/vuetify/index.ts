import { createVuetify } from 'vuetify'
import defaults from './defaults'
import { icons } from './icons'
import theme from './theme'

// Styles
// import '@core/scss/libs/vuetify/index.scss'
import 'vuetify/styles'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  defaults,
  icons,
  theme,
  components,
  directives,
})
