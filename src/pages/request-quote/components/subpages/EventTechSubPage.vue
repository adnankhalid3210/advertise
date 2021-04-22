<template>
  <section>
    <h1 class="headline2" v-html="$t('event-tech.event-tech')"></h1>
    <h2 class="sub-headline" v-html="$t('event-tech.description')"></h2>
    <TabMenuAlter class="alter" :list="techList" />
    <section class="blog">
      <img :src="require('../../assets/icons/ico_blog.svg')"/>
      <h1 class="headline2" v-html="$t('blog.blog')"></h1>
      <p class="sub-headline" v-html="$t('blog.description')"></p>
      <a class="button button--border" target="_blank" href="https://blog.congkong.net" v-html="$t('blog.link')"
        >소개서 다운</a
      >
    </section>
  </section>
</template>

<script lang="ts">
import SubPage from "@/pages/request-quote/components/SubPage"
import TabMenu from "@/pages/request-quote/components/tabl-alter/TabMenuAlter.vue"
import TabMenuAlter from "@/pages/request-quote/components/tabl-alter/TabMenuAlter.vue"
import techList from "../../assets/tech-list.json"

export default SubPage.extend({
  name: "EventTechSubPage",
  components: { TabMenuAlter, TabMenu },
  computed: {
    techList() {
      console.log(techList)
      return techList.map((t) => ({
        ...t,
        menuIcon: require(`@/pages/request-quote/assets/icons/${t.menuIcon}`),
        menu: this.$t(t.menu),
        description: this.$t(t.description),
      }))
    },
  },
})
</script>

<style lang="scss" scoped>
@import "~@/pages/request-quote/assets/default.scss";
.blog {
  @apply text-center;
  margin: $space-xl auto 0;
  & > img {
    @apply inline-block;
  }

  .button {
    font-size: 1.5em;
  }
}
</style>
