<template>
  <article>
    <section class="image-container" :class="{ 'image-container--fullsize': !hasClient }" v-if="imageList">
      <img :key="image" v-for="image in imageList" :src="image" alt="" />
    </section>
    <section class="image-container" :class="{ 'image-container--fullsize': !hasClient }" v-if="linkList">
      <a :key="link.link" v-for="link in linkList" :href="link.link" target="_blank">
        <img :src="link.image" alt=""
      /></a>
    </section>
    <section class="clientCounter" v-if="hasClient">
      <CounterPlus class="headline2 headline2--counter" :count="clientCount" />
      <h3 class="base-body">OUR CLIENTS</h3>
      <p class="sub-headline sub-headline--description" v-html="description">CLIENT</p>
    </section>
  </article>
</template>

<script lang="ts">
import TabMenuItem from "@/pages/request-quote/components/TabMenuItem"
import CounterPlus from "@/pages/request-quote/components/CounterPlus.vue"

export default TabMenuItem.extend({
  name: "TabMenuItem",
  components: { CounterPlus },
  computed: {
    clientCount() {
      return this.value.clients ?? 0
    },
    description() {
      return this.value.description
    },
    hasClient() {
      return this.value.clients ?? false
    },
  },
})
</script>

<style lang="scss" scoped>
@import "~@/pages/request-quote/assets/default.scss";
article {
  @apply flex flex-wrap;
  section {
    @apply w-1/2;
    &.image-container {
      @apply flex flex-wrap;
      img {
        @apply w-1/2;
      }
      &--fullsize {
        @apply w-full;
        gap: 1.2rem;
        a > img {
          @apply w-full;
        }
      }
    }
  }

  .sub-headline--description {
    margin-top: $space-l;
    margin-bottom: $space-l;
    color: rgba(0, 0, 0, 0.7);
    ::v-deep strong {
      color: $defaultColor;
      font-weight: normal;
    }
    &--narrow {
      margin-top: $space-s;
      margin-bottom: $space-s;
    }
  }
}

.clientCounter{
  margin-top: auto;
  margin-bottom: auto;
}
</style>
