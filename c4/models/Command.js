import { COMMAND } from "../Constants.js";

/**
 * Object to pass commands from the view layer to the controller. Do not
 * instantiate this class, use one of the static methods instead to
 * generate a Command object.
*/
class Command {
  constructor(commandType, move = null, playerType = null) {
    this.commandType = commandType;
    this.move = move;
    this.playerType = playerType;
  }

  /**
   * @returns {command} Command object with commandType property set to menu.
   */
  static returnToMenu() {
    return new Command(COMMAND.MENU);
  }

  /**
   * @returns {command} Command object with commandType property set to new game.
   */
  static newGame() {
    return new Command(COMMAND.NEW_GAME);
  }

  /**
   * @param {Move} move Move object describing new move.
   * @returns {command} Command object with commandType property set to new move.
   */
  static newMove(move) {
    return new Command(COMMAND.NEW_MOVE, move);
  }

  /**
   * @param {string} playerType String that reads either "human" or "ai".
   * @returns {command} Command object with commandType property set to new p1.
   */
  static setPlayer1(playerType) {
    return new Command(COMMAND.SET_PLAYER_1, null, playerType);
  }

  /**
   * @param {string} playerType String that reads either "human" or "ai".
   * @returns {command} Command object with commandType property set to new p2.
   */
  static setPlayer2(playerType) {
    return new Command(COMMAND.SET_PLAYER_2, null, playerType);
  }
}

export default Command;
