import { GAME_CONFIG, GAME_STATUS } from "./Constants.js";
import Update from "./models/Update.js";

class Board {
  constructor(game) {
    this.game = game;

    this.boardWidth = GAME_CONFIG.BOARD_WIDTH;
    this.boardHeight = GAME_CONFIG.BOARD_HEIGHT;
    this.turnLimit = GAME_CONFIG.TURN_LIMIT;

    this.board = null;
    this.invertedBoard = null;
  }

  getBoard() {
    return this.board;
  }

  getInvertedBoard() {
    return this.invertedBoard;
  }

  newBoard() {
    this.board = this._makeNewBoard();
    this.invertedBoard = this._makeNewBoard();
  }

  makeMove(move) {
    // check if valid
    const isValid = this._validateMove(move);
    if (!isValid) return Update.rejectMove(move);

    // place piece
    const p1 = move.isPlayer1 ? 0 : 1;
    const p2 = move.isPlayer1 ? 1 : 0;
    this.board[move.row][move.col][p1] = 1;
    this.invertedBoard[move.row][move.col][p2] = 1;

    // winner
    const winner = this._checkWinner(move);
    if (winner) return Update.winningMove(move);

    // draw
    if (this.game.turn + 1 > this.turnLimit) return Update.drawingMove(move);

    // keep playing
    return Update.newMove(move);
  }

  _makeNewBoard() {
    const height = this.boardHeight;
    const width = this.boardWidth;

    let board = new Array(height)
      .fill(0)
      .map((x) => (x = new Array(width)
      .fill(0)
      .map((y) => y = new Array(2)
      .fill(0))
    ));

    return board;
  }

  _validateMove(move) {
    if (this.game.status !== GAME_STATUS.ACTIVE) return false;
    if (move.isPlayer1 !== this.game.p1Turn) return false;
    if (move.row < 0 || move.col < 0) return false;
    if (move.row >= this.boardHeight) return false;
    if (move.col >= this.boardWidth) return false;
    if (this.board[move.row][move.col][0] !== 0 || 
      this.board[move.row][move.col][1] !== 0) return false;

    for (let r = move.row + 1; r < this.boardHeight; r++) {
      if (this.board[r][move.col][0] === 0 && 
        this.board[r][move.col][1] === 0) {
        return false;
      }
    }

    return true;
  }

  _checkWinner(move) {
    const player = move.isPlayer1 ? 0 : 1;
    const board = this.board;

    function goDirection(row, col, direction, count) {
      if (direction === 1 || direction === 2 || direction === 3) {
        row--;
      }
      if (direction === 5 || direction === 6 || direction === 7) {
        row++;
      }
      if (direction === 3 || direction === 4 || direction === 5) {
        col--;
      }
      if (direction === 1 || direction === 7 || direction === 8) {
        col++;
      }

      const nextPosition = board[row] ? board[row][col] : null;

      if (!nextPosition || nextPosition[player] !== 1) return count;
      else return goDirection(row, col, direction, ++count);
    }

    const nw_se =
      1 +
      goDirection(move.row, move.col, 1, 0) +
      goDirection(move.row, move.col, 5, 0);
    const w_e =
      1 +
      goDirection(move.row, move.col, 2, 0) +
      goDirection(move.row, move.col, 6, 0);
    const sw_ne =
      1 +
      goDirection(move.row, move.col, 3, 0) +
      goDirection(move.row, move.col, 7, 0);
    const n_s =
      1 +
      goDirection(move.row, move.col, 4, 0) +
      goDirection(move.row, move.col, 8, 0);

    const most = Math.max(nw_se, w_e, sw_ne, n_s);

    return most >= 4 ? true : false;
  }
}

export default Board;
