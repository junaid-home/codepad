const sizeValue = {
  xs: '375px',
  sm: '425px',
  md: '768px',
  xm: '1024px',
  lg: '1440px',
  xl: '2560px',
}

const device = {
  xs: `(min-width: ${sizeValue.xs})`,
  sm: `(min-width: ${sizeValue.sm})`,
  md: `(min-width: ${sizeValue.md})`,
  xm: `(min-width: ${sizeValue.xm})`,
  lg: `(min-width: ${sizeValue.lg})`,
  xl: `(min-width: ${sizeValue.xl})`,
}

function breakpoint(size: keyof typeof sizeValue) {
  return device[size]
}

export default breakpoint
