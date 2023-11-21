/**
 * Describes a new piece being dropped into the board.
 */
class Move {
    /**
     * 
     * @param {number} col 0-index board column position.
     * @param {number} row 0-index board row position.
     * @param {boolean} isPlayer1 Boolean indicating if player 1 made move.
     */
    constructor(col, row, isPlayer1) {
        this.col = col;
        this.row = row;
        this.isPlayer1 = isPlayer1;
    }
}

export default Move;