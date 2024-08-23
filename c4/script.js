import { UPDATE, GAME_STATUS } from "./Constants.js";
import Connect4 from "./Connect4.js";
import Command from "./models/Command.js";
import Move from "./models/Move.js";

const vi = new viewInterface();
const c4 = new Connect4(vi);
const gameBoardId = "gameBoard";

window.addEventListener("DOMContentLoaded", () => {
  app();
});

function app() {
  const gameStartButton = document.getElementById("gameStart__button");
  const newGameButton = document.getElementById("newGame");
  const returnToMenuButton = document.getElementById("returnToMenu");

  gameStartButton.addEventListener("click", (e) => {
    setPlayers();
    requestNewGame();
  });

  newGameButton.addEventListener("click", (e) => {
    requestNewGame();
  });

  returnToMenuButton.addEventListener("click", (e) => {
    requestReturnToMenu();
  });
}

function setPlayers() {
  const p1_isHuman = document.getElementById("p1_human").checked;
  const p2_isHuman = document.getElementById("p2_human").checked;

  const p1 = p1_isHuman ? "human" : "ai";
  const p2 = p2_isHuman ? "human" : "ai";

  c4.command(Command.setPlayer1(p1));
  c4.command(Command.setPlayer2(p2));
}

function requestNewGame() {
  c4.command(Command.newGame());
}

function doNewGame() {
  const menuContainer = document.getElementById("menuContainer");
  const gameContainer = document.getElementById("gameContainer");

  buildBoard();
  vi.isPlayer1 = true;

  menuContainer.classList.add("hidden");
  gameContainer.classList.remove("hidden");
}

function requestReturnToMenu() {
  c4.command(Command.returnToMenu());
}

function doReturnToMenu() {
  const menuContainer = document.getElementById("menuContainer");
  const gameContainer = document.getElementById("gameContainer");

  menuContainer.classList.remove("hidden");
  gameContainer.classList.add("hidden");
}

function buildBoard() {
  const board = vi.board;
  const table = document.getElementById(gameBoardId);
  table.innerHTML = ""; // clear any existing table;

  const rows = board.length;
  const columns = board[0].length;

  for (let r = 0; r < rows; r++) {
    let row = table.insertRow(r);

    for (let c = 0; c < columns; c++) {
      let cell = row.insertCell(c);
      cell.classList.add("tableCell");
      cell.addEventListener("mouseenter", function () {
        onCellHover(c);
      });
      cell.addEventListener("mouseleave", function () {
        onCellHoverOut(c);
      });
      cell.addEventListener("click", function () {
        onCellClick(c);
        onCellHoverOut(c);
      });
    }
  }
}

function onCellHover(column) {
  const board = vi.board;
  const table = document.getElementById(gameBoardId);
  const rows = board.length;

  for (let r = rows - 1; r >= 0; r--) {
    if (board[r][column][0] === 0 && board[r][column][1] === 0) {
      const cell = table.rows[r].cells[column];
      cell.classList.add("cellHighlight");
    }
  }
}

function onCellHoverOut(column) {
  const board = vi.board;
  const table = document.getElementById(gameBoardId);
  const rows = board.length;

  for (let r = rows - 1; r >= 0; r--) {
    if (board[r][column][0] === 0 && board[r][column][1] === 0) {
      const cell = table.rows[r].cells[column];
      cell.classList.remove("cellHighlight");
    }
  }
}

function onCellClick(column) {
  const board = vi.board;
  const rows = board.length;
  let row = -1;

  for (let r = rows - 1; r >= 0; r--) {
    if (board[r][column][0] === 0 && board[r][column][1] === 0) {
      row = r;
      break;
    }
  }

  if (row !== -1) {
    const move = new Move(column, row, vi.isPlayer1);
    c4.command(Command.newMove(move));
  }
}

function updateBoard(move) {
  const table = document.getElementById(gameBoardId);
  const cell = table.rows[move.row].cells[move.col];
  const piece = move.isPlayer1 ? "redPiece" : "yellowPiece";

  cell.classList.remove("cellHighlight");
  cell.classList.add(piece);
  vi.isPlayer1 = !vi.isPlayer1;
}

function viewInterface() {
  this.board = null;
  this.isPlayer1 = true;
}

viewInterface.prototype.update = function (update) {
  if (update.updateType === UPDATE.NEW_STATUS) {
    // if new status is draw or win
    if (update.newMove) {
      updateBoard(update.newMove);
    }

    if (update.newStatus === GAME_STATUS.MENU) {
      doReturnToMenu();
    }
  }

  if (update.updateType === UPDATE.NEW_BOARD) {
    this.board = update.newBoard;
    doNewGame();
  }

  if (update.updateType === UPDATE.NEW_MOVE) {
    updateBoard(update.newMove);
  }

  this.updateInfoDisplay(update);
};

viewInterface.prototype.updateInfoDisplay = function (update) {
  const player1Status = document.getElementById("player1Status");
  const player2Status = document.getElementById("player2Status");
  const player1Card = document.getElementById("player1Card");
  const player2Card = document.getElementById("player2Card");
  const docBody = document.body;

  if (update.updateType === UPDATE.NEW_MOVE) {
    if (update.newMove.isPlayer1) {
      player1Status.innerHTML = "Waiting";
      player2Status.innerHTML = "Your turn";
      player1Card.classList.remove("whiteBG");
      player2Card.classList.add("whiteBG");
    } else {
      player1Status.innerHTML = "Your turn";
      player2Status.innerHTML = "Waiting";
      player1Card.classList.add("whiteBG");
      player2Card.classList.remove("whiteBG");
    }
  }

  if (update.updateType === UPDATE.NEW_BOARD) {
    player1Status.innerHTML = "Your turn";
    player2Status.innerHTML = "Waiting";
    player1Card.classList.add("whiteBG");
    player2Card.classList.remove("whiteBG");
    docBody.classList.remove("redPiece");
    docBody.classList.remove("yellowPiece");
  }

  if (update.updateType === UPDATE.NEW_STATUS) {
    if (update.newStatus === GAME_STATUS.P1WIN) {
      player1Status.innerHTML = "Winner!";
      player2Status.innerHTML = "Loser";
      player1Card.classList.add("whiteBG");
      player2Card.classList.remove("whiteBG");
      docBody.classList.add("redPiece");
    }
    else if (update.newStatus === GAME_STATUS.P2WIN) {
      player1Status.innerHTML = "Loser";
      player2Status.innerHTML = "Winner";
      player1Card.classList.remove("whiteBG");
      player2Card.classList.add("whiteBG");
      docBody.classList.add("yellowPiece");
    }
    else if (update.newStatus === GAME_STATUS.DRAW) {
      player1Status.innerHTML = "Draw";
      player2Status.innerHTML = "Draw";
      player1Card.classList.remove("whiteBG");
      player2Card.classList.remove("whiteBG");
    }
    else if (update.newStatus === GAME_STATUS.MENU) {
      docBody.classList.remove("redPiece");
      docBody.classList.remove("yellowPiece");
    }
  }
};
