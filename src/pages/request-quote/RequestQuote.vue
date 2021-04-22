<template>
  <Fragment>
    <HeaderMenu :menus="menus" class="header-menu"></HeaderMenu>
    <main class="request-content">
      <component class="form" :is="currentForm" @next="goNext" @prev="goBack" />
      <component class="interview" :is="currentDescription" />
      <footer>Copyright 2021. Congkong, All rights reserved.</footer>
    </main>
  </Fragment>
</template>

<script lang="ts">
import HeaderMenu from "@/pages/request-quote/components/menu/HeaderMenu.vue"
import menuList from "@/pages/request-quote/assets/menu-list.json"
import HelpDesk from "@/mixins/HelpDesk"
import RequestQuoteForm from "@/pages/request-quote/components/RequestQuoteForm.vue"
import InterviewTileWall from "@/pages/request-quote/components/InterviewTileWall.vue"
import OrganizerJourney from "@/pages/request-quote/components/OrganizerJourney.vue"
import CompletePage from "@/pages/request-quote/components/CompletePage.vue"
import { Fragment } from "vue-fragment"
import RequestQuoteFirstForm from "@/pages/request-quote/components/RequestQuoteFirstForm.vue"
import RequestQuoteSecondForm from "@/pages/request-quote/components/RequestQuoteSecondForm.vue"
import RequestQuoteComplete from "@/pages/request-quote/components/RequestQuoteComplete.vue"
import { create } from "@/pages/request-quote/api/quotes"

export default {
  name: "RequestQuote",
  components: { HeaderMenu, RequestQuoteForm, Fragment, InterviewTileWall },
  mixins: [HelpDesk],
  computed: {
    menus() {
      return menuList
    },
    currentForm() {
      switch (this.currentStep) {
        default:
          return RequestQuoteFirstForm
        case 1:
          return RequestQuoteSecondForm
        case 99:
          return RequestQuoteComplete
      }
    },
    currentDescription() {
      switch (this.currentStep) {
        default:
          return InterviewTileWall
        case 1:
          return OrganizerJourney
        case 99:
          return CompletePage
      }
    },
  },
  data() {
    return {
      formValues: {},
      currentStep: 0,
      lastStep: 1,
    }
  },
  methods: {
    returnBack() {
      this.$router.back()
    },
    goBack(v) {
      if (v) {
        this.formValues = {
          ...this.formValues,
          ...v,
        }
      }
      switch (this.currentStep) {
        default:
          this.currentStep -= 1
          break
      }
    },
    goNext(v) {
      if (v) {
        this.formValues = {
          ...this.formValues,
          ...v,
        }
      }

      switch (this.currentStep) {
        default:
          this.currentStep += 1
          break
        case this.lastStep:
          create(this.formValues).then(() => {
            this.currentStep = 99
          })
          break
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "~@/pages/request-quote/assets/default";
$footerHeight: 3rem;

.request-content {
  @apply grid bg-white w-full h-full box-border;

  padding-top: $menuHeight;

  grid-template-areas:
    "form   form   form   form   form   interview interview interview interview interview interview interview"
    "footer footer footer footer footer interview interview interview interview interview interview interview";
  grid-template-rows: calc(100% - #{$footerHeight}) $footerHeight;
  grid-template-columns: repeat(12, 1fr);

  .form {
    grid-area: form;
  }

  .interview {
    grid-area: interview;
    background: url("~@/pages/request-quote/assets/bg_marble.png") no-repeat;
    background-size: cover;
    @apply flex justify-center items-center;
  }

  footer {
    grid-area: footer;
    background-color: transparent;
    color: $gray5;
    line-height: $footerHeight;
    padding: 0;
  }
}
</style>
