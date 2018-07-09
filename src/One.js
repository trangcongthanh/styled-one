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
]

export const addUnit = value => (typeof value === 'number' ? `${value}px` : value)

export const is = key => (...args) => props => props[key] && css(...args)

export const isExist = configs => props => {
  const entries = Object.entries(configs)
  const styles = entries.reduce((properties, [key, value]) => {
    if (props[key]) {
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

export const margin = ({ top = 0, right = 0, bottom = 0, left = 0 } = {}) => props =>
  `
    ${addUnit(props.marginTop || props.marginVertical || props.margin || top)}
    ${addUnit(props.marginRight || props.marginHorizontal || props.margin || right)}
    ${addUnit(props.marginBottom || props.marginVertical || props.margin || bottom)}
    ${addUnit(props.marginLeft || props.marginHorizontal || props.margin || left)}
  `
export const padding = ({ top = 0, right = 0, bottom = 0, left = 0 } = {}) => props =>
  `
    ${addUnit(props.paddingTop || props.paddingVertical || props.padding || top)}
    ${addUnit(props.paddingRight || props.paddingHorizontal || props.padding || right)}
    ${addUnit(props.paddingBottom || props.paddingVertical || props.padding || bottom)}
    ${addUnit(props.paddingLeft || props.paddingHorizontal || props.padding || left)}
  `

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
  margin: ${margin()};
  padding: ${padding()};
  ${isExist(CSS_PROPERTIES)};
  ${responsive(CSS_PROPERTIES)};
  ${props => props.hover && css`:hover { ${props.hover}}`};
`

/** @component */
export default One
