declare module "vue-mq" {
  import { PluginObject } from "vue"

  interface VueMq extends PluginObject<{ $mq: "sm" | "md" | "lg" | "xl" }> {
    VueMq: VueMq
  }

  const VueMq: VueMq
  export default VueMq
}
