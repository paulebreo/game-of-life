import React from 'react'
import { connect } from 'react-redux'
import {
  initTableData,
  updateTableData,
  deleteTableData,
  incrementCount
} from '../store'

class ControlPanel extends React.Component {
  constructor() {
    super()
    this.state = {
      timer: null
    }
    this.handleTestIncrement = this.handleTestIncrement.bind(this)
    this.handleTestClick = this.handleTestClick.bind(this)
    this.handleTestClick2 = this.handleTestClick2.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handlePressPlay = this.handlePressPlay.bind(this)
    this.handlePressStop = this.handlePressStop.bind(this)
  }
  handleTestClick(evt) {
    this.props.setData()
  }
  handleTestIncrement(evt) {
    this.props.incrementCount()
  }
  handleTestClick2(evt) {
    this.props.fetchData()
  }
  handleDelete(evt) {
    this.props.deleteData()
  }
  handlePressPlay(evt) {
    let timer = setInterval(() => {
      this.props.fetchData()
    }, 500)
    this.setState({ timer })
  }
  handlePressStop(evt) {
    clearInterval(this.state.timer)
  }
  componentWillUnmount() {
    clearInterval(this.state.timer)
  }
  render() {
    return (
      <React.Fragment>
        <div id="control_panel">
          <button
            onClick={this.handleTestClick2}
            type="button"
            id="step_btn"
            className="button"
          >
            Step
          </button>
          <button
            onClick={this.handlePressPlay}
            type="button"
            id="play_btn"
            className="button"
          >
            Play
          </button>
          <button
            onClick={this.handlePressStop}
            type="button"
            id="stop_btn"
            className="button"
          >
            Stop
          </button>
          <button
            onClick={this.handleTestClick}
            id="random_btn"
            className="button"
          >
            Randomize Board
          </button>
          <button onClick={this.handleDelete} id="clear_btn" className="button">
            Clear
          </button>
        </div>

        <footer>
          <p>
            Built by [Paul Ebreo] at{' '}
            <a href="http://www.fullstackacademy.com/">Fullstack Academy</a>
          </p>
        </footer>
      </React.Fragment>
    )
  }
}

const mapState = state => {
  return {
    data: state
  }
}

const mapDispatch = dispatch => {
  return {
    setData: () => dispatch(initTableData([[1, 0], [0, 1]])),
    fetchData: () => dispatch(updateTableData()),
    incrementCount: () => dispatch(incrementCount()),
    deleteData: () => dispatch(deleteTableData())
  }
}

export default connect(
  mapState,
  mapDispatch
)(ControlPanel)
