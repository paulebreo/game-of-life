import store, { setTableData } from './store'

const signalR = require('@aspnet/signalr')

const clientConnection = new signalR.HubConnectionBuilder()
  .withUrl('/gol')
  .build()

// clientConnection.on('ReceiveMessage', renderMessage)
clientConnection.on('ReceiveInitialData', data => {
  console.log('the initial data', data)

  store.dispatch(setTableData(data))
})
clientConnection.on('ReceiveNewData', data => {
  store.dispatch(setTableData(data))
})
clientConnection.on('ReceiveCount', data => {
  console.log('the count is', data)
})

clientConnection.start()

export default clientConnection
