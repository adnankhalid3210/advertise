<template>
  <figure>
    <img src="@/pages/request-quote/assets/bg.svg" alt="" class="main-image__item main-image__item-bg" />
    <img src="@/pages/request-quote/assets/img_dot.svg" alt="" class="main-image__item main-image__item-bg2" />

    <img
      ref="particle1"
      src="@/pages/request-quote/assets/img_shapes_6.svg"
      class="main-image__item main-image__item-1"
      alt=""
    />
    <img
      ref="particle2"
      src="@/pages/request-quote/assets/img_shapes_2.svg"
      class="main-image__item main-image__item-2"
      alt=""
    />
    <img
      ref="particle3"
      src="@/pages/request-quote/assets/img_shapes_3.svg"
      class="main-image__item main-image__item-3"
      alt=""
    />
    <img
      ref="particle4"
      src="@/pages/request-quote/assets/img_shapes_4.svg"
      class="main-image__item main-image__item-4"
      alt=""
    />
    <img
      ref="particle5"
      src="@/pages/request-quote/assets/img_shapes_5.svg"
      class="main-image__item main-image__item-5"
      alt=""
    />
    <img
      ref="particle6"
      src="@/pages/request-quote/assets/img_shapes_1.svg"
      class="main-image__item main-image__item-6"
      alt=""
    />

    <img
      src="@/pages/request-quote/assets/img_laptop.png"
      class="main-image__item main-image__item-laptop"
      ref="laptopImage"
    />
    <img
      src="@/pages/request-quote/assets/img_tablet.png"
      class="main-image__item main-image__item-tablet"
      ref="tabletImage"
    />
    <img
      src="@/pages/request-quote/assets/img_mobile.png"
      class="main-image__item main-image__item-mobile"
      ref="mobileImage"
    />

    <img
      ref="dashboard1"
      src="@/pages/request-quote/assets/img_dashboard_1.svg"
      class="main-image__item main-image__item-dashboard-1"
    />
    <img
      ref="dashboard2"
      src="@/pages/request-quote/assets/img_dashboard_2.svg"
      class="main-image__item main-image__item-dashboard-2"
    />
    <img
      ref="dashboard3"
      src="@/pages/request-quote/assets/img_dashboard_3.svg"
      class="main-image__item main-image__item-dashboard-3"
    />
  </figure>
</template>

<script>
import gsap, { TimelineLite } from "gsap"

export default {
  name: "MainCarrouselImage",
  data() {
    return {
      tl: null,
      duration: 0.5,
    }
  },
  methods: {
    progress(p) {
      if (this.tl) {
        this.tl.progress(p)
      }
    },
    play() {
      if (this.tl) {
        this.tl.play()
      }
    },
    reverse() {
      if (this.tl) {
        this.tl.reverse()
      }
    },
  },
  mounted() {
    const tl = new TimelineLite({
      paused: true,
    })
    const { dashboard1, dashboard2, dashboard3, laptopImage, tabletImage, mobileImage } = this.$refs
    tl.add(
      gsap.to(laptopImage, {
        duration: this.duration,
        ease: "none",
        css: {
          right: "+=19%",
          opacity: 0,
        },
      }),
      0,
    )

    tl.add(
      gsap.to(dashboard1, {
        duration: this.duration,
        ease: "none",
        css: {
          right: "+=15%",
          opacity: 0,
        },
      }),
      0,
    )

    tl.add(
      gsap.to(tabletImage, {
        duration: this.duration,
        ease: "none",
        css: {
          bottom: "+=35%",
          opacity: 0,
        },
      }),
      0,
    )

    tl.add(
      gsap.to(dashboard2, {
        duration: this.duration,
        ease: "none",
        css: {
          right: "-=30%",
          bottom: "+=42%",
          opacity: 0,
        },
      }),
      0,
    )

    tl.add(
      gsap.to(mobileImage, {
        duration: this.duration,
        ease: "none",
        css: {
          right: "-=40%",
          opacity: 0,
        },
      }),
      0,
    )

    tl.add(
      gsap.to(dashboard3, {
        duration: this.duration,
        ease: "none",
        css: {
          right: "-=50%",
          opacity: 0,
        },
      }),
      0,
    )
    this.tl = tl
    tl.progress(1)
    this.$nextTick(() => {
      tl.reverse()
    })
  },
}
</script>

<style lang="scss" scoped>
figure {
  @apply inline-block right-0 bottom-0 relative;
  .main-image__item {
    @apply absolute;
    &-bg {
      right: 5%;
      width: 50%;
      bottom: 0;
    }
    &-bg2 {
      left: 0;
      width: 20%;
      bottom: 10%;
    }
    &-1 {
      top: 0;
      right: 40%;
    }

    &-2 {
      bottom: 3%;
      right: 2%;
      transform: matrix(0.91, 0.41, -0.41, 0.91, 0, 0);
    }

    &-3 {
      bottom: 55%;
      right: 40%;
      transform: matrix(0.91, 0.41, -0.41, 0.91, 0, 0);
    }

    &-4 {
      top: 40%;
      left: 31%;
      transform: matrix(0.91, 0.41, -0.41, 0.91, 0, 0);
    }

    &-5 {
      top: 50%;
      right: 5%;
      transform: matrix(0.91, 0.41, -0.41, 0.91, 0, 0);
    }

    &-6 {
      top: 12%;
      left: 90%;
      transform: matrix(0.91, 0.41, -0.41, 0.91, 0, 0);
    }

    &-laptop {
      bottom: 10%;
      right: 24%;
      z-index: 15;
      width: 40%;
    }
    &-dashboard-1 {
      bottom: 25%;
      width: 17%;
      right: 45%;
      z-index: 20;
    }

    &-mobile {
      bottom: 10%;
      right: 5%;
      z-index: 15;
      width: 8%;
    }

    &-dashboard-2 {
      bottom: 5%;
      right: 24%;
      z-index: 20;
      width: 8%;
    }

    &-tablet {
      bottom: 12%;
      right: 10%;
      z-index: 5;
      width: 24%;
    }

    &-dashboard-3 {
      bottom: 46%;
      right: 5%;
      z-index: 20;
      width: 18%;
    }
  }
}
</style>
