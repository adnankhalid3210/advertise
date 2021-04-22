<template>
  <section>
    <h1 class="headline2" v-html="$t('main-carrousel.main')"></h1>
    <h3 class="sub-headline" v-html="$t('main-carrousel.description0')"></h3>
    <h3 class="sub-headline" v-html="$t('main-carrousel.description1')"></h3>

    <section class="flex-row">
      <router-link class="request-button" :to="{ name: 'RequestQuote' }" v-html="$t('request-quote.request-quote')"
        >이벤트 견적 신청</router-link
      >
      <MainCarrouselImage ref="mainCarrouselImage" />
    </section>
    <h2 class="headline3" v-html="$t('main-carrousel.second-paragraph')"></h2>
    <h3 class="sub-headline sub-headline--narrow" v-html="$t('main-carrousel.journey-description')"></h3>
    <a
      class="button button--border"
      target="_blank"
      href="https://drive.google.com/file/d/1-7bazvklCuQWwnXssL1D9UQ908zZtoIo/view?usp=sharing"
      v-html="$t('request-quote.download-catalogue')"
      >소개서 다운</a
    >
    <ul class="journey-list">
      <li v-for="(item, idx) in journeyList" :key="item.title" class="journey-list__item">
        <img class="top-relative" :src="require(`@/pages/request-quote/assets/img_num_${idx + 1}.svg`)" />
        <img class="block m-auto" :src="require(`@/pages/request-quote/assets/icons/${item.image}.svg`)" />

        <h3>{{ item.title }}</h3>
        <p class="description" v-html="item.description"></p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import SubPage from "@/pages/request-quote/components/SubPage"
import MainCarrouselImage from "@/pages/request-quote/components/MainCarrouselImage.vue"

export default SubPage.extend({
  name: "MainCarrousel",
  components: { MainCarrouselImage },
  beforeMount() {
    this.$on("aos-in", this.playAnimation)
    this.$on("aos-out", this.playReversedAnimation)
  },
  methods: {
    playAnimation() {
      if (this.$refs.mainCarrouselImage) {
        this.$refs.mainCarrouselImage.reverse()
      }
    },
    playReversedAnimation() {
      if (this.$refs.mainCarrouselImage) {
        this.$refs.mainCarrouselImage.play()
      }
    },
  },
  computed: {
    journeyList() {
      return [
        {
          title: "이벤트 개설",
          description: "원하는 기능만 선택하여<br> 이벤트 개설",
          icon: "ico_setting.svg",
          image: 'ico_setting'
        },
        {
          title: "사전등록 관리",
          description: "바코드 티켓도 <br>메세지 발송으로 간편 설정",
          icon: "ico_regist.svg",
          image: 'ico_regist'

        },
        {
          title: "체크인",
          description: "실시간 참석자수를<br> 모바일로 확인",
          icon: "ico_check.svg",
          image: 'ico_check'

        },
        {
          title: "운영",
          description: "모든 기능을 실시간으로<br> 편리하게 작동",
          icon: "ico_live.svg",
          image: 'ico_live'

        },
        {
          title: "응대",
          description: "사용자 문의를<br> 바로 확인 가능",
          icon: "ico_response.svg",
          image: 'ico_response'

        },
        {
          title: "클로징",
          description: "설문조사 및 경품 추첨<br> 기능 또한 제공",
          icon: "ico_gift.svg",
          image: 'ico_gift'

        },
      ].map((el) => ({
        ...el,
        icon: require(`@/pages/request-quote/assets/icons/${el.icon}`),
      }))
    },
  },
})
</script>

<style scoped lang="scss">
@import "~@/pages/request-quote/assets/default";

section {
  padding-top: $space-xl;
  @apply relative;

  &.flex-row {
    @apply static p-0 flex;
    height: 20rem;

    & > .request-button {
      flex-grow: 0;
      background: transparent linear-gradient(106deg, #ff606d 0%, #f33737 100%) 0% 0% no-repeat padding-box;
      border-radius: 6px;
    }
    & ::v-deep figure {
      flex-grow: 1;
      height: 20rem;
    }
  }
}

.headline2 {
  margin-top: $space-xl;
  ::v-deep strong {
    color: $defaultColor;
  }
}

.headline3 {
  margin-top: $space-xl;
}

.button {
  @extend .button-text;
  @apply self-center inline-block text-center;
  padding-left: 1em;
  padding-right: 1em;
  margin-right: 0.5rem;
  border-radius: 0.25rem;
  height: 2.5em;
  line-height: 2.5em;
  font-size: 1.25rem;
  width: 10em;

  &--border {
    color: $defaultColor;
    border: 1px solid $defaultColor;
    margin-top: $space-m;
    margin-bottom: $space-m;
    transition: border-color 0.4s, color 0.4s, background-color 0.4s;
  }
}

.journey-list {
  @apply flex w-full justify-evenly;
  &__item {
    flex: 1 1 0;
    @apply m-auto text-center;
        background: #F8FAFA 0% 0% no-repeat padding-box;
    border-radius: 8px;
    margin-right: 14px;
    padding-bottom:35px;
    margin-top: 50px;
    h3 {
      @apply font-bold;
      margin: 1.25rem auto $space-xs;
    }

    .description {
      font-size: 0.9em;
      color: $gray4;
      margin: $space-xs auto;
    }
    img {
      @apply block;
      margin: $space-xs auto;
      max-width: 2.5em;
      box-sizing: content-box;
      &:first-of-type {
        @apply pr-32;
      }
    }
  }
}

.top-relative{
  position: relative;
    top: -25px;
}
</style>
