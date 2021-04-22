<template>
  <FormulateForm v-model="formValues" name="EventQuoteRequest" @submit="submit" ref="mainForm">
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

    <FormulateInput type="submit" :label="$t('request-quote.labels.next')"></FormulateInput>
    <button @click.prevent.self="goBack" v-html="$t('request-quote.labels.prev')"></button>
  </FormulateForm>
</template>

<script lang="ts">
import RequestQuoteForm from "@/pages/request-quote/components/RequestQuoteForm"

export default RequestQuoteForm.extend({
  name: "RequestQuoteSecondForm",
})
</script>

<style lang="scss" scoped>
form {
  @apply m-2 p-2;
  .formulate-input {
    @apply m-2 p-2 border border-gray-500;
    ::v-deep button {
      @apply w-full bg-green-400;
    }
  }
}
</style>
<style scoped></style>
