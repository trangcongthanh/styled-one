import React from 'react'
import styled from 'styled-components'
import { Base, flex } from './helpers'

const StyledFlex = styled(Base)`
  display: ${props => (props.display ? props.display : 'flex')};
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  flex-wrap: ${props => (props.wrap ? props.wrap : 'nowrap')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'flex-start')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'stretch')};
  align-content: ${props => (props.alignContent ? props.alignContent : 'stretch')};
  align-self: ${props => (props.alignSelf ? props.alignSelf : 'auto')};
  flex: ${flex};
`

const Flex = ({ as, ...restProps }) => {
  const Component = as && as !== 'div' ? StyledFlex.withComponent(as) : StyledFlex
  return <Component {...restProps} />
}

export default Flex
