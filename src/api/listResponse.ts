export interface ListResponse {
  size: number
  limit: number
  result: Array<unknown>
  _links: {
    self: string
    next?: string
    prev?: string
  }
}
