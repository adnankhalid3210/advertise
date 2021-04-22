export const base64ToBlob = (base64: string, mime = "image/png") => {
  mime = mime || ""
  const sliceSize = 1024
  const byteChars = window.atob(base64)
  const byteArrays = []

  let offset = 0
  const len = byteChars.length
  for (; offset < len; offset += sliceSize) {
    const slice = byteChars.slice(offset, offset + sliceSize)

    const byteNumbers = new Array(slice.length)
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i)
    }

    const byteArray = new Uint8Array(byteNumbers)
    byteArrays.push(byteArray)
  }

  return new Blob(byteArrays, { type: mime })
}
