import styled from 'styled-components'
import One, { is, addUnit } from './One'

const getTemplate = position => props => {
  switch (position) {
    case 'row': {
      if (props.rowHeight && Array.isArray(props['rowHeight'])) {
        return props['rowHeight'].map(value => addUnit(value)).join(' ')
      }
      return `repeat(${props.row || 1}, ${addUnit(props.rowHeight) || '1fr'})`
    }
    default: {
      if (props.columnWidth && Array.isArray(props['columnWidth'])) {
        return props['columnWidth'].map(value => addUnit(value)).join(' ')
      }
      return `repeat(${props.column || 1}, ${addUnit(props.columnWidth) || '1fr'})`
    }
  }
}

const Grid = styled(One)`
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
`

/** @component */
export default Grid
