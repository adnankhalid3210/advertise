export function extractSelectValue({ target }) {
  const { options, selectedIndex } = target
  return options[selectedIndex]?.value
}
