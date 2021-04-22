import moment from "moment"

export const extractOnlyTime = (t?: string) => {
  if (t) {
    // TODO: timezone has been set to Asia/Seoul, UTC+0900
    // Asia/Seoul can change in the far future. Make sure it's updated or to use a named timezone offset.
    return moment(t).utcOffset("+0900").format("HH:mm")
  }
  return ""
}
