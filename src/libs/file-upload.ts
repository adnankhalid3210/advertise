interface UploadResult {
  results: Record<string, any>[]
}

export const extractCDNPath = (v: UploadResult) => {
  if (v && v.results && v.results.length > 0) {
    return v.results[0].url
  }
  return null
}
