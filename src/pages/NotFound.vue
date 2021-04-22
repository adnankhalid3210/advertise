<template>
  <div>
    {{ this.$route.params.bad }}
    {{ $t("not_found") }}
    <router-link class="action-button" to="/">{{ $t("main") }}</router-link>
  </div>
</template>
<script>
export default {
  i18n: {
    messages: {
      en: {
        not_found: "not found",
      },
      ko: {
        main: "메인",
      },
    },
  },
}
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/form.scss";
</style>
