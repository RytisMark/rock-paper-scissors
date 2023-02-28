let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection= computerSelection.toLowerCase();
    const roundInfo = document.querySelector('.round-info');

    switch(playerSelection) {
        case "rock":
            if (computerSelection === "rock") {
                roundInfo.textContent = "The round was a draw.";
                return "draw";
            }
            else if (computerSelection === "paper") {
                roundInfo.textContent = "You lost the round..."
                return "lose";
            }
            else if (computerSelection === "scissors") {
                roundInfo.textContent = "You won the round!";
                return "win";
            }
        case "paper":
            if (computerSelection === "rock") {
                roundInfo.textContent = "You won the round!";
                return "win";
            }
            else if (computerSelection === "paper") {
                roundInfo.textContent = "The round was a draw.";
                return "draw";
            }
            else if (computerSelection === "scissors") {
                roundInfo.textContent = "You lost the round..."
                return "lose";
            }
        case "scissors":
            if (computerSelection === "rock") {
                roundInfo.textContent = "You lost the round..."
                return "lose";
            }
            else if (computerSelection === "paper") {
                roundInfo.textContent = "You won the round!";
                return "win";
            }
            else if (computerSelection === "scissors") {
                roundInfo.textContent = "The round was a draw.";
                return "draw";
            }
    }
}

function updateInfo(outcome) {
    const scoreboard = document.querySelector('.scoreboard');
    const winnerInfo = document.querySelector('.winner-info');
    
    if (outcome === "win") playerScore += 1;
    else if (outcome === "lose") computerScore += 1;

    scoreboard.textContent = `Current score: ${playerScore} (you) - ${computerScore} (computer)`;

    if ((computerScore >= 5) && (computerScore > playerScore)) {
        winnerInfo.textContent = "The computer won the game...";
    } else if ((playerScore >= 5) && (playerScore > computerScore)) { 
        winnerInfo.textContent = "You won the game!";
    }
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
