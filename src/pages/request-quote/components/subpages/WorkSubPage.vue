<template>
  <section>
    <section class="work-sub">
      <h1 class="headline2" v-html="$t('work-subpage.work')"></h1>
      <h2 class="sub-headline" v-html="$t('work-subpage.description')"></h2>
      <TabMenu :list="clientList"></TabMenu>
    </section>
    <section class="work-sub work-sub--events">
      <CounterPlus class="headline2 headline2--counter" :count="eventCount" />
      <h3 class="base-body">OUR EVENTS</h3>
      <p class="sub-headline sub-headline--description" v-html="$t('work-subpage.event-description')"></p>
      <TabMenu class="text-center" :list="eventList"></TabMenu>
    </section>
  </section>
</template>

<script>
import SubPage from "@/pages/request-quote/components/SubPage"
import TabMenu from "@/pages/request-quote/components/tab/TabMenu"
import CounterPlus from "@/pages/request-quote/components/CounterPlus"
import clientList from "@/pages/request-quote/assets/client-list.json"
import eventList from "@/pages/request-quote/assets/event-list.json"

export default SubPage.extend({
  name: "WorkSubPage",
  components: { CounterPlus, TabMenu },
  computed: {
    eventList() {
      return eventList.map((el) => ({
        ...el,
        linkList: el.linkList.map((l) => ({ ...l, image: require(`@/pages/request-quote/assets/banners/${l.image}`) })),
        menu: this.$t(el.menu),
      }))
    },
    clientList() {
      return clientList.map((el) => ({
        ...el,
        imageList: el.imageList.map((image) => require(`@/pages/request-quote/assets/work/${image}`)),
        menu: this.$t(el.menu),
        description: this.$t(el.description),
      }))
    },
  },
  data() {
    return {
      eventCount: 800,
    }
  },
})
</script>

<style lang="scss" scoped>
@import "~@/pages/request-quote/assets/default.scss";
.work-sub {
  &--events {
    margin-top: $space-xl;
    @apply text-center;
  }
}

.text-center {
  ::v-deep .tab {
    margin: auto;
    max-width: 40em;
  }
}
</style>
