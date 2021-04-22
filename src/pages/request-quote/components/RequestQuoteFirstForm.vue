<template>
  <FormulateForm v-model="formValues" name="EventQuoteRequest" @submit="submit" ref="mainForm">
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
    <FormulateInput type="submit" :label="$t('request-quote.labels.next')"></FormulateInput>
  </FormulateForm>
</template>

<script lang="ts">
import RequestQuoteForm from "@/pages/request-quote/components/RequestQuoteForm"

export default RequestQuoteForm.extend({
  name: "RequestQuoteFirstForm",
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
