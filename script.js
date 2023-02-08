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
                return "draw";
            }
            else if (computerSelection === "paper") {
                return "lose";
            }
            else if (computerSelection === "scissors") {
                return "won";
            }
        case "paper":
            if (computerSelection === "rock") {
                return "won";
            }
            else if (computerSelection === "paper") {
                return "draw";
            }
            else if (computerSelection === "scissors") {
                return "lose";
            }
        case "scissors":
            if (computerSelection === "rock") {
                return "lose";
            }
            else if (computerSelection === "paper") {
                return "won";
            }
            else if (computerSelection === "scissors") {
                return "draw";
            }
    }
}

function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What will you choose? Rock, Paper or Scissors?");
        const computerSelection = getComputerChoice();
        const outcome = playRound(playerSelection, computerSelection);
        if (outcome === "won") {
            playerCount++;
            console.log("You won the round! Current points: you - " + playerCount + ", computer - " + computerCount);
        }
        else if (outcome === "lose") {
            computerCount++;
            console.log("You lost the round! Current points: you - " + playerCount + ", computer - " + computerCount);
        }
        else {
            console.log("It's a draw! Current points: you - " + playerCount + ", computer - " + computerCount);
        }
    }
    if (computerCount > playerCount) {
        console.log("The computer won.");
    }
    else if (playerCount > computerCount) { 
        console.log("You won!");
    }
    else {
        console.log("It's a draw.");
    }
}


game();
