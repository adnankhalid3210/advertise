import Vue from "vue"
import { createChannelIO, removeChannelIO } from "@/libs/Channel"

export default Vue.extend({
  mounted() {
    createChannelIO()
  },
  beforeDestroy() {
    removeChannelIO()
  },
})
