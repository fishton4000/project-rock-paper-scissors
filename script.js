
// Selection variables for each round
let computerSelection = "";
let playerSelection = "";

// Score variables for the 5 rounds game
let computerScore = 0;
let playerScore = 0;

// rock = 0
// paper = 1
// scissors = 2


// This function attributes to computerSelection a value between 0 and 2

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) {
        computerSelection = 0;
    } else if (randomInt === 1) {
        computerSelection = 1;
    } else {
        computerSelection = 2;
    };

}

// This function asks for the player's choice and then converts this choice to the appropriate numerical value.
function getPlayerChoice() {
    playerSelection = prompt("What do you want to play? Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        playerSelection = 0;
    } else if (playerSelection === "paper") {
        playerSelection = 1;
    } else if (playerSelection === "scissors") {
        playerSelection = 2
    } else {
        return "Invalid."
    }
}

// This function is how each round is played

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === 0 && computerSelection === 2) {
        playerScore++;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === 0 && computerSelection === 1) {
        computerScore++;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === 1 && computerSelection === 0) {
        playerScore++;
        return "You Win! Paper beats Rock";
    } else if (playerSelection === 1 && computerSelection === 2) {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === 2 && computerSelection === 0) {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === 2 && computerSelection === 1){
        playerScore++;
        return "You Win! Scissors beats Paper";
    } else {
        return "Please enter rock, paper or scissors";
    }
}


//This function launches the 5 round game.

function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection));
    };
    if (playerScore === computerScore) {
        return `It's a tie ! ${playerScore} - ${computerScore} !`;
    } else if (playerScore > computerScore) {
        return `Congratulation you won ! The final score is ${playerScore} - ${computerScore} !`;
    } else {
        return `Sorry you lost! Better luck next time ! The final score is ${playerScore} - ${computerScore} !`;
    }
}

console.log(game())
