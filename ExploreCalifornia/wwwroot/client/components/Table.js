import React from 'react'
import uuidv1 from 'uuid/v1'
import { connect } from 'react-redux'

const Table = props => (
  <React.Fragment>
    <table
      id="board"
      onMouseDown={props.handleMouseDown}
      onMouseUp={props.handleMouseUp}
    >
      <tbody>
        {props.tableData.map(row => (
          <tr key={uuidv1()}>
            {row.map(col => (
              <td className={col === true ? 'alive' : ''} key={uuidv1()} />
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
    handleMouseDown: evt => console.log('moused down'),
    handleMouseUp: evt => console.log('mouse up')
  }
}

export default connect(
  mapState,
  mapDispatch
)(Table)
