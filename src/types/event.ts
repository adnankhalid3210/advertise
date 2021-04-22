import { Route } from "vue-router"

export interface Event {
  organization_id?: string
  id: string
  name: string
  path: string
  type: string
}

/**
 * 메뉴 타입
 */
export interface Nav {
  id: string
  text: string
  to: Route
}
