import styled, { css } from 'styled-components'
import { CSS_PROPERTIES, BREAKPOINTS } from './constants'

const supportAddUnit = [
  'borderWidth',
  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderRadius',
  'width',
  'height',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'fontSize',
  'lineHeight',
  'padding',
  'paddingTop',
  'paddingLeft',
  'paddingRight',
  'paddingBottom',
  'margin',
  'marginTop',
  'marginLeft',
  'marginRight',
  'marginBottom',
]

export const addUnit = value => (typeof value === 'number' ? `${value}px` : value)

export const is = key => (...args) => props => props[key] && css(...args)

export const isExist = configs => props => {
  const entries = Object.entries(configs)
  const styles = entries.reduce((properties, [key, value]) => {
    if (props[key] !== undefined && props[key] !== null) {
      if (typeof value === 'function') {
        return value(props)
      }
      if (supportAddUnit.includes(key)) {
        return `${properties} ${value}: ${addUnit(props[key])};`
      }
      return `${properties} ${value}: ${props[key]};`
    }
    return properties
  }, '')
  return css`
    ${styles};
  `
}

export const responsive = configs => props =>
  props.responsive &&
  Object.keys(props.responsive).map(key => {
    const { min, max } = BREAKPOINTS[key]
    const minWidth = (min && `(min-width: ${min / 16}em)`) || ''
    const maxWidth = (max && `(max-width: ${max / 16}em)`) || ''
    const query = `@media only screen ${minWidth && `and ${minWidth}`} ${maxWidth && `and ${maxWidth}`}`
    return css`
      ${query} {
        ${isExist(configs)(props.responsive[key])};
      }
    `
  })

const One = styled.div`
  ${isExist(CSS_PROPERTIES)};
  ${responsive(CSS_PROPERTIES)};
  ${props => props.hover && css`:hover { ${props.hover}}`};
`

/** @component */
export default One
