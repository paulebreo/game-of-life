import React from 'react'
import { connect } from 'react-redux'
import { initTableData, updateTableData } from '../store'

class ControlPanel extends React.Component {
  constructor() {
    super()
    this.handleTestClick = this.handleTestClick.bind(this)
    this.handleTestClick2 = this.handleTestClick2.bind(this)
  }
  handleTestClick(evt) {
    console.log('clicked test 1')
    this.props.setData()
  }
  handleTestClick2(evt) {
    console.log('clicked test 2')
    this.props.fetchData()
  }
  render() {
    return (
      <React.Fragment>
        <div id="control_panel">
          <button type="button" id="step_btn" className="button">
            Step
          </button>
          <button type="button" id="play_btn" className="button">
            Play
          </button>
          <button type="button" id="stop_btn" className="button">
            Stop
          </button>
          <button id="random_btn" className="button">
            Randomize Board
          </button>
          <button id="clear_btn" className="button">
            Clear
          </button>
          <button
            onClick={this.handleTestClick}
            id="test_btn"
            className="button"
          >
            Test
          </button>
          <button
            onClick={this.handleTestClick2}
            id="test_btn2"
            className="button"
          >
            Test 2
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
    fetchData: () => dispatch(updateTableData())
  }
}

export default connect(
  mapState,
  mapDispatch
)(ControlPanel)
