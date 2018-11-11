import React, { Component } from 'react'
import store, { toggleCell } from '../store'
import { connect } from 'react-redux'

const TableCell = props => (
  <td
    className={props.className}
    onClick={props.handleToggleCell}
    onMouseOver={props.handleMouseOver}
  />
)

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleToggleCell: evt => {
      evt.preventDefault()
      dispatch(toggleCell(ownProps.rowIdx, ownProps.colIdx))
    },
    handleMouseOver: evt => {
      evt.preventDefault()
      if (store.getState().isMouseDown) {
        store.dispatch(toggleCell(ownProps.rowIdx, ownProps.colIdx))
      }
    }
  }
}

export default connect(
  null,
  mapDispatch
)(TableCell)
