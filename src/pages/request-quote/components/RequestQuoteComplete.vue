<template>
  <section>
    <router-link :to="{ name: 'Main' }" v-html="$t('request-quote.labels.home')"></router-link>
  </section>
</template>

<script>
export default {
  name: "RequestQuoteSecondForm",
  data() {
    return {
      formValues: {},
    }
  },
  methods: {
    submit(v) {
      console.log(v)
    },
  },
}
</script>

<style scoped></style>
