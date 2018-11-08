import React from 'react'
import { connect } from 'react-redux'
import { setTableData } from '../store'

class ControlPanel extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="control_panel">
          <button id="step_btn" className="button">
            Step
          </button>
          <button id="play_btn" className="button">
            Play
          </button>
          <button id="stop_btn" className="button">
            Stop
          </button>
          <button id="random_btn" className="button">
            Randomize Board
          </button>
          <button id="clear_btn" className="button">
            Clear
          </button>
          <button id="test_btn" className="button">
            Test
          </button>
          <button id="test_btn2" className="button">
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
    setData: () => dispatch(setTableData([[1, 0], [0, 1]]))
  }
}

export default connect(
  mapState,
  mapDispatch
)(Messages)
