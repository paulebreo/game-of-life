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
  }
  handleTestClick(evt) {
    console.log('clicked test 1')
    this.props.setData()
  }
  handleTestIncrement(evt) {
    console.log('clicked test 1')
    this.props.incrementCount()
  }
  handleTestClick2(evt) {
    console.log('clicked test 2')
    this.props.fetchData()
  }
  handleDelete(evt) {
    console.log('clicked detele')

    this.props.deleteData()
  }
  handlePressPlay(evt) {
    console.log('you pressed play')
    let timer = setInterval(() => {
      console.log('tick')
    }, 1000)
    this.setState({ timer })
  }
  componentWillUnmount() {
    this.clearInterval(this.state.timer)
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
          <button type="button" id="stop_btn" className="button">
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
          <button
            onClick={this.handleTestIncrement}
            id="clear_btn"
            className="button"
          >
            Test Increment
          </button>
          <button
            onClick={this.handleTestClick}
            id="test_btn"
            className="button"
          >
            Init test
          </button>
          <button
            onClick={this.handleTestClick2}
            id="test_btn2"
            className="button"
          >
            Tick test
          </button>
          <button id="test_btn3" className="button">
            Test Tick
          </button>
        </div>

        <footer>
          <p>
            Built by [me] at{' '}
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
