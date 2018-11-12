import React, { Component } from 'react'
import store, { toggleCell } from '../store'
import { connect } from 'react-redux'

// const TableCell = props => (
//   <td
//     className={props.className}
//     onClick={props.handleToggleCell}
//     onMouseOver={props.handleMouseOver}
//   />
// )

// const mapDispatch = (dispatch, ownProps) => {
//   return {
//     handleToggleCell: evt => {
//       evt.preventDefault()
//       dispatch(toggleCell(ownProps.rowIdx, ownProps.colIdx))
//     },
//     handleMouseOver: evt => {
//       evt.preventDefault()
//       if (store.getState().isMouseDown) {
//         store.dispatch(toggleCell(ownProps.rowIdx, ownProps.colIdx))
//       }
//     }
//   }
// }

export class TableCell extends Component {
  constructor(props) {
    super(props)
    this.handleToggleCell = this.handleToggleCell.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }
  handleToggleCell(event) {
    event.preventDefault()
    store.dispatch(toggleCell(this.props.rowIdx, this.props.colIdx))
  }
  handleMouseOver(event) {
    event.preventDefault()
    if (store.getState().isMouseDown) {
      store.dispatch(toggleCell(this.props.rowIdx, this.props.colIdx))
    }
  }

  render() {
    return (
      <td
        className={this.props.className}
        onClick={this.handleToggleCell}
        onMouseOver={this.handleMouseOver}
      />
    )
  }
}

export default TableCell
// export default connect(
//   null,
//   mapDispatch
// )(TableCell)
