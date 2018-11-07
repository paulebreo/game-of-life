
class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */

  makeBoard() {
    // TODO: Create and return an 2D Array 
    // with `this.height` as rows and `this.width` as cols.
    // For example, given a height of 4 and a width of 3, it will generate:
    // [
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    // ]

    let boardArr = [];
    
    for (let x = 0; x < this.height; x++) {
      let rowArr = []
      for(let y = 0; y < this.width; y++){
        rowArr.push(0);
      }
      boardArr.push(rowArr);
    }
    return boardArr

    // console.log("boardArr", boardArr);
  }


  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
    let sum = 0;
    // from -1 to 1 column offset
    for (let xOffset = -1; xOffset <= 1; xOffset++) {
      // from -1 to 1 row offset
      for(let yOffset = -1; yOffset <= 1; yOffset++){
        // ignore the origin
        if(xOffset === 0 && yOffset === 0) continue;
        let cellVal = this.getCell(col+xOffset, row+yOffset);
        if (cellVal === 1) {
          sum++
        }
      }
    }
    return sum;
  }


  /**
   * Given the present board, apply the rules to generate a new board
   */
  decideLife(cellVal, neighborCount) {

    //under pop
    if (cellVal === 1 && neighborCount < 2) {
      return 0
    } 
    // overpop
    if(cellVal === 1 && neighborCount>3) {
      return 0
    }
    // make alive
    if(cellVal === 0 && neighborCount === 3) {
      return 1
    }


    return cellVal

    // leave alone
    // return a 1 or 0
  }
  tick() {
    console.log('tick')
    
    const newBoard = this.makeBoard();
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board 
    // (the next iteration of the game) 
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors

    // loop through each cell
    for(let col=0;col<this.width;col++) {
      for(let row=0;row<this.height;row++) {
        let cellVal = this.getCell(row, col)
        let neighborCount = this.livingNeighbors(col, row);
        // console.log('row: ', row, 'col:', col, "n-count" ,neighborCount, "value",cellVal)
        if(row === 0 && col === 2) {
          // debugger
        }
        newBoard[row][col] = this.decideLife(cellVal, neighborCount)
      }
      
    }
    // run livingNeigbor on that cell
    // console.log('newboard',newBoard)

    // decide to kill or no kill or bring to life

    this.board = newBoard;
  }
  getCell(row, col) {
    // check if bad row or col
   if(row < 0 || row >= this.height || col < 0 || col >= this.width) return 0;
    else return this.board[row][col]
  }
  setCell(value, row, col) {
    // check if bad row or col
    if(row < 0 || row >= this.height || col < 0 || col >= this.width) return 0;
    this.board[row][col] = value
  }
  toggleCell(row, col) {
    if(row < 0 || row >= this.height || col < 0 || col >= this.width) return;
    this.board[row][col] = this.board[row][col] === 1 ? 0 : 1
    return this.board[row][col]
  }
  clear() {
    for(let i=0; i<this.board.length; i++) {
      for(let j=0; j<this.board[i].length; j++) {
        this.board[i][j] = 0
      }
    }
  }
  randomize() {
    const randZ = (max) => Math.floor(Math.random() * Math.floor(max));
    for(let i=0; i<this.board.length; i++) {
      for(let j=0; j<this.board[i].length; j++) {
        this.board[i][j] = randZ(2)
      }
    }
  }


}
