<template>
  <vuescroll :ops="ops" @handle-scroll="handleScroll" @handle-resize="handleResize">
    <HeaderMenu :menus="menus" class="header-menu" @click="handleMenuClick"></HeaderMenu>
    <main class="main-content">
      <MainCarrousel class="main-content__subpage" id="home" ref="home" />
      <WorkSubPage class="main-content__subpage" id="work" ref="work" />
      <EventTech class="main-content__subpage" id="event-tech" ref="eventTech" />
      <SubscribePage class="main-content__subpage" id="contact" ref="subscribePage" />
      <ContactSubPage class="main-content__subpage" id="contact" ref="contact" />
    </main>
    <footer ref="footer">
      <img class="h-full inline-block" src="~@/assets/congkong-logo-white.svg" alt="congkong logo" />
      <p>Copyright 2021. Congkong, All rights reserved.</p>
    </footer>
  </vuescroll>
</template>

<script lang="ts">
import MainCarrousel from "@/pages/request-quote/components/subpages/MainCarrousel.vue"
import WorkSubPage from "@/pages/request-quote/components/subpages/WorkSubPage.vue"
import EventTech from "@/pages/request-quote/components/subpages/EventTechSubPage.vue"

import HeaderMenu from "@/pages/request-quote/components/menu/HeaderMenu.vue"
import vuescroll, { Config } from "vuescroll"
import { camelToDash } from "@/libs/string"
import SubscribePage from "@/pages/request-quote/components/subpages/SubscribePage.vue"
import ContactSubPage from "@/pages/request-quote/components/subpages/ContactSubPage.vue"
import menuList from "@/pages/request-quote/assets/menu-list.json"
import HelpDesk from "@/mixins/HelpDesk"

export default {
  name: "Main",
  components: { ContactSubPage, HeaderMenu, MainCarrousel, WorkSubPage, EventTech, SubscribePage, vuescroll },
  mixins: [HelpDesk],
  methods: {
    handleMenuClick(item) {
      //console.log(item)
    },
    handleScroll(ev) {
      const { scrollTop, process } = ev
      const { home, work, eventTech, subscribePage, contact } = this.$refs
      let hashString = ""

      if (home.checkPosition(scrollTop)) {
        hashString = home.$el.id
        this.menus[0].active = true
        this.menus[1].active = false
        this.menus[2].active = false
        this.menus[3].active = false
        this.menus[4].active = false

      } else if (work.checkPosition(scrollTop)) {
        hashString = work.$el.id
        this.menus[0].active = false
        this.menus[1].active = true
        this.menus[2].active = false
        this.menus[3].active = false
        this.menus[4].active = false

      } else if (eventTech.checkPosition(scrollTop)) {
        hashString = eventTech.$el.id
        this.menus[0].active = false
        this.menus[1].active = false
        this.menus[2].active = true
        this.menus[3].active = false
        this.menus[4].active = false

      } else if (subscribePage.checkPosition(scrollTop)) {
        hashString = subscribePage.$el.id
        this.menus[0].active = false
        this.menus[1].active = false
        this.menus[2].active = false
        this.menus[3].active = true
        this.menus[4].active = false
      } else if (contact.checkPosition(scrollTop)) {
        hashString = contact.$el.id
        this.menus[0].active = false
        this.menus[1].active = false
        this.menus[2].active = false
        this.menus[3].active = false
        this.menus[4].active = true
      } else {
        return
      }

      history.pushState({}, null, `${this.$route.path}#${camelToDash(hashString)}`)
    },
    handleResize(ev) {
      const { home, work, eventTech,subscribePage, contact } = this.$refs
      home.updatePosition()
      work.updatePosition()
      eventTech.updatePosition()
      subscribePage.updatePosition()
      contact.updatePosition()
    },
    returnBack() {
      this.$router.back()
    },
  },
  watch: {
    currentSubPage(to, from) {
      if (to !== from) {
        document.location.hash = camelToDash(to)
      }
    },
  },
  data() {
    return {
      currentSubPage: "home",
      isEstimatePage: false,
      currentSubPagePercent: 0,
      subPagePosition: {},
      ops: {
        mode: "slide",
        vuescroll: {},
        scrollPanel: {},
        rail: {},
        bar: {
          background: "#f33737a0",
        },
      } as Config,
      menus: menuList,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/pages/request-quote/assets/default";
</style>
