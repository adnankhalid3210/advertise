<template>
  <article>
    <!-- <img :src="image" alt="" /> -->
    <img :src="require('../../assets/img_mockup_phone.png')" class="phone-mockup" />
    <h3 class="base-body">{{ menu }}</h3>
    <p class="description" v-html="description"></p>
  </article>
</template>

<script lang="ts">
import TabMenuItem from "@/pages/request-quote/components/TabMenuItem"
import CounterPlus from "@/pages/request-quote/components/CounterPlus.vue"

export default TabMenuItem.extend({
  name: "TabMenuContentAlter",
  components: { CounterPlus },
  computed: {
    description() {
      return this.value.description
    },
    image() {
      console.log(this.value.description)
      return this.value.image
    },
  },
})
</script>

<style lang="scss" scoped>
@import "~@/pages/request-quote/assets/default";
article {
  @apply flex flex-wrap w-1/2 block text-center;

  .description {
    color: $gray4;
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

.phone-mockup{
  width:300px;
  margin:0 auto 30px;
}
</style>
