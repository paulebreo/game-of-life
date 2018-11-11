import React, { Component } from 'react'
import store, { colorize } from '../store'
import { connect } from 'react-redux'

const TableCell = props => (
  <td onClick={props.handleColorize} onMouseOver={props.handleMouseOver} />
)

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleColorize: (rowIdx, colIdx) => evt => {
      evt.preventDefault()
      dispatch(colorize(rowIdx, colIdx))
    },
    handleMouseOver: evt => {
      evt.preventDefault()
      console.log('mousever event', event.target)
      if (store.getState().isMouseDown) {
        console.log('mouse is down')
        store.dispatch(colorize(ownProps.rowIdx, ownProps.colIdx))
      }
    }
  }
}

export default connect(
  null,
  mapDispatch
)(TableCell)
