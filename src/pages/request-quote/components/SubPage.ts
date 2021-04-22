import ko from "@/pages/request-quote/locales/ko"
import Vue from "vue"

export default Vue.extend({
  i18n: {
    messages: {
      ko,
    },
  },
  data() {
    return {
      upperBound: 0,
      lowerBound: 0,
      height: 0,
      scrollArea: false,
    }
  },
  mounted() {
    this.updatePosition()
    this.scrollArea = document.location.hash === `#${this.$el.id}`
    if (this.scrollArea) {
      this.$emit("aos-in")
    }
  },
  methods: {
    checkPosition(scrollTop) {
      scrollTop += this.height * 0.56
      if (this.scrollArea) {
        if (!(scrollTop >= this.upperBound && scrollTop < this.lowerBound)) {
          this.scrollArea = false
          this.$emit("aos-out", { scrollTop, upperBound: this.uppperBound, lowerBound: this.lowerBound })
        }
      } else if (scrollTop >= this.upperBound && scrollTop < this.lowerBound) {
        this.$emit("aos-in", { scrollTop, upperBound: this.uppperBound, lowerBound: this.lowerBound })
        this.scrollArea = true
      }
      return this.scrollArea
    },
    updatePosition() {
      const { y, height } = this.$el.getBoundingClientRect()
      this.upperBound = y
      this.lowerBound = this.upperBound + height
      this.height = height
    },
  },
})
