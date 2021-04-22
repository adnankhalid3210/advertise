import { Vue, Component, Prop } from "vue-property-decorator"

// fetchedStyle, 기본적으로 스타일을 가지고 있는 것들
@Component
export default class HasFetchedStyle extends Vue {
  @Prop()
  fetchedStyle!: Record<string, unknown>

  get fetchedVariables(): Record<string, unknown> {
    return Object.keys(this.fetchedStyle)
      .filter((f) => /^--/.test(f))
      .reduce((acc, cur) => {
        acc[cur] = this.fetchedStyle[cur]
        return acc
      }, {})
  }
}
