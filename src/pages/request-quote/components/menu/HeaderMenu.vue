<template>
  <header>
    <HeaderMenuItem :item="{ to: { name: 'Main' }, size: 'large' }">
      <img class="h-full inline-block" src="~@/assets/congkong-logo.svg" alt="congkong logo" />
    </HeaderMenuItem>
    <HeaderMenuItem :key="idx" v-for="(item, idx) in menus" :item="item" @click="$emit('click', item)">
      {{ $t(item.label) }}</HeaderMenuItem
    >
    <a
      class="button--border header__button header__button--spacer"
      href="https://drive.google.com/file/d/1-7bazvklCuQWwnXssL1D9UQ908zZtoIo/view?usp=sharing"
      target="_blank"
      v-text="$t('request-quote.download-catalogue')"
      >소개서 다운로드</a
    >
    <router-link class="button--border header__button" :to="{ name: 'Login' }" v-text="$t('login.labels.button')"
      >로인
    </router-link>
    <router-link
      class="request-button header__button--default header__button bgChange"
      v-text="$t('request-quote.request-quote')"
      :to="{ name: 'RequestQuote' }"
    >
    </router-link>
  </header>
</template>

<script>
import HeaderMenuItem from "@/pages/request-quote/components/menu/HeaderMenuItem.vue"
export default {
  name: "HeaderMenu",
  components: { HeaderMenuItem },
  props: {
    menus: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>
<style scoped lang="scss">
@import "~@/pages/request-quote/assets/default.scss";
header {
  @apply border-b border-gray-600 bg-white flex flex-row justify-start w-full;
  z-index: 30;
  .spacer {
    margin-left: auto;
  }
  .header__button {
    @extend .button-text;
    @apply self-center;
    padding-left: 1em;
    padding-right: 1em;
    margin-right: 0.5rem;
    border-radius: 0.25rem;
    height: 2.5em;
    line-height: 2.5em;
    &--spacer {
      @apply ml-auto;
    }

    &--default {
      margin-right: 4rem;
    }
  }
}
</style>
