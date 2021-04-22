import Vue from "vue"

export default Vue.extend({
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  methods: {
    emitClick() {
      if (this.isActive) {
        return
      }
      this.$emit("activate", this.value)
    },
  },
  computed: {
    isActive() {
      return this.value.active
    },
    menu() {
      return this.value.menu
    },
    menuIcon() {
      return this.value.menuIcon
    },
    imageList() {
      return this.value.imageList
    },
    linkList() {
      return this.value.linkList
    },
  },
})
