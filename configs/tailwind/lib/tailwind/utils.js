export function withOpacity(variableName) {
  const color = variableName.trim().replaceAll(' ', ', ')

  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${color}), ${opacityValue})`
    }
    return `hsl(var(${color}))`
  }
}
