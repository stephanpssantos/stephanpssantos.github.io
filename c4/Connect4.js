import { COMMAND, GAME_STATUS, UPDATE } from "./Constants.js";
import Update from "./models/Update.js";
import Board from "./Board.js";
import PlayerController from "./PlayerController.js";

class Connect4 {
  constructor(viewInterface) {
    this.viewInterface = viewInterface;

    this.status = GAME_STATUS.MENU;
    this.turn = 1;
    this.p1Turn = true;

    this.board = new Board(this);
    this.playerController = new PlayerController(this);
  }

  /**
   * Pass in commands from the view layer.
   *
   * @param {Command} newCommand Command object.
   */
  command(newCommand) {
    switch (newCommand.commandType) {
      case COMMAND.MENU:
        this._returnToMenu();
        break;

      case COMMAND.NEW_GAME:
        this._newGame();
        break;

      case COMMAND.SET_PLAYER_1:
        this._setPlayer(1, newCommand.playerType);
        break;

      case COMMAND.SET_PLAYER_2:
        this._setPlayer(2, newCommand.playerType);
        break;

      case COMMAND.NEW_MOVE:
        this._makeMove(newCommand.move);
        break;
    }
  }

  _returnToMenu() {
    this._clearGame();
    this.status = GAME_STATUS.MENU;

    const viewUpdate = Update.returnToMenu();
    this._updateView(viewUpdate);
  }

  _setPlayer(player, playerType) {
    if (this.status === GAME_STATUS.MENU) {
      this.playerController.setPlayer(player, playerType);
    }
  }

  _clearGame() {
    this.p1Turn = true;
    this.turn = 1;
    this.board.newBoard();
  }

  _newGame() {
    this._clearGame();

    const newBoard = this.board.getBoard();

    // Check to see if players are assigned
    if (!this.playerController.checkState()) {
      const viewUpdate = Update.invalidGameState();
      this._updateView(viewUpdate);
      return;
    } else {
      const viewUpdate = Update.newBoard(newBoard);
      this._updateView(viewUpdate);
    }

    if (this.status !== GAME_STATUS.ACTIVE) {
      this.status = GAME_STATUS.ACTIVE;
      const viewUpdate = Update.activeStatus();
      this._updateView(viewUpdate);
      this.playerController.startGame();
    }
  }

  /**
   * Checks if new move is valid, updates the board, and calls
   * the _updateView method with the result.
   *
   * @param {Move} move Move object.
   */
  _makeMove(move) {
    const update = this.board.makeMove(move);

    if (update.updateType === UPDATE.NEW_STATUS) {
      this.status = update.newStatus;
    } else if (update.updateType !== UPDATE.MOVE_REJECTED) {
      this.turn++;
      this.p1Turn = !this.p1Turn;
    }

    this._updateView(update);
    this.playerController.moveUpdate(update);
  }

  /**
   * Calls the update method of the viewInterface that the game
   * was instantiated with.
   *
   * @param {Update} viewUpdate Update object.
   */
  _updateView(viewUpdate) {
    if (this.viewInterface) {
      this.viewInterface.update(viewUpdate);
    }
  }
}

export default Connect4;
