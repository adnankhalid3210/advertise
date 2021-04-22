<template>
  <TTablePage
    v-bind="{ ...$attrs, ...$props }"
    :column-names="[
      $t('labels.client_name'),
      $t('labels.client_mobile'),
      $t('labels.client_email'),
      $t('labels.event_type'),
      $t('labels.event_open_type'),
      $t('labels.event_size'),
      $t('labels.state'),
    ]"
    :columns="[
      'client_name',
      'client_mobile',
      'client_email',
      'event_type',
      'event_open_type',
      'event_size',
      'client_state',
    ]"
  >
    <template #itemRow="{ columnItems }">
      <td :key="`${col.text}-${idx}`" v-for="(col, idx) in columnItems">
        <router-link v-if="col.to" :to="col.to" class="w-full block">
          <i v-if="idx === 3 && /live/.test(col.value)" style="color: #ff6347" class="fas fa-exclamation-triangle"></i>
          {{ col.text ? col.text : $t("labels.blank") }}
        </router-link>
      </td>
    </template>
  </TTablePage>
</template>

<script>
import TTablePage from "@/components/templates/TTablePage"

export default {
  name: "QuoteManagementMain",
  components: { TTablePage },
}
</script>
