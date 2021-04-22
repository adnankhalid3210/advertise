<template>
  <button :class="{ active: isActive }" @click.prevent="emitClick">
    <img :src="menuIcon" v-if="menuIcon" alt="" />
    <span>
      {{ menu }}
    </span>
  </button>
</template>

<script lang="ts">
import TabMenuItem from "@/pages/request-quote/components/TabMenuItem"

export default TabMenuItem.extend({
  name: "TabMenuButtonAlter",
})
</script>

<style lang="scss" scoped>
@import "~@/pages/request-quote/assets/default";



button {
  @apply inline-block relative text-left;
  @extend .sub-headline;
  color: black;
  opacity: 0.7;
  &.active {
    span {
      @apply font-bold relative inline-block text-left;
      opacity: 1;

      &::after {
        position: absolute;
        display: block;
        content: "";
        border-radius: 50%;
        background-color: $defaultColor;
        width: 0.3em;
        height: 0.3em;
        right: 0.1em;
        top: 0.1em;
      }
    }
  }
}
</style>
