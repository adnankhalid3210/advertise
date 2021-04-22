export const pickOne = (arr: unknown[]): unknown => {
  const length = arr?.length
  if (length < 1) {
    return null
  }
  const i = Math.trunc(Math.random() * length)
  return arr[i]
}
