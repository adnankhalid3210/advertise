<template>
  <component :is="currentForm" @next="goNext" @prev="goBack" :value="formValues" />
</template>

<script lang="ts">
import RequestQuoteFirstForm from "@/pages/request-quote/components/RequestQuoteFirstForm.vue"
import RequestQuoteSecondForm from "@/pages/request-quote/components/RequestQuoteSecondForm.vue"
import RequestQuoteComplete from "@/pages/request-quote/components/RequestQuoteComplete.vue"

export default {
  name: "RequestQuoteForm",
  data() {
    return {
      formValues: {},
      currentStep: 0,
      lastStep: 1,
    }
  },
  methods: {
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
          this.currentStep = 99
          break
      }
    },
  },
  computed: {
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
  },
}
</script>

<style scoped></style>
