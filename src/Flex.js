import styled from 'styled-components'
import One, { is } from './One'

const Flex = styled(One)`
  display: flex;
  ${is('inline')`
    display: inline-flex;
  `};
  ${is('column')`
    flex-direction: column;
  `};
`

/** @component */
export default Flex
