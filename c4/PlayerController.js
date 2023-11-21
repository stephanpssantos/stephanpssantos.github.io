import { GAME_STATUS, UPDATE } from "./Constants.js";
import CPUController from "./CPUController.js";

class PlayerController {
  constructor(game) {
    this.p1Type = null;
    this.p2Type = null;
    this.p1AI = null;
    this.p2AI = null;
    this.game = game;
    this.board = this.game.board;
  }

  checkState() {
    if (!this.board) return false;
    if (!this.p1Type || !this.p2Type) return false;
    if (this.p1Type === "ai" && !this.p1AI) return false;
    if (this.p2Type === "ai" && !this.p2AI) return false;
    
    return true;
  }

  startGame() {
    if (this.p1Type === "ai" && this.p1AI) {
      this.p1AI.notifyTurn();
    }
  }

  /**
   * Sets player types and instantiates new AI controller if needed.
   *
   * @param {number} player Must be either 1 or 2.
   * @param {string} playerType Must be either "human" or "ai".
   */
  setPlayer(player, playerType) {
    if (player !== 1 && player !== 2) {
      return;
    }

    if (playerType === "human") {
      player === 1 ? (this.p1Type = "human") : (this.p2Type = "human");
      player === 1 ? (this.p1AI = null) : (this.p2AI = null);
    } else if (playerType === "ai") {
      if (player === 1) {
        this.p1AI = new CPUController(this.game, 1);
        this.p1Type = "ai";
      }
      else {
        this.p2AI = new CPUController(this.game, 2);
        this.p2Type = "ai";
      }
    }
  }

  moveUpdate(update) {
    let cpuController = null;
    let cpuOpponent = null;

    if (this.p1Type === "ai") {
      update.newMove.isPlayer1
        ? (cpuController = this.p1AI)
        : (cpuOpponent = this.p1AI);
    }
    if (this.p2Type === "ai") {
      !update.newMove.isPlayer1
        ? (cpuController = this.p2AI)
        : (cpuOpponent = this.p2AI);
    }

    if (update.updateType === UPDATE.MOVE_REJECTED) {
      if (cpuController) cpuController.notifyRejection();
    } else if (
      update.updateType === UPDATE.NEW_STATUS &&
      (update.newStatus === GAME_STATUS.P1WIN ||
        update.newStatus === GAME_STATUS.P2WIN)
    ) {
      if (cpuController) cpuController.notifyWinner();
      if (cpuOpponent) cpuOpponent.notifyLoser();
    } else if (
      update.updateType === UPDATE.NEW_STATUS &&
      update.newStatus === GAME_STATUS.DRAW
    ) {
      if (cpuController) cpuController.notifyDraw();
      if (cpuOpponent) cpuOpponent.notifyDraw();
    } else if (update.updateType === UPDATE.NEW_MOVE) {
      if (cpuOpponent) cpuOpponent.notifyTurn();
    }
  }
}

export default PlayerController;
