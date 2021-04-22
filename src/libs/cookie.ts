export const getCookies = (): Record<string, string> => {
  const allCookie = document.cookie
  const ckList = allCookie.split(";")
  return ckList.reduce((previousValue, currentValue) => {
    const strings = currentValue.split("=")
    previousValue[strings[0].trim()] = strings[1]?.trim()
    return previousValue
  }, {})
}

export const addCookieValue = ({ key, value }) => {
  const allCookie = document.cookie
  document.cookie = allCookie + `;${key}=${value}`
}
