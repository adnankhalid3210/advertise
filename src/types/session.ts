export interface Session {
  event_role_group_type?: string
  event_role_type?: string
  access_flags: string
  id: string
  type: string
  event_role?: Record<string, unknown>
  attendee?: Record<string, unknown>
  event_id?: string
  organization_id?: string
}

export interface PageSession {
  page_session_id: string
  client_key: string
  page: string
  exclusive_access: boolean
  event_id: string
  page_id: string
  attendee_id: string
}
