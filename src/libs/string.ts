export function snakeToCamel(string: string): string {
  return string.replace(/([^_]_[A-Za-z])/g, (m: string): string => {
    return m[0] + m[2].toUpperCase()
  })
}

export function camelToSnake(string: string): string {
  return string
    .replace(/[\w]([A-Z])/g, (m: string): string => {
      return m[0] + "_" + m[1]
    })
    .toLowerCase()
}

export function camelToDash(string: string): string {
  return string
    .replace(/[\w]([A-Z])/g, (m: string): string => {
      return m[0] + "-" + m[1]
    })
    .toLowerCase()
}

export function snakePropertyToCamelProperty(source: Record<string, unknown>): Record<string, unknown> {
  return !source
    ? {}
    : Object.keys(source).reduce((acc, cur) => {
        const s = snakeToCamel(cur)
        acc[s] = source[cur]
        return acc
      }, {} as Record<string, unknown>)
}

const lastNumberCommaPattern = /(\d(\s*,\s*\d)*)/g
const firstNumberPattern = /(^\s*\d+)/g
const commaNumberPattern = /,\s*(\d+)/g
const supPattern = "<sup>$1</sup>"

export function replaceLastNumbersToSup(value) {
  if (!value) {
    return ""
  }
  return value.replaceAll(lastNumberCommaPattern, supPattern)
}

export function replaceFirstNumberToSup(value) {
  if (!value) {
    return ""
  }
  return value.replaceAll(firstNumberPattern, supPattern).replaceAll(commaNumberPattern, ", " + supPattern)
}

const regEmptyParagraph = /<p><\/p>/gi
const regAllEmptyParagraph = /^(<p><\/p>)+$/gi

export function replaceEmptyParagraph(v: string) {
  return !v?.length ? "" : regAllEmptyParagraph.test(v) ? "" : v.replaceAll(regEmptyParagraph, "<br>")
}
