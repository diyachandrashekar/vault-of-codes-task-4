// Variables to store player names and choices
let player1Name = "";
let player1Choice = "";
let player2Name = "";
let player2Choice = "";

// Event listener for the "Next" button on the Name Input Page
const startGameButton = document.getElementById("startGameButton");
startGameButton.addEventListener("click", function () {
    player1Name = document.getElementById("player1Name").value;
    player1Choice = document.getElementById("player1Choice").value;
    player2Name = document.getElementById("player2Name").value;
    player2Choice = document.getElementById("player2Choice").value;

    // Store player names and choices in sessionStorage
    sessionStorage.setItem('player1Name', player1Name);
    sessionStorage.setItem('player1Choice', player1Choice);
    sessionStorage.setItem('player2Name', player2Name);
    sessionStorage.setItem('player2Choice', player2Choice);

    // Redirect to the Game Page
    window.location.href = 'game.html';
});

// Function to retrieve player names and choices from sessionStorage
function retrievePlayerData() {
    player1Name = sessionStorage.getItem('player1Name');
    player1Choice = sessionStorage.getItem('player1Choice');
    player2Name = sessionStorage.getItem('player2Name');
    player2Choice = sessionStorage.getItem('player2Choice');
}

// Function to update the player names on the Game Page
function updatePlayerNames() {
    document.getElementById('player1Name').textContent = player1Name;
    document.getElementById('player2Name').textContent = player2Name;
    document.getElementById('player1Choice').textContent = player1Choice;
    document.getElementById('player2Choice').textContent = player2Choice;
}

// On the Game Page, retrieve player data and update names
if (window.location.pathname.includes('game.html')) {
    retrievePlayerData();
    updatePlayerNames();
}
