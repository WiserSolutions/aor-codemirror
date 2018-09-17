export const validJson = value => {
  try {
    if (typeof value === 'string') JSON.parse(value)
  } catch (e) {
    return `JSON needs to be valid: ${e.message}`
  }
}
