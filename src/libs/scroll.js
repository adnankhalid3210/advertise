export const scrollById = (to) => {
  const elementById = document.getElementById(to)
  if (!elementById) {
    return
  }
  elementById.scrollIntoView({
    behavior: "smooth",
  })
}
