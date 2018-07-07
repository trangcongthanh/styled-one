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

const Flex = styled(Base)`
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

/** @component */
export default Flex
