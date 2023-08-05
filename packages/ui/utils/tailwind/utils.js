export function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(${variableName}, ${opacityValue})`
    }
    return `hsl(${variableName})`
  }
}
