<template>
  <section>
    <TabMenuContentAlter
      class="content"
      :key="`${item.menu}${item.active}`"
      v-for="item in menuList"
      :value="item"
      v-show="item.active"
    />
    <ul class="tab">
      <TabMenuButtonAlter
        v-for="(item, idx) in menuList"
        :value="item"
        @activate="activate(idx, $event)"
        :key="`${item.menu}${item.active}`"
      />
    </ul>
  </section>
</template>

<script>
import TabMenuButtonAlter from "@/pages/request-quote/components/tabl-alter/TabMenuButtonAlter"
import TabMenuContentAlter from "@/pages/request-quote/components/tabl-alter/TabMenuContentAlter"

export default {
  name: "TabMenuAlter",
  components: { TabMenuContentAlter, TabMenuButtonAlter },
  methods: {
    activate(idx, menu) {
      this.menuList = this.menuList.map((el) => {
        el.active = false
        return el
      })

      this.menuList.splice(idx, 1, { ...menu, active: true })
    },
    makeValue() {
      const menuList = this.list.map((el) => ({ ...el, active: false }))
      if (menuList.length > 0) {
        menuList[0].active = true
      }
      this.menuList = menuList
      console.log(this.menuList)
    },
  },
  computed: {
    currentContent() {
      const filter = this.menuList.filter((a) => a.active)
      return filter.length > 0 ? filter[0] : {}
    },
  },
  props: {
    list: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  watch: {
    list(to, from) {
      if (to !== from) {
        this.makeValue()
      }
    },
  },
  beforeMount() {
    this.makeValue()
  },
  data() {
    return {
      menuList: [],
    }
  },
}
</script>

<style lang="scss" scoped>
section {
  @apply w-full flex;
  .tab,
  .content {
    @apply w-1/2;
  }
  .tab {
    height: 100%;
    @apply flex justify-start flex-wrap;
    ::v-deep button {
      @apply w-1/2;
      margin: 2.5rem 0;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
