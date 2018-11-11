import React, { Component } from 'react'
import store, { toggleCell } from '../store'
import { connect } from 'react-redux'

const TableCell = props => (
  <td onClick={props.handleToggleCell} onMouseOver={props.handleMouseOver} />
)

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleToggleCell: (rowIdx, colIdx) => evt => {
      evt.preventDefault()
      dispatch(toggleCell(rowIdx, colIdx))
    },
    handleMouseOver: evt => {
      evt.preventDefault()
      console.log('mousever event', event.target)
      if (store.getState().isMouseDown) {
        console.log('mouse is down')
        store.dispatch(toggleCell(ownProps.rowIdx, ownProps.colIdx))
      }
    }
  }
}

export default connect(
  null,
  mapDispatch
)(TableCell)
