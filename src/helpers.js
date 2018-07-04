import styled, { css } from 'styled-components'

export const BREAKPOINTS = {
  sm: {
    min: 576,
  },
  md: {
    min: 768,
  },
  lg: {
    min: 992,
  },
  xl: {
    min: 1200,
  },
  'only-xs': {
    max: 575,
  },
  'only-sm': {
    min: 576,
    max: 767,
  },
  'only-md': {
    min: 768,
    max: 991,
  },
  'only-lg': {
    min: 992,
    max: 1199,
  },
}

const media = Object.keys(BREAKPOINTS).reduce((mediaQueries, label) => {
  mediaQueries[label] = (...args) => {
    const { min, max } = BREAKPOINTS[label]
    const minWidth = (min && `(min-width: ${min / 16}em)`) || ''
    const maxWidth = (max && `(max-width: ${max / 16}em)`) || ''
    const query = `@media only screen ${minWidth && `and ${minWidth}`} ${maxWidth && `and ${maxWidth}`}`
    return css`
      ${query} {
        ${css(...args)};
      }
    `
  }

  return mediaQueries
}, {})

export const addUnit = value => (typeof value === 'number' ? `${value}px` : value)

export const margin = (props, { top = 0, right = 0, bottom = 0, left = 0 } = {}) =>
  props.margin
    ? addUnit(props.margin)
    : `${addUnit(props.marginTop || props.marginVertical || top)}
      ${addUnit(props.marginRight || props.marginHorizontal || right)}
      ${addUnit(props.marginBottom || props.marginVertical || bottom)}
      ${addUnit(props.marginLeft || props.marginHorizontal || left)}
    `
export const padding = (props, { top = 0, right = 0, bottom = 0, left = 0 } = {}) =>
  props.padding
    ? addUnit(props.padding)
    : `${addUnit(props.paddingTop || props.paddingVertical || top)}
      ${addUnit(props.paddingRight || props.paddingHorizontal || right)}
      ${addUnit(props.paddingBottom || props.paddingVertical || bottom)}
      ${addUnit(props.paddingLeft || props.paddingHorizontal || left)}
    `

export const flex = props =>
  props.flex ? props.flex : `${props.flexGrow || 0} ${props.flexShrink || 1} ${props.flexBasis || 'auto'}`

export const border = (props, position) => (props[position] ? props[position] : props.border ? props.border : 'none')

export const Base = styled.div`
  margin: ${margin};
  padding: ${padding};
  border-top: ${props => border(props, 'borderTop')};
  border-right: ${props => border(props, 'borderRight')};
  border-bottom: ${props => border(props, 'borderBottom')};
  border-left: ${props => border(props, 'borderLeft')};
  width: ${props => (props.width ? addUnit(props.width) : 'auto')};
  height: ${props => (props.height ? addUnit(props.height) : 'auto')};
  background: ${props => (props.background ? props.background : 'transparent')};
`

export const gridTemplate = (props, type) => {
  if (type === 'row') {
    if (Array.isArray(props.rowWidth)) {
      return Array(props.row)
        .fill(0)
        .map((_, index) => addUnit(props.rowWidth[index] || '1fr'))
        .join(' ')
    }
    return `repeat(${props.row}, ${props.rowWidth || '1fr'})`
  }
  if (Array.isArray(props.columnWidth)) {
    return Array(props.column)
      .fill(0)
      .map((_, index) => addUnit(props.columnWidth[index] || '1fr'))
      .join(' ')
  }
  return `repeat(${props.column}, ${props.columnWidth || '1fr'})`
}

export const gridGap = (props, { row = 0, column = 0 } = {}) =>
  `${addUnit(props.gridRowGap || props.gridGap || row)} ${addUnit(props.gridColumnGap || props.gridGap || column)}`

export const gridResponse = ({ responsive }) =>
  Object.keys(responsive).map(
    key => media[key]`
      grid-template: ${gridTemplate(responsive[key], 'row')} / ${gridTemplate(responsive[key], 'column')};
      grid-grap: ${gridGap(responsive[key])};
    `
  )
