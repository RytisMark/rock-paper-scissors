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
                return "It's a draw!";
            }
            else if (computerSelection === "paper") {
                return "You lose! Paper beats Rock";
            }
            else if (computerSelection === "scissors") {
                return "You won! Rock beats Scissors";
            }
        case "paper":
            if (computerSelection === "rock") {
                return "You won! Paper beats Rock";
            }
            else if (computerSelection === "paper") {
                return "It's a draw!";
            }
            else if (computerSelection === "scissors") {
                return "You lose! Scissors beats Paper";
            }
        case "scissors":
            if (computerSelection === "rock") {
                return "You lose! Rock beats Scissors";
            }
            else if (computerSelection === "paper") {
                return "You won! Scissors beats Paper";
            }
            else if (computerSelection === "scissors") {
                return "It's a draw!";
            }
    }
}

const playerSelection = "rOcK";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
