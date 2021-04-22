<template>
  <p>
    <span class="number">{{ counter }}</span>
    <span :class="{ plus: true, 'plus--complete': complete }">
      <i class="fal fa-plus"></i>
    </span>
  </p>
</template>

<script>
import { TimelineLite } from "gsap"

export default {
  name: "CounterPlus",
  props: {
    count: {
      type: Number,
      required: true,
      default: () => 0,
    },
  },
  beforeMount() {
    const tl = new TimelineLite()
    tl.fromTo(
      this,
      { counter: 0 },
      {
        counter: this.count,
        duration: 1,
        snap: {
          counter: 1,
        },
        onComplete: () => {
          this.complete = true
        },
      },
    )
    this.timeline = tl
  },
  methods: {
    play() {
      if (this.timeline) {
        this.timeline.play()
      }
    },
    reverse() {
      if (this.timeline) {
        this.timeline.reverse()
      }
    },
  },
  data() {
    return {
      counter: 0,
      complete: false,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "~@/pages/request-quote/assets/default.scss";

.plus {
  font-size: 0.8em;
  vertical-align: text-top;
  opacity: 0;
  color: $defaultColor;
  transition: opacity 0.5s;
  margin-left: 0.2em;
  &--complete {
    opacity: 1;
  }
}
</style>
