import React from 'react'
import styled from 'styled-components'
import { Base, gridTemplate, gridGap, gridResponse } from './helpers'

const StyledGrid = styled(Base)`
  display: grid;
  grid-template: ${props => `${gridTemplate(props, 'row')} / ${gridTemplate(props, 'column')}`};
  grid-gap: ${gridGap};
  grid-template-areas: ${props => (props.gridAreas ? props.gridAreas : 'none')};
  place-items: ${props =>
    props.placeItems ? props.placeItems : `${props.alignItems || 'stretch'} ${props.justifyItems || 'stretch'}`};
  place-content: ${props =>
    props.placeContent
      ? props.placeContent
      : `${props.alignContent || 'start'} ${props.justifyContent || 'space-around'}`};
  ${props => props.responsive && gridResponse(props)};
`

const StyledGridItem = styled(Base)`
  grid-area: ${props =>
    props.gridArea
      ? props.gridArea
      : `
        ${props.rowStart || 'auto'} /
        ${props.columnStart || 'auto'} /
        ${props.rowEnd || 'auto'} /
        ${props.columnEnd || 'auto'}
      `}
    };
  place-self: ${props =>
    props.placeSelf ? props.placeSelf : `${props.alignSelf || 'stretch'} ${props.justifySelf || 'stretch'}`};
`

const GridItem = ({ as, ...restProps }) => {
  const Component = as && as !== 'div' ? StyledGridItem.withComponent(as) : StyledGridItem
  return <Component {...restProps} />
}

const Grid = ({ as, ...restProps }) => {
  const Component = as && as !== 'div' ? StyledGrid.withComponent(as) : StyledGrid
  return <Component {...restProps} />
}

Grid.Item = GridItem

export default Grid
