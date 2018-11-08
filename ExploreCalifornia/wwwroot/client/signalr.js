import store, { setTableData } from './store'

const signalR = require('@aspnet/signalr')

const clientConnection = new signalR.HubConnectionBuilder()
  .withUrl('/chatHub')
  .build()

// clientConnection.on('ReceiveMessage', renderMessage)
clientConnection.on('ReceiveGameOfLife', data => {
  store.dispatch(setTableData(data))
})

clientConnection.start()

export default clientConnection
