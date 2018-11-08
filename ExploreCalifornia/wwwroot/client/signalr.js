import io from 'socket.io-client'
import store, { getMessage } from './store'

const clientSocket = io(window.location.origin)

clientSocket.on('connect', () => {
  console.log('I am now connected to the server!')

  clientSocket.on('new-message', message => {
    store.dispatch(getMessage(message))
  })
})

export default clientSocket
