// Variables for game state
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

// Get all the cells
const cells = document.querySelectorAll("[data-cell]");

// Event listener for cell clicks
cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
});

// Event listener for the reset button
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetGame);

// Function to handle cell clicks
function handleCellClick() {
    if (gameOver || this.textContent !== "") return;

    const cellIndex = Array.from(cells).indexOf(this);

    gameBoard[cellIndex] = currentPlayer;
    this.textContent = currentPlayer;

    if (checkWin()) {
        endGame(currentPlayer);
    } else if (checkDraw()) {
        endGame("Draw");
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateStatus();
    }
}

// Function to check for a win
function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }

    return false;
}

// Function to check for a draw
function checkDraw() {
    return !gameBoard.includes("");
}

// Function to end the game
function endGame(winner) {
    gameOver = true;
    const status = document.querySelector("[data-status]");

    if (winner === "Draw") {
        status.textContent = "It's a Draw!";
    } else {
        status.textContent = `Player ${winner} wins!`;
    }
}

// Function to update the game status
function updateStatus() {
    const status = document.querySelector("[data-status]");
    status.textContent = `Player ${currentPlayer}'s turn`;
}

// Function to reset the game
function resetGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    currentPlayer = "X";
    cells.forEach((cell) => {
        cell.textContent = "";
    });
    updateStatus();
}
