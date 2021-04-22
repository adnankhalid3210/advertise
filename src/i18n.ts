import Vue from "vue"
import VueI18n, { IVueI18n, LocaleMessages } from "vue-i18n"
import ko from "./locales/ko"
import en from "./locales/en"

Vue.use(VueI18n)

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: { en, ko },
  silentFallbackWarn: true,
})

export function mergeMessages(i18n: IVueI18n, messages: LocaleMessages) {
  if (!i18n) {
    return
  }
  if (!messages) {
    return
  }
  for (const key of Object.keys(messages)) {
    i18n.mergeLocaleMessage(key, messages[key])
  }
}
