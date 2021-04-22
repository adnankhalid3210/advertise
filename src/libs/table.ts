import i18n from "@/i18n"
import stableSort from "stable"
import { Column, Row } from "@/types/table"

// 값을 i18n에서 가져오는 경우 t: 이후를 적절히 변환해서 가져온다
export const templateRegex = /^t:/

export const convertToTemplateString = (t: string | null, valueString: string) => {
  switch (t) {
    case "trigger":
      return `triggers.${valueString}`
    case "state":
      return `states.${valueString}`
    default:
      return valueString
  }
}

// 이게 있으면 title에만 있고 실제로 값은 가져오지 않는다
export const ignoreExp = /\.ignore$/

export function localeColumnName(t: string): string {
  // ignore 는 이름 바꿀 때는 그냥 무시
  if (ignoreExp.test(t)) {
    t = t.replace(ignoreExp, "")
  }
  // 템플릿 형식이면 지정 템플릿을 쓴다
  if (templateRegex.test(t)) {
    t = t.replace(templateRegex, "")
    return i18n.t(t) as string
  }
  // 아니면 labels에서 가져온다
  return i18n.t(`labels.${t}`) as string
}

export function localeColumnNames(names: string[]): string[] {
  return !names ? [] : names.map(localeColumnName)
}

/**
 * 클릭시 다음 오더를 가져온다
 * @param currentOrder
 */
export function nextSortOrder(currentOrder: "asc" | "desc" | "no_order" | "" | null): string {
  switch (currentOrder) {
    case "asc":
      return "desc"
    case "desc":
      return "no_order"
    default:
      return "asc"
  }
}

export function sortItems(items: Row[], cols: Column[]): Row[] {
  // use multi-axis sorting:
  // https://stackoverflow.com/a/2784265
  return stableSort(items, (lhs, rhs) => {
    for (let i = 0; i < cols.length; i++) {
      const col = cols[i]
      if (col.ignoreValue || !col.sortable || (col.sort !== "asc" && col.sort !== "desc")) {
        continue
      }
      const lh = lhs[col.field]
      const rh = rhs[col.field]

      let c = 0
      const fieldType = typeof lh
      if (fieldType === "string") {
        c = ((lh as string) || "").localeCompare((rh as string) || "")
      } else if (fieldType === "number") {
        c = (lh as number) - (rh as number)
      }
      if (c === 0) {
        continue
      }
      return col.sort === "desc" ? c * -1 : c
    }
    return 0
  })
}
