<template>
  <section>
    <h1 class="headline2" v-html="$t('contact.contact')"></h1>
    <section class="contact-container">
      <article class="w-1/2">
        <p class="title">{{ $t("contact.address") }}</p>
        <p class="data">{{ $t("contact.address-data") }}</p>
      </article>
      <article>
        <p class="title">{{ $t("contact.address") }}</p>
        <p class="data">
          <span class="label">{{ $t("contact.tel") }}</span>
          <a :href="`tel:${$t('contact.tel-data')}`">
            <span class="data--red">{{ $t("contact.tel-data") }}</span>
          </a>
          <br />
          <span class="label">{{ $t("contact.email") }}</span>
          <a :href="`mailto:${$t('contact.email-data')}`"
            ><span class="data--red">{{ $t("contact.email-data") }}</span></a
          >
        </p>
      </article>
    </section>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332.72962151190126!2d127.02488241399367!3d37.496702635871245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x240f28e13b8db77!2z7ZSM656Y7Yuw64SY7YOA7JuM!5e0!3m2!1sko!2skr!4v1616967177584!5m2!1sko!2skr"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </section>
</template>

<script lang="ts">
import SubPage from "@/pages/request-quote/components/SubPage"

export default SubPage.extend({
  name: "ContactSubPage",
})
</script>

<style lang="scss" scoped>
@import "~@/pages/request-quote/assets/default";
iframe {
  width: 100%;
  height: 40rem;
  min-height: 500px;
}

.contact-container {
  @apply flex;
  margin: $space-s auto $space-m auto;
  p {
    @extend .base-body;

    &.title {
      color: $gray4;
    }

    .label {
      &::after {
        content: " : ";
      }
    }

    .data--red {
      color: $defaultColor;
    }
  }
}
</style>
