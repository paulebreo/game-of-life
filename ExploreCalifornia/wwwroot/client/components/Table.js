import React from 'react'
import uuidv1 from 'uuid/v1'

const Table = props => (
  <React.Fragment>
    <table id="board">
      <tbody>
        {props.data.map(row => (
          <tr key={uuidv1()}>
            {row.map(col => (
              <td key={uuidv1()}>{col}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </React.Fragment>
)

export default Table
