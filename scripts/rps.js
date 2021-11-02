const MOVES = ["ROCK", "PAPER", "SCISSORS"];
const WIN = "WIN";
const LOSE = "LOSE";

function computerPlay() {
    /** Pick a random int 0 to 2 and pick it from the MOVES list */
    let move = Math.floor(Math.random() * MOVES.length);
    return MOVES[move];
}

function playerPlay() {
    /** Player enters valid move (with check) */
    let move = prompt("Play your move from 'rock', 'paper', or 'scissors'.").toUpperCase();
    while (!MOVES.includes(move)) {
        alert("Please enter a valid move.");
        move = prompt("Play your move from 'rock', 'paper', or 'scissors'.").toUpperCase();
    }
    return move;
}

function playRound(playerSelection, computerSelection) {
    // Draw
    if (playerSelection === computerSelection) { alert(`It's a draw! You both played ${playerSelection}. Try again.`); }
    // Lose
    else if (playerSelection === "ROCK" && computerSelection === "PAPER"
    || playerSelection === "PAPER" && computerSelection === "SCISSORS"
    || playerSelection === "SCISSORS" && computerSelection === "ROCK") { 
        alert(`You lose! ${computerSelection} beats ${playerSelection}.`);
        return LOSE;
    }
    // Win
    else { 
        alert(`You win! ${playerSelection} beats ${computerSelection}.`);
        return WIN; 
    }
}

function game() {
    /** Main game loop */
    // Declare number of rounds
    let rounds = +prompt("How many rounds do you want to play?");
    while (rounds < 1 || isNaN(rounds)) { 
        alert("Not a valid input! Please enter a positive number.");
        rounds = +prompt("How many rounds do you want to play?");
    }
    // Game loop
    let counter = 0; let playerWins = 0; let computerWins = 0;
    let result;
    while (counter < rounds) {
        result = playRound(playerPlay(), computerPlay());
        if (result === WIN) { playerWins++; counter++; }
        else if (result === LOSE) {  computerWins++; counter++; }
    }
    // Declare winner
    if (playerWins > computerWins) { alert(`Player won with ${playerWins} points. Congrats!`); }
    else if (playerWins < computerWins) { alert(`Computer won with ${computerWins} points. Better luck next time!`) }
    else { alert("Game ended in a draw.") }
}

game();