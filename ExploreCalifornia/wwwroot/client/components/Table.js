import React from 'react'
import uuidv1 from 'uuid/v1'
import { connect } from 'react-redux'
import { mouseDown, mouseUp } from '../store'
import TableCell from './TableCell'

class Table extends React.Component {
  render() {
    return (
      <React.Fragment>
        <table
          id="board"
          onMouseDown={this.props.handleMouseDown}
          onMouseUp={this.props.handleMouseUp}
        >
          <tbody>
            {this.props.tableData.map((row, rowIdx) => (
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
  }
}

const mapState = state => {
  const { tableData } = state
  return {
    tableData
  }
}

const mapDispatch = dispatch => {
  return {
    handleMouseDown: evt => {
      evt.preventDefault()
      dispatch(mouseDown())
    },
    handleMouseUp: evt => {
      evt.preventDefault()
      dispatch(mouseUp())
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(Table)
