import store, { setTableData } from './store'

const signalR = require('@aspnet/signalr')

const clientConnection = new signalR.HubConnectionBuilder()
  .withUrl('/gol')
  .build()

// clientConnection.on('ReceiveMessage', renderMessage)
clientConnection.on('ReceiveInitialData', data => {
  store.dispatch(setTableData(data))
})
clientConnection.on('ReceiveNewData', data => {
  store.dispatch(setTableData(data))
})

clientConnection.start()

export default clientConnection
