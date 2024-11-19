/*
TODO:
GameBoard:

    Checks gamestate for winner(maybe put in gamestatus)
GameStatus:
    Displays a winner
ResetButton:

COMPLETED:
GameBoard:
    clicking on a square places an X or O
GameStatus:

ResetButton:
    resets game logic/board state. Mayeb just reload page? 
*/
nextShape = false

function playerMove(cell) {
    let cellClicked = document.querySelector(`div[cellIndex='${cell}']`);
    let statusLabel = document.querySelector("h2");
    if(!cellClicked.textContent){
        if(nextShape){
            statusLabel.textContent = "Player X's Turn";
            cellClicked.textContent = "O";
        }
        else{
            statusLabel.textContent = "Player O's Turn";
            cellClicked.textContent = "X";
        }
        nextShape = !nextShape
    }
        
}

function reloadPage() {
    location.reload();
}