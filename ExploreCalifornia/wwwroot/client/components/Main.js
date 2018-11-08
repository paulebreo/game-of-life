import React from 'react'
import ControlPanel from './ControlPanel'
import Table from './Table'

const Main = props => (
  <React.Fragment>
    <h1>helloGame of Life</h1>
    <Table />
    <ControlPanel />
  </React.Fragment>
)

export default Main
