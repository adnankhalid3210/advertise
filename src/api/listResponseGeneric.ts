export interface ListResponseGeneric<T> {
  size: number
  limit: number
  result: Array<T>
  _links: {
    self: string
    next?: string
    prev?: string
  }
}
