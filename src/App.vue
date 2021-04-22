<template>
  <router-view />
</template>
<script>
import Swal from "sweetalert2"

export default {
  beforeCreate() {
    if (!navigator.cookieEnabled) {
      Swal.fire("" + this.$t("errors.cookie_inactive-title"), "" + this.$t("errors.cookie_inactive-message"))
    }
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap");

html,
body {
  width: 100%;
  min-width: 100%;
  min-height: 100%;
  height: 100%;
  // default font size = 1rem = 16px
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
  overflow: visible;
  margin: 0;
  padding: 0;
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
}
</style>
<style lang="scss"></style>
