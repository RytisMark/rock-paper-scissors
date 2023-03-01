let playerScore = 0;
let computerScore = 0;
const winnerInfo = document.querySelector('.winner-info');
const roundInfo = document.querySelector('.round-info');
const scoreboard = document.querySelector('.scoreboard');

const btnRock = document.querySelector(".btn-rock");
btnRock.addEventListener('click', () => {
    updateInfo(playRound("rock", getComputerChoice()));
});

const btnPaper = document.querySelector(".btn-paper");
btnPaper.addEventListener('click', () => {
    updateInfo(playRound("paper", getComputerChoice()));
});

const btnScissors = document.querySelector(".btn-scissors");
btnScissors.addEventListener('click', () => {
    updateInfo(playRound("scissors", getComputerChoice()));
});

const btnRestart = document.querySelector(".btn-restart");
btnRestart.addEventListener('click', () => {
    restartGame();
});

function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection= computerSelection.toLowerCase();

    switch(playerSelection) {
        case "rock":
            if (computerSelection === "rock") {
                winnerInfo.textContent = "The round was a draw.";
                roundInfo.textContent = "You and the computer both chose rock.";
                return "draw";
            }
            else if (computerSelection === "paper") {
                winnerInfo.textContent = "You lost the round..."
                roundInfo.textContent = "You chose rock while the computer chose paper...";
                return "lose";
            }
            else if (computerSelection === "scissors") {
                winnerInfo.textContent = "You won the round!";
                roundInfo.textContent = "You chose rock while the computer chose scissors!";
                return "win";
            }
        case "paper":
            if (computerSelection === "rock") {
                winnerInfo.textContent = "You won the round!";
                roundInfo.textContent = "You chose paper while the computer chose rock!";
                return "win";
            }
            else if (computerSelection === "paper") {
                winnerInfo.textContent = "The round was a draw.";
                roundInfo.textContent = "You and the computer both chose paper.";
                return "draw";
            }
            else if (computerSelection === "scissors") {
                winnerInfo.textContent = "You lost the round..."
                roundInfo.textContent = "You chose paper while the computer chose scissors...";
                return "lose";
            }
        case "scissors":
            if (computerSelection === "rock") {
                winnerInfo.textContent = "You lost the round..."
                roundInfo.textContent = "You chose scissors while the computer chose rock...";
                return "lose";
            }
            else if (computerSelection === "paper") {
                winnerInfo.textContent = "You won the round!";
                roundInfo.textContent = "You chose scissors while the computer chose paper!";
                return "win";
            }
            else if (computerSelection === "scissors") {
                winnerInfo.textContent = "The round was a draw.";
                roundInfo.textContent = "You and the computer both chose scissors.";
                return "draw";
            }
    }
}

function updateInfo(outcome) {
    if (outcome === "win") playerScore += 1;
    else if (outcome === "lose") computerScore += 1;

    scoreboard.textContent = `${playerScore} vs. ${computerScore}`;

    if ((computerScore >= 5) && (computerScore > playerScore)) {
        winnerInfo.textContent = "The computer won the game...";
        btnRestart.style.visibility = "visible";
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    } else if ((playerScore >= 5) && (playerScore > computerScore)) { 
        winnerInfo.textContent = "You won the game!";
        btnRestart.style.visibility = "visible";
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    winnerInfo.textContent = "First up to 5 points wins!";
    roundInfo.textContent = "Choose your weapon!"
    scoreboard.textContent = "Player vs. Computer"
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
    btnRestart.style.visibility = "hidden";
}
