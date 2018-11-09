import { createStore, applyMiddleware } from 'redux'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import clientConnection from './signalr'

// INITIAL STATE

const initialState = {
  tableData: []
}

// ACTION TYPES

const SET_TABLE_DATA = 'SET_TABLE_DATA'

// ACTION CREATORS

export const setTableData = tableData => {
  return { type: SET_TABLE_DATA, payload: tableData }
}

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
export const incrementCount = () => {
  return async dispatch => {
    clientConnection.invoke('IncrementCount')
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TABLE_DATA:
      return { ...state, tableData: action.payload }
    default:
      return state
  }
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware))
)

export default store
