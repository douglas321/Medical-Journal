/*
TODO:
Make game look pretty

GameBoard:
GameStatus:   
ResetButton:

COMPLETED:
GameBoard:
    clicking on a square places an X or O
    Checks gamestate for winner(maybe put in gamestatus)
GameStatus:
    Displays a winner
ResetButton:
    resets game logic/board state. Mayeb just reload page? 
*/
let nextShape = false;
let winner = null;
let statusLabel = document.querySelector("h2");
let gameState = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let turnCount = 0;

//main "game loop"
//each time a cell is clicked the game iterates through it's "loop", making a move and checking for a winner.
function playerMove(row, col, cell) {
    turnCount += 1;
    let cellClicked = document.querySelector(`div[cellIndex='${cell}']`);
    if(!cellClicked.textContent){
        if(nextShape){
            statusLabel.textContent = "Player X's Turn";
            cellClicked.textContent = "O";
        }
        else {
            statusLabel.textContent = "Player O's Turn";
            cellClicked.textContent = "X";
        }

        gameState[row][col] = cellClicked.textContent;
        console.log(gameState);


        winner = checkWin(gameState);
        if (winner){
            statusLabel.textContent = (`${winner} Wins!`);  
            disableCells();
        } else if(turnCount >= 9){
            statusLabel.textContent = (`Cat's Game.`);  
            disableCells();
        } else {
            nextShape = !nextShape;      
        }
    }      
}

//Microsoft Copilot 11/19/2024
//disables event listeners for .cell so that no more moves can be made after a winner.
function disableCells() {
    document.querySelectorAll('.cell').forEach(cell => { 
        cell.style.pointerEvents = 'none'; // Disable clicks 
    }); 
}

function reloadPage() {
    location.reload();
}

//iterate through rows/cols to check for a winner, also check diagnol specific win conditions.
function checkWin(gameState) {
    //check rows
    for (let i=0; i<gameState.length; i++){
        if (gameState[i][0] === gameState[i][1] && gameState[i][1] === gameState[i][2] && gameState[i][0] !== '')
            return(gameState[i][0]);
    }
    //check columns
    for (let i=0; i<gameState.length; i++){
        if (gameState[0][i] === gameState[1][i] && gameState[1][i] === gameState[2][i] && gameState[0][i] !== '')
            return(gameState[0][i]);
    }
    //check diagonals
    if (gameState[0][0] === gameState[1][1] && gameState[1][1] === gameState[2][2] && gameState[1][1] !== '')
        return(gameState[0][0]);
    if (gameState[0][2] === gameState[1][1] && gameState[1][1] === gameState[2][0] && gameState[0][2] !== '')
        return(gameState[0][2]);
    return null;
}