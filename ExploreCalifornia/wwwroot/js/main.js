// SocketIO
// const clientSocket = io(window.location.origin)
// const testEmitter = new EventEmitter()
// testEmitter.on('testEvent', data => {
//   console.log('the handler has been called with data', data)
// })

// clientSocket.on('connect', () => {
//   console.log('I have connected to the server')

//   testEmitter.on('draw', (start, end, strokeColor) => {
//     clientSocket.emit('paint', start, end, strokeColor)
//   })
// })

// SignalR
// Initialize SignalR client
const clientConnection = new signalR.HubConnectionBuilder()
  .withUrl('/chatHub')
  .build()

clientConnection.on('ReceiveMessage', renderMessage)

clientConnection.start()

function renderMessage(
  name,
  time,
  message,
  lists,
  num,
  theStrings,
  secondList
) {
  console.log(
    'you data from server',
    name,
    time,
    message,
    lists,
    num,
    theStrings,
    secondList
  )
}

const width = 50
const height = 50 // width and height dimensions of the board
let playInterval
let isMouseDown = false
/**
 * Create a Game of Life instance
 */

const gol = new GameOfLife(width, height)

/**
 * create a table and append to the DOM
 */

// Actual table cells
const tds = []

// <table> element
const table = document.createElement('tbody')
// build a table row <tr>
for (let h = 0; h < height; h++) {
  const tr = document.createElement('tr')
  // build a table column <td>
  for (let w = 0; w < width; w++) {
    const td = document.createElement('td')
    // We'll put the coordinates on the cell
    // Element itself (using dataset),
    // letting us fetch it in a click listener later.
    td.dataset.row = h
    td.dataset.col = w
    tds.push(td)
    tr.append(td)
  }
  table.append(tr)
}
document.getElementById('board').append(table)

/**
 * Draws every cell from the gol instance into an actual, visible DOM element
 */

const paint = () => {
  tds.forEach(td => {
    let row = td.dataset.row
    let col = td.dataset.col
    cellVal = gol.board[row][col]
    if (cellVal === 1) {
      td.classList.add('alive')
    } else {
      td.classList.remove('alive')
    }
  })
}

const toggleClass = (row, col, tds) => {
  let currentTd
  for (let i = 0; i < tds.length; i++) {
    if (tds[i].dataset.row === row && tds[i].dataset.col === col) {
      currentTd = tds[i]
      break
    }
  }
  if (currentTd.classList.contains('alive')) {
    currentTd.classList.remove('alive')
  } else {
    currentTd.classList.add('alive')
  }
}

/**
 * Event Listeners
 */

const toggleBoardCell = event => {
  // console.log('target', event.target);
  let row = event.target.dataset.row
  let col = event.target.dataset.col
  // console.log('row:', row, 'col:', col);

  // toggle val of current cell
  let v = gol.toggleCell(row, col)
  // console.log('cellvalue after toggle', v);

  // toggle
  toggleClass(row, col, tds)
}

const startPaint = event => {
  // console.log('mouse down on td', event.target)
  isMouseDown = true
  // console.log('is mouse down', isMouseDown)
  const target = event.target
  if (target.localName !== 'td') {
    return
  }
  toggleBoardCell(event)
}

const mouseOver = event => {
  if (isMouseDown) {
    // console.log('is mouse down', isMouseDown)
    const target = event.target
    if (target.localName !== 'td') {
      return
    }
    toggleBoardCell(event)
  }
}

const endPaint = event => {
  isMouseDown = false
}

document.getElementById('board').addEventListener('mousedown', startPaint)
document.getElementById('board').addEventListener('mouseover', mouseOver)
document.getElementById('board').addEventListener('mouseup', endPaint)

document.getElementById('step_btn').addEventListener('click', event => {
  // TODO: Do one gol tick and paint
  console.log('step')
  gol.tick()
  paint()
})

document.getElementById('play_btn').addEventListener('click', event => {
  // TODO: Start playing by calling `tick` and paint
  // repeatedly every fixed time interval.
  // HINT:
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
  playInterval = setInterval(() => {
    gol.tick()
    paint()
  }, 500)
})

document.getElementById('random_btn').addEventListener('click', event => {
  // TODO: Randomize the board and paint
  // clear
  tds.forEach(td => td.classList.remove('alive'))
  gol.clear()

  // randomize
  gol.randomize()
  paint()
})

document.getElementById('clear_btn').addEventListener('click', event => {
  clearInterval(playInterval)
  tds.forEach(td => td.classList.remove('alive'))
  gol.clear()
})

document.getElementById('stop_btn').addEventListener('click', event => {
  clearInterval(playInterval)
})
document.getElementById('test_btn').addEventListener('click', event => {
  console.log('pressed test')
  let strArr = new Array('foo', 'bar')
  clientConnection.invoke('SendMessage', 'foo', 'bar', 3, strArr)
})
