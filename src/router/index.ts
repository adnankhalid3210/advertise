import Vue from "vue"
import VueRouter from "vue-router"
import { RouteConfig } from "vue-router/types/router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: () => import("@/pages/Main.vue"),
    name: "Main",
  },
  {
    path: "/request-quote",
    name: "RequestQuote",
    component: () => import(/* webpackChunkName: "default" */ "@/pages/request-quote/RequestQuote.vue"),
  },
  {
    // 관리자 로그인
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "default" */ "@/pages/AdminLogin.vue"),
  },
] as RouteConfig[]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.path === "/" && to.hash === "#home") {
      // 어째선지 최상위 컴포넌트만 scroll-margin-top 이 안 먹는다
      return { x: 0, y: 0 }
    }
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      }
    } else {
      return { x: 0, y: 0 }
    }
  },
})

export default router
