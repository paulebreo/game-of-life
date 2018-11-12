import React, { Component } from 'react'
import store, { toggleCell } from '../store'
import { connect } from 'react-redux'

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
