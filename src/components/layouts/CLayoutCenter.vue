<template>
  <main :style="fetchedStyle">
    <slot />
  </main>
</template>

<script lang="ts">
import HasFetchedStyle from "@/mixins/HasFetchedStyle"

export default HasFetchedStyle.extend({
  name: "CLayoutCenter",
})
</script>

<style lang="scss" scoped>
main {
  @apply h-screen p-0 w-full flex flex-col items-center justify-center flex-wrap flex-initial;

  @screen md {
    @apply p-12;
  }

  @screen lg {
    @apply p-16;
  }

  & > * {
    width: 100%;
    max-width: 80rem;
  }
}
</style>
