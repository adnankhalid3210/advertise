<template>
  <FormulateForm
    v-model="formValues"
    :name="formName"
    @submit="submit"
    ref="eventForm"
    class="rounded-lg shadow-xl p-4"
    :class="formClass"
  >
    <FormulateInput
      name="client_name"
      type="text"
      :label="$t('request-quote.labels.client_name')"
      required
    ></FormulateInput>
    <FormulateInput
      name="client_email"
      type="text"
      :label="$t('request-quote.labels.email_address')"
      required
    ></FormulateInput>
    <FormulateInput
      name="client_mobile"
      type="text"
      :label="$t('request-quote.labels.mobile_number')"
      required
    ></FormulateInput>
    <FormulateInput
      name="client_organization"
      type="text"
      :label="$t('request-quote.labels.client_organization')"
    ></FormulateInput>

    <FormulateInput name="event_type" type="text" :label="$t('request-quote.labels.event_type')"></FormulateInput>
    <FormulateInput
      name="event_open_type"
      type="text"
      :label="$t('request-quote.labels.event_open_type')"
    ></FormulateInput>
    <FormulateInput name="event_size" type="text" :label="$t('request-quote.labels.event_size')"></FormulateInput>
    <FormulateInput name="event_place" type="text" :label="$t('request-quote.labels.event_place')"></FormulateInput>
    <FormulateInput
      name="event_schedule"
      type="text"
      :label="$t('request-quote.labels.event_schedule')"
    ></FormulateInput>
    <FormulateInput name="memo" type="text" :label="$t('request-quote.labels.memo')"></FormulateInput>

    <FormulateInput name="state" type="text" :label="$t('request-quote.labels.state')"></FormulateInput>

    <FormulateErrors />

    <FormulateInput type="submit" :label="$t(isUpdate ? 'submit.modify' : 'submit.create')" />
  </FormulateForm>
</template>

<script>
import baseForm from "@/mixins/base-feature-form"
import imageHolderForm from "@/mixins/image-holder-form"

export default {
  mixins: [baseForm, imageHolderForm],
  name: "CEventForm",
  data() {
    return {
      eventTypeList: {
        webinar: this.$t("webinar"),
        normal: this.$t("normal"),
      },
    }
  },
  computed: {
    isAdmin() {
      return (
        this.$store.state.session?.type === "account.type.Admin" ||
        this.$store.state.session?.type === "account.type.SuperAdmin"
      )
    },
  },
  i18n: {
    messages: {
      en: {
        stringified_setting: "설정",
        live: "라이브",
        draft: "작업중",
        finished: "행사 종료",
        canceled: "취소",
        webinar: "웨비나",
        normal: "일반",
      },
      ko: {
        stringified_setting: "설정",
        live: "라이브",
        draft: "작업중",
        finished: "행사 종료",
        canceled: "취소",
        webinar: "웨비나",
        normal: "일반",
      },
    },
  },
}
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/form.scss";
</style>
