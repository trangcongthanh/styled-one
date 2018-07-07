import React from 'react'
import styled from 'styled-components'
import Base, { is, isExist, responsive } from './Base'

const properties = {
  gridTemplateRows: 'grid-template-rows',
  gridTemplateColumns: 'grid-template-columns',
  gridTemplate: 'grid-template',
  gridRowGap: 'grid-row-gap',
  gridColumnGap: 'grid-column-gap',
  gridGap: 'grid-gap',
  gridAreas: 'grid-template-areas',
  gridTemplateAreas: 'grid-template-areas',

  justifyItems: 'justify-items',
  alignItems: 'align-items',
  placeItems: 'place-items',

  justifyContent: 'justify-content',
  alignContent: 'align-content',
  placeContent: 'place-content',

  gridAutoRows: 'grid-auto-rows',
  gridAutoColumns: 'grid-auto-columns',
  gridAutoFlow: 'grid-auto-flow',
  gridFlow: 'grid-auto-flow',
  grid: 'grid',
}

const getTemplate = position => props => {
  switch (position) {
    case 'row': {
      if (props.rowHeight && Array.isArray(props['rowHeight'])) {
        return props['rowHeight'].join(' ')
      }
      return `repeat(${props.row || 1}, ${props.rowHeight || '1fr'})`
    }
    default: {
      if (props.columnWidth && Array.isArray(props['columnWidth'])) {
        return props['columnWidth'].join(' ')
      }
      return `repeat(${props.column || 1}, ${props.columnWidth || '1fr'})`
    }
  }
}

const StyledGrid = styled(Base)`
  display: grid;
  ${is('inline')`
    display: inline-grid;
  `};
  ${is('row')`
    grid-template-rows: ${getTemplate('row')};
  `};
  ${is('column')`
    grid-template-columns: ${getTemplate('column')};
  `};
  ${isExist(properties)};
  ${responsive(properties)};
`

const Grid = ({ as, ...restProps }) => {
  const Component = as && as !== 'div' ? StyledGrid.withComponent(as) : StyledGrid
  return <Component {...restProps} />
}

export default Grid
