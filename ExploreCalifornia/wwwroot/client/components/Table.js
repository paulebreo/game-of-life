import React from 'react'
import uuidv1 from 'uuid/v1'
import { connect } from 'react-redux'
import { mouseDown, mouseUp } from '../store'
import TableCell from './TableCell'

const Table = props => (
  <React.Fragment>
    <table
      id="board"
      onMouseDown={props.handleMouseDown}
      onMouseUp={props.handleMouseUp}
    >
      <tbody>
        {props.tableData.map((row, rowIdx) => (
          <tr key={uuidv1()}>
            {row.map((col, colIdx) => (
              // <td className={col === true ? 'alive' : ''} key={uuidv1()} />
              <TableCell
                className={col === true ? 'alive' : ''}
                key={uuidv1()}
                rowIdx={rowIdx}
                colIdx={colIdx}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </React.Fragment>
)

const mapState = state => {
  const { tableData } = state
  return {
    tableData
  }
}

const mapDispatch = dispatch => {
  return {
    handleMouseDown: evt => dispatch(mouseDown()),
    handleMouseUp: evt => dispatch(mouseUp())
  }
}

export default connect(
  mapState,
  mapDispatch
)(Table)
