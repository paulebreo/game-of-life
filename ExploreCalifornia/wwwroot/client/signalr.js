const clientConnection = new signalR.HubConnectionBuilder()
  .withUrl('/chatHub')
  .build()

clientConnection.on('ReceiveMessage', renderMessage)
clientConnection.on('ReceiveGameOfLife', renderGoL)

clientConnection.start()

export default clientConnection
