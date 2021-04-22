<template>
  <FormulateForm class="login-form" name="login" v-model="formValues" @submit="submit" ref="loginForm">
    <FormulateInput
      name="name"
      type="text"
      :label="$t('labels.id')"
      :placeholder="$t('placeholders.account_name')"
      validation="required"
    />
    <FormulateInput name="password" type="password" :label="$t('labels.password')" validation="required" />
    <FormulateErrors />
    <FormulateInput type="submit" :label="$t('submit.login')" />
  </FormulateForm>
</template>

<script>
import Swal from "sweetalert2"

export default {
  props: {
    value: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      formValues: {},
      formErrors: [],
      inputErrors: {},
    }
  },
  computed: {
    isUpdate() {
      return !!this.formValues.id
    },
    badRequestMessage() {
      return this.$t("errors.bad_request")
    },
    duplicatedMessage() {
      return this.$t("errors.duplicate")
    },
    notFoundMessage() {
      return this.$t("errors.not_found")
    },
  },
  methods: {
    handleError(e) {
      const status = e.response?.status
      if (!status) {
        return
      }
      const errors = []
      switch (status) {
        case 400:
          errors.push(this.badRequestMessage)
          break
        case 404:
          errors.push(this.notFoundMessage)
          break
        case 409:
          errors.push(this.duplicatedMessage)
          break
        default:
          Swal.fire(JSON.stringify(e))
          console.error(JSON.stringify(e))
          console.error(e)
          return
      }
      this.$formulate.handle(
        {
          inputErrors: {},
          formErrors: errors,
        },
        this.formName,
      )
    },
    resetErrors() {
      // reset error
      this.$formulate.handle({}, this.formName)
    },
    async submit() {
      try {
        await this.$store.dispatch("login", this.formValues)
      } catch (e) {
        const status = e.response?.status
        if (status === 404 || status === 400) {
          const localeMessages = this.$t("errors.login_invalid")
          this.$formulate.handle(
            {
              inputErrors: {},
              formErrors: [localeMessages],
            },
            "login",
          )
          return
        }
        Swal.fire(JSON.stringify(e))
        console.error(JSON.stringify(e))
        console.error(e)
        return
      }
      let location = {}
      const redirect = this.$route.query?.redirect
      location = redirect
        ? {
            path: redirect,
          }
        : {
            name: "EventManagementMain",
          }
      await this.$router.replace(location)
    },
  },
}
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/form.scss";

.login-form {
  @apply max-w-md;
}
</style>
