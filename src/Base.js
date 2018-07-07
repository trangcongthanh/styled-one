import styled, { css } from 'styled-components'

const BREAKPOINTS = {
  sm: { min: 576 },
  md: { min: 768 },
  lg: { min: 992 },
  xl: { min: 1200 },
  'only-xs': { max: 575 },
  'only-sm': { min: 576, max: 767 },
  'only-md': { min: 768, max: 991 },
  'only-lg': { min: 992, max: 1199 },
}

const baseProperties = {
  display: 'display',
  width: 'width',
  height: 'height',
  filter: 'filter',

  /* border */
  border: 'border',
  borderTop: 'border-top',
  borderRight: 'border-right',
  borderBottom: 'border-bottom',
  borderLeft: 'border-left',
  borderTopWidth: 'border-top-width',
  borderTopStyle: 'border-top-style',
  borderTopColor: 'border-top-color',
  borderRightWidth: 'border-right-width',
  borderRightStyle: 'border-right-style',
  borderRightColor: 'border-right-color',
  borderBottomWidth: 'border-bottom-width',
  borderBottomtStyle: 'border-bottom-style',
  borderBottomColor: 'border-bottom-color',
  borderLeftWidth: 'border-left-width',
  borderLeftStyle: 'border-left-style',
  borderLeftColor: 'border-left-color',
  borderRadius: 'border-radius',
  borderTopLeftRadius: 'border-top-left-radius',
  borderTopRightradius: 'border-top-right-radius',
  borderBottomRightRadius: 'border-top-right-radius',
  borderBottomLeftRadius: 'border-bottom-left-radius',

  /* background */
  background: 'background',
  backgroundColor: 'background-color',
  backgroundImage: 'background-image',
  backgroundRepeat: 'background-repeat',
  backgroundPosition: 'background-position',
  backgroundAttachment: 'background-attachment',

  boxShadow: 'box-shadow',

  animation: 'animation',
  animationDelay: 'animation-delay',
  animationDirection: 'animation-direction',
  animationDuration: 'animation-duration',
  animationFillMode: 'animation-fill-mode',
  animationIterationCount: 'animation-iteration-count',
  animationName: 'animation-name',
  animationPlayState: 'animation-play-state',
  animationTimingFunction: 'animation-timing-function',

  transform: 'transform',
  transformOrigin: 'transform-origin',
  transformStyle: 'transform-style',

  transition: 'transition',
  transitionDelay: 'transition-delay',
  transitionDuration: 'transition-duration',
  transitionProperty: 'transition-property',
  transitionTimingFunction: 'transition-timing-function',
}

export const is = key => (...args) => props => props[key] && css(...args)

export const isExist = configs => props => {
  const entries = Object.entries(configs)
  const styles = entries.reduce((properties, [key, value]) => {
    if (props[key]) {
      if (typeof value === 'function') {
        return value(props)
      }
      return `${properties} ${value}: ${props[key]};`
    }
    return properties
  }, '')
  return css`
    ${styles};
  `
}

export const addUnit = value => (typeof value === 'number' ? `${value}px` : value)

export const margin = ({ top = 0, right = 0, bottom = 0, left = 0 } = {}) => props =>
  props.margin
    ? addUnit(props.margin)
    : `${addUnit(props.marginTop || props.marginVertical || top)}
      ${addUnit(props.marginRight || props.marginHorizontal || right)}
      ${addUnit(props.marginBottom || props.marginVertical || bottom)}
      ${addUnit(props.marginLeft || props.marginHorizontal || left)}
    `
export const padding = ({ top = 0, right = 0, bottom = 0, left = 0 } = {}) => props =>
  props.padding
    ? addUnit(props.padding)
    : `${addUnit(props.paddingTop || props.paddingVertical || top)}
      ${addUnit(props.paddingRight || props.paddingHorizontal || right)}
      ${addUnit(props.paddingBottom || props.paddingVertical || bottom)}
      ${addUnit(props.paddingLeft || props.paddingHorizontal || left)}
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

const Base = styled.div`
  margin: ${margin()};
  padding: ${padding()};
  ${isExist(baseProperties)};
  ${responsive(baseProperties)};
  ${props => props.hover && css`:hover { ${props.hover}}`};
`

/** @component */
export default Base
