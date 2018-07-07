import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Base, { is, isExist, responsive } from './Base'

const properties = {
  flex: 'flex',
  flexDirection: 'flex-direction',
  flexFlow: 'flex-flow',
  flexWrap: 'flex-wrap',
  flexBasis: 'flex-basis',
  flexGrow: 'flex-grow',
  flexShrink: 'flex-shrink',
  alignItems: 'align-items',
  alignContent: 'align-content',
  alignSelf: 'align-self',
  justifyContent: 'justify-content',
  justifySelf: 'justify-self',
  order: 'order',
}

const StyledFlex = styled(Base)`
  display: flex;
  ${is('inline')`
    display: inline-flex;
  `};
  ${is('column')`
    flex-direction: column;
  `};
  ${isExist(properties)};
  ${responsive(properties)};
`

const Flex = ({ as, ...restProps }) => {
  const Component = as && as !== 'div' ? StyledFlex.withComponent(as) : StyledFlex
  return <Component {...restProps} />
}

Flex.propTypes = {
  /**
   * as
   */
  as: PropTypes.oneOfType([PropTypes.instanceOf(Element), PropTypes.string]),
  direction: PropTypes.oneOf(['column', 'row']),
  /**
   * If it's number, the unit will be px.
   * margin will override all of shorthand.
   */
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginVertical: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginHorizontal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * If it's number, the unit will be px. padding will override all of shorthand.
   */
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingVertical: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingHorizontal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Flex
