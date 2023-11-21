import { UPDATE, GAME_STATUS } from "../Constants.js";

/** Create a new update to be consumed by the view interface. Do not
 * instantiate this class, use one of the static methods instead to
 * generate an Update object.
 */
class Update {
  constructor(updateType, newStatus = null, newMove = null, newBoard = null) {
    this.updateType = updateType;
    this.newStatus = newStatus;
    this.newMove = newMove;
    this.newBoard = newBoard;
  }

  /**
   * @returns {Update} Update object with newStatus property set to menu.
   */
  static returnToMenu() {
    return new Update(UPDATE.NEW_STATUS, GAME_STATUS.MENU);
  }

  /**
   * @returns {Update} Update object with newStatus property set to active.
   */
  static activeStatus() {
    return new Update(UPDATE.NEW_STATUS, GAME_STATUS.ACTIVE);
  }

  /**
   * @returns {Update} Update object with INVALID_GAME_STATE updateType.
   */
  static invalidGameState() {
    return new Update(UPDATE.INVALID_GAME_STATE);
  }

  /**
   * @returns {Update} Update object with with MOVE_REJECTED updateType.
   */
  static rejectMove(move) {
    return new Update(UPDATE.MOVE_REJECTED, null, move);
  }

  /**
   * @param {Array.Array.<number>} board Nested array representing board.
   * @returns {Update} Update object with newBoard property.
   */
  static newBoard(board) {
    return new Update(UPDATE.NEW_BOARD, null, null, board);
  }

  /**
   * @param {Move} move Move object that caused win.
   * @returns {Update} Update object with newStatus and newMove property.
   */
  static winningMove(move) {
    const newStatus = move.isPlayer1 ? GAME_STATUS.P1WIN : GAME_STATUS.P2WIN;
    return new Update(UPDATE.NEW_STATUS, newStatus, move);
  }

  /**
   * @param {Move} move Move object that caused draw.
   * @returns {Update} Update object with newStatus and newMove property.
   */
  static drawingMove(move) {
    return new Update(UPDATE.NEW_STATUS, GAME_STATUS.DRAW, move);
  }

  /**
   * @param {Move} move Move object detailing most recent move.
   * @returns {Update} Update object with newMove property.
   */
  static newMove(move) {
    return new Update(UPDATE.NEW_MOVE, null, move);
  }
}

export default Update;
