import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      formValues: {},
    }
  },
  methods: {
    goBack() {
      this.$emit("prev", this.formValues)
    },
    submit(v) {
      this.$emit("next", v)
    },
  },
})
