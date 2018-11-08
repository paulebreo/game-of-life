import React from 'react'
import ControlPanel from './ControlPanel'
import Table from './Table'

const DUMMY_DATA = [[0, 1, 0], [1, 0, 1]]
const Main = props => (
  <React.Fragment>
    <h1>helloGame of Life</h1>
    <Table data={DUMMY_DATA} />
    <ControlPanel />
  </React.Fragment>
)

export default Main
