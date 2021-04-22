<template>
  <button :class="{ active: isActive }" @click.prevent.self="emitClick">
    <img :src="menuIcon" v-if="menuIcon" alt="" />
    {{ menu }}
  </button>
</template>

<script lang="ts">
import TabMenuItem from "@/pages/request-quote/components/TabMenuItem"

export default TabMenuItem.extend({
  name: "TabMenuButton",
})
</script>

<style lang="scss" scoped>
@import "~@/pages/request-quote/assets/default.scss";

button {
  @apply inline-block mr-4 relative pr-2;
  @extend .sub-headline;
  color: black;
  opacity: 0.7;
  margin: 0.25rem;
  &:last-of-type {
    @apply mr-0;
  }

  &.active {
    @apply font-bold;
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
</style>
