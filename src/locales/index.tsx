import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'
import vn from '@/locales/vn.json'
import en from '@/locales/en.json'

const language = localStorage.getItem('locale') || 'en'

export const i18n: any = createI18n({
  locale: language,
  fallbackLocale: language,
  messages: { en, vn },
  lazy: true,
  parsePages: false,
})

export function setupI18n(options = { locale: 'en' }) {
  const i18n = createI18n(options)
  setI18nLanguage(i18n, options.locale)
  return i18n
}

export function setI18nLanguage(i18n: any, locale: string) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    i18n.global.locale.value = locale
  }
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  // document.querySelector('html').setAttribute('lang', locale)
  ;(document.querySelector('.html') as HTMLInputElement).setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n: any, locale: string) {
  // load locale messages with dynamic import
  const messages = await import(/* webpackChunkName: "locale-[request]" */ `./locales/${locale}.json`)

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default)

  return nextTick()
}
