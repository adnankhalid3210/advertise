/**
 * 프로필 정보
 */
export interface Profile {
  first_name: string
  last_name: string
  full_name: string
  title: string
  gender: string
  profile_image_path: string
}

/**
 * 소속 등 관련 정보
 */
export interface Membership {
  // 회사명, 소속 등 참가자를 위한 것
  membership_name: string
  // 부서
  membership_division: string
  // 직책
  membership_position: string
  // 추가 직책이나 호칭
  membership_title: string
  // 역할
  membership_role: string
  // 타입
  membership_type: string

  // 참가자가 넣는 식별 코드, 참고 사항으로만 쓸 것 - 직접 입력하는 사번 등
  membership_code: string
}

/**
 * 연락처 정보
 */
export interface Contact {
  email_address: string
  mobile_number_country_code: string
  mobile_number: string
  phone_number_country_code: string
  phone_number: string
  country: string
  city: string
  province: string
  zipcode: string
  street_address: string
  detailed_address: string
}

/**
 * 역할 정보
 */
export interface EventRole {
  event_role_group_type: string
  event_role_type: string
}

export interface Attendee extends Contact, Membership, EventRole, Profile {}
