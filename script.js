/*
TODO:
GameBoard:
    clicking on a square places an X or O
    Checks gamestate for winner(maybe put in gamestatus)
GameStatus:
    Displays a winner
ResetButton:

COMPLETED:
GameBoard:

GameStatus:

ResetButton:
    resets game logic/board state. Mayeb just reload page? 
*/

function playerMove(cell) {
    let cellClicked = document.querySelector(`div[cellIndex='${cell}']`);
    cellClicked.textContent = "X";
}

function reloadPage() {
    location.reload();
}