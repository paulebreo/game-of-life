import { createStore, applyMiddleware } from 'redux'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import clientConnection from './signalr'

// INITIAL STATE

const initialState = {
  tableData: [],
  isMouseDown: false
}

// ACTION TYPES

const SET_TABLE_DATA = 'SET_TABLE_DATA'
const MOUSE_DOWN = 'MOUSE_DOWN'
const MOUSE_UP = 'MOUSE_UP'
const TOGGLE_CELL = 'TOGGLE_CELL'

// ACTION CREATORS

export const setTableData = tableData => {
  return { type: SET_TABLE_DATA, payload: tableData }
}
export const mouseDown = () => ({ type: MOUSE_DOWN })
export const mouseUp = () => ({ type: MOUSE_UP })
export const toggleCell = (row, column) => ({ type: TOGGLE_CELL, row, column })

// THUNK CREATORS

export const initTableData = () => {
  return async dispatch => {
    clientConnection.invoke('Init')
  }
}

export const updateTableData = () => {
  return async dispatch => {
    clientConnection.invoke('Tick')
  }
}
export const deleteTableData = () => {
  return async dispatch => {
    clientConnection.invoke('Clear')
  }
}
export const incrementCount = () => {
  return async dispatch => {
    clientConnection.invoke('IncrementCount')
  }
}
export const writeTableData = tableData => {
  return async dispatch => {
    dispatch(mouseUp())
    clientConnection.invoke('Update', tableData)
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TABLE_DATA:
      return { ...state, tableData: action.payload }
    case MOUSE_DOWN:
      return { ...state, isMouseDown: true }
    case MOUSE_UP:
      console.log('the mouse is up')

      return { ...state, isMouseDown: false }
    case TOGGLE_CELL: {
      let newTableData = [...state.tableData]
      newTableData[action.row][action.column] = newTableData[action.row][
        action.column
      ]
        ? false
        : true
      return { ...state, tableData: newTableData }
    }
    default:
      return state
  }
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store
