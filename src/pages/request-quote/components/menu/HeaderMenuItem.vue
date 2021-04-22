<template>
  <router-link :class="checkedClass" :to="to" @click.native="handleClick"><slot /> </router-link>
</template>

<script>
export default {
  name: "HeaderMenuItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      checked: false,
    }
  },
  methods: {
    handleClick(ev) {
      if (this.item?.link) {
        window.open(this.item.link, this.item.target)
        ev.preventDefault()
        return
      }

      if (this.to.hash && this.to.hash === window.location.hash) {
        window.location.hash = "#"
        window.location.hash = this.to.hash
        ev.preventDefault()
        return
      }
    },
  },
  computed: {
    to() {
      return this.item?.to ?? {}
    },
    size() {
      return this.item?.size ?? "normal"
    },
    target() {
      return this.item?.target
    },
    active() {
      return this.item?.active
    },
    checkedClass() {
      return {
        "item--active": this.active,
        large: this.size === "large",
        medium: this.size === "medium",
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "~@/pages/request-quote/assets/default.scss";

a {
  @extend .button-text--tab;
  @apply text-center;
  min-width: 4em;
  max-width: 10em;
  height: $menuHeight;
  line-height: $menuHeight;
  margin: 0 0.75rem;
  &.large {
    width: 6em;
  }
  &.medium {
    width: 5em;
  }

  border-bottom: 3px solid transparent;
  transition: border-bottom-color 0.4s;

  &:hover {
    border-color: $lightColor;
  }

  &.item--active {
    border-color: $defaultColor;
    font-weight: bold;
    color: #1C1D1E;
  }
}
</style>
