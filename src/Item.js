import React from 'react'
import styled from 'styled-components'
import Base, { isExist, responsive } from './Base'

const properties = {
  gridColumnStart: 'grid-column-start',
  gridColumnEnd: 'grid-column-end',
  gridRowStart: 'grid-row-start',
  gridRowEnd: 'grid-row-end',
  gridColumn: 'grid-column',
  gridRow: 'grid-row',
  gridArea: 'grid-area',
  justifySelf: 'justify-self',
  alignSelf: 'align-self',
  placeSelf: 'place-self',
}

const StyledItem = styled(Base)`
  ${isExist(properties)};
  ${responsive(properties)};
`

const Item = ({ as, ...restProps }) => {
  const Component = as ? StyledItem.withComponent(as) : StyledItem
  return <Component {...restProps} />
}

export default Item
