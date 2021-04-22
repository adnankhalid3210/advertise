<template>
  <CLayoutCenter>
    <CLoginForm></CLoginForm>
  </CLayoutCenter>
</template>
<script>
import CLoginForm from "@/components/organisms/forms/CLoginForm.vue"
import CLayoutCenter from "@/components/layouts/CLayoutCenter.vue"

export default {
  components: {
    CLayoutCenter,
    CLoginForm,
  },
}
</script>
