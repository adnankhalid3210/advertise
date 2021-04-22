import Vue from "vue"

import gsap from "gsap"
import CSSPlugin from "gsap/CSSPlugin"

import VueFormulate from "@braid/vue-formulate"

import FormulateVSelectPlugin from "@cone2875/vue-formulate-select"
import FormulateDateTimePlugin from "@cone2875/vue-formulate-datetime"

import { Plugin as vueFragmentPlugin } from "vue-fragment"
import fullscreen from "vue-fullscreen"
import VueMq from "vue-mq"
import "./registerFontawesome"
import VueDragScroll from "vue-dragscroll"

import "./PubSub"

function initInnerVH() {
  const setVHWithWindowHeight = () => {
    const vh = window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }

  setVHWithWindowHeight()
  window.addEventListener("resize", setVHWithWindowHeight)
}

export function registerGlobalPlugins() {

  Vue.use(VueFormulate, {
    plugins: [FormulateVSelectPlugin, FormulateDateTimePlugin],
  })

  Vue.use(fullscreen)
  Vue.use(VueDragScroll)
  Vue.use(vueFragmentPlugin)

  Vue.use(VueMq, {
    // Use Tailwind's media query breakpoints.
    // See details in https://tailwindcss.com/docs/breakpoints
    // VueMq is based on max-width while Tailwind is based on min-width.
    breakpoints: {
      sm: 688,
      md: 992,
      lg: 1312,
      xl: Infinity,
    },
  })
  initInnerVH()
  gsap.registerPlugin(CSSPlugin)
}
