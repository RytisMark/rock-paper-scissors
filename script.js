let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection= computerSelection.toLowerCase();
    const winnerInfo = document.querySelector('.winner-info');

    switch(playerSelection) {
        case "rock":
            if (computerSelection === "rock") {
                winnerInfo.textContent = "The round was a draw.";
                return "draw";
            }
            else if (computerSelection === "paper") {
                winnerInfo.textContent = "You lost the round..."
                return "lose";
            }
            else if (computerSelection === "scissors") {
                winnerInfo.textContent = "You won the round!";
                return "win";
            }
        case "paper":
            if (computerSelection === "rock") {
                winnerInfo.textContent = "You won the round!";
                return "win";
            }
            else if (computerSelection === "paper") {
                winnerInfo.textContent = "The round was a draw.";
                return "draw";
            }
            else if (computerSelection === "scissors") {
                winnerInfo.textContent = "You lost the round..."
                return "lose";
            }
        case "scissors":
            if (computerSelection === "rock") {
                winnerInfo.textContent = "You lost the round..."
                return "lose";
            }
            else if (computerSelection === "paper") {
                winnerInfo.textContent = "You won the round!";
                return "win";
            }
            else if (computerSelection === "scissors") {
                winnerInfo.textContent = "The round was a draw.";
                return "draw";
            }
    }
}

function updateInfo(outcome) {
    const scoreboard = document.querySelector('.scoreboard');
    const winnerInfo = document.querySelector('.winner-info');

    if (outcome === "win") playerScore += 1;
    else if (outcome === "lose") computerScore += 1;

    scoreboard.textContent = `${playerScore} vs. ${computerScore}`;

    if ((computerScore >= 5) && (computerScore > playerScore)) {
        winnerInfo.textContent = "The computer won the game...";
        restartGame();
    } else if ((playerScore >= 5) && (playerScore > computerScore)) { 
        winnerInfo.textContent = "You won the game!";
        restartGame();
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
}

const btns = document.querySelectorAll('button');
btns.forEach(function(btn) {
    btn.addEventListener('click', (e) => {
        if (e.srcElement.className === 'btn-rock') {
            updateInfo(playRound("rock", getComputerChoice()));
        }
        else if (e.srcElement.className === 'btn-paper') {
            updateInfo(playRound("paper", getComputerChoice()));
        }
        else if (e.srcElement.className === 'btn-scissors') {
            updateInfo(playRound("scissors", getComputerChoice()));
        }
    });
});
