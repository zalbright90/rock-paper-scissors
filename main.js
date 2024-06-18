function getComputerChoice() {
    //Generator choosing a number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
    //Return the computer choice based on the number generated
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
//Create function for human choice
function getHumanChoice() {
    //Code for returning human choice ensuring it's valid
    let userChoice = prompt("Enter your choice (rock, paper, or scissors?):").toLowerCase();

    while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        userChoice = prompt("Invalid input! Enter rock, paper, or scissors:").toLowerCase();
    }
    return userChoice
}
//Setting up the game
function playGame() {
//Set starting scores using 'let' variable
    let humanScore = 0;
    let computerScore = 0;
    //Code for playing the game
    function playRound(humanChoice, computerChoice) {
    //Ensure player's choice is lowercase
    //Create variables for calculating choice against choice
        const lowercaseHumanChoice = humanChoice.toLowerCase();
    //Determine who wins
        if (lowercaseHumanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (lowercaseHumanChoice === "rock" && computerChoice === "scissors") ||
            (lowercaseHumanChoice === "paper" && computerChoice === "rock") ||
            (lowercaseHumanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win this round! ${lowercaseHumanChoice} beats ${computerChoice}!`);
            humanScore++;
        } else {
            console.log(`You lose this round! ${computerChoice} beats ${lowercaseHumanChoice}!`);
            computerScore++;
        }
    //Log the scores
        console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
    }
    for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    }
//Declaring the winner of the game
    if (humanScore > computerScore) {
        console.log("YOU WIN THE GAME!");
    } else if (humanScore < computerScore) {
        console.log("SORRY, YOU LOSE!");
    } else {
        console.log("HOW DID YOU TIE?!?!")
    }
}

playGame();