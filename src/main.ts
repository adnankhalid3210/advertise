// polyfills
import "core-js/stable"
import "regenerator-runtime/runtime"

import "./libs/hash"

import Vue from "vue"
Vue.config.productionTip = false

import "tailwindcss/tailwind.css"

import { registerGlobalPlugins } from "./globalPlugins"
registerGlobalPlugins()

import i18n from "./i18n"
import router from "@/router"

import App from "./App.vue"
import "./registerServiceWorker"

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app")
