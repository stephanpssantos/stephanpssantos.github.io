import Command from "./models/Command.js";
import Move from "./models/Move.js";

class CPUController {
  constructor(game, player) {
    this.game = game;
    this.board = this.game.board;
    this.isPlayer1 = player === 1;
    this.model = null;
  }

  notifyTurn() {
    if (!this.model) {
        this._loadAndGo();
    }
    else {
        let board = this.board.getBoard();

        if (!this.isPlayer1) {
          let boardCopy = this._copyBoard(board);
          this._invertBoard(boardCopy);
          board = boardCopy;
        }

        const mask = this._getLegalMoves(board);
        const col = this._getPrediction(board);
        const row = mask[col];
        const move = new Move(col, row, this.isPlayer1);
        const command = Command.newMove(move);

        // so that it doesn't all just happen in the blink
        // of an eye
        setTimeout(() => {
          this.game.command(command);
        }, 250);
    }
  }

  notifyRejection() {
    // this.notifyTurn();
    // not implemented
    return;
  }

  notifyWinner() {
    // not implemented
    return;
  }

  notifyLoser() {
    // not implemented
    return;
  }

  notifyDraw() {
    // not implemented
    return;
  }

  async _loadAndGo() {
    if (!this.model) {
        await this._loadModel();
    }
    this.notifyTurn();
  }

  async _loadModel() {
    // later this needs to check if it's p1 or p2
    const URL = this.isPlayer1 ? "aiModels/p1/model.json" : "aiModels/p2/model.json"
    this.model = await tf.loadLayersModel(URL);
  }

  _invertBoard(board) {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
        board[row][col] *= -1;
      }
    }
  }

  _getPrediction(board) {
    const mask = this._getLegalMoves(board);

    return tf.tidy(() => {
      for (let i = 0; i < mask.length; i++) {
        if (mask[i] < 0) {
          // not a valid move
          continue;
        }
        const boardCopy = this._copyBoard(board);
        boardCopy[mask[i]][i] = 1;
        const tensorBoard = this._prepareForPrediction(boardCopy);
        mask[i] = this.model.predict(tensorBoard).dataSync()[0];
      }

      const max = Math.max(...mask);
      const output = mask.indexOf(max);

      return output;
    });
  }

  _getLegalMoves(board) {
    const mask = new Array(7).fill(-100);

    for (let col = 0; col < board[0].length; col++) {
      for (let row = 0; row < board.length; row++) {
        if (board[row][col] === 0) {
          mask[col] = row;
        } else {
          break;
        }
      }
    }

    return mask;
  }

  _copyBoard(board) {
    if (!Array.isArray(board)) {
      return board;
    }

    const copiedBoard = [];

    for (let i = 0; i < board.length; i++) {
      copiedBoard[i] = this._copyBoard(board[i]);
    }

    return copiedBoard;
  }

  _prepareForPrediction(board) {
    // the original board shape is (6, 7), but
    // to run predictions it needs to be (1, 6, 7, 1)
    // (the first dimension is the batch size)

    return tf.tidy(() => {
      const boardTensor2D = tf.tensor2d(board);
      const boardTensor3D = boardTensor2D.expandDims(2).expandDims(0);

      return boardTensor3D;
    });
  }
}

export default CPUController;