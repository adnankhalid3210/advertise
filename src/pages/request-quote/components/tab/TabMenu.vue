<template>
  <section>
    <ul class="tab">
      <TabMenuButton
        v-for="(item, idx) in menuList"
        :value="item"
        @activate="activate(idx, $event)"
        :key="`${item.menu}${item.active}`"
      />
    </ul>
    <transition-group name="slide-fade">
      <TabMenuContent :key="`${item.menu}${item.active}`" v-for="item in menuList" :value="item" v-show="item.active" />
    </transition-group>
  </section>
</template>

<script>
import TabMenuButton from "@/pages/request-quote/components/tab/TabMenuButton"
import TabMenuContent from "@/pages/request-quote/components/tab/TabMenuContent"
export default {
  name: "TabMenu",
  components: { TabMenuButton, TabMenuContent },

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
  @apply w-full;
  ul {
    @apply w-full flex justify-start;
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
