function getComputerChoice() {
    //Generator choosing a number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
    //Return the computer choice based on the number generated
    if (randomNumber < 1 / 3) {
        return "rock";
    } else if (randomNumber < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}
//Create function for human choice
function getHumanChoice() {
    //Code for returning human choice ensuring it's valid
    let userChoice = prompt("Enter your choice (rock, paper, or scissors?):");

    while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        userChoice = prompt("Invalid input! Enter rock, paper, or scissors:").toLowerCase();
    }
    return userChoice
}
//Set starting scores using 'let' variable
let humanScore = 0;
let computerScore = 0;
//Code for playing the game
function playRound(humanChoice, computerChoice) {
    //Ensure player's choice is lowercase
    //Create variables for calculating choice against choice
    const lowercaseHumanChoice = humanChoice.toLowerCase();
    const computerChoiceValue = computerChoice();
    //Determine who wins
    if (lowercaseHumanChoice === computerChoiceValue) {
        console.log("It's a tie!");
    } else if (
        (lowercaseHumanChoice === "rock" && computerChoiceValue === "scissors") ||
        (lowercaseHumanChoice === "paper" && computerChoiceValue === "rock") ||
        (lowercaseHumanChoice === "scissors" && computerChoiceValue === "paper")
    ) {
        console.log(`You win this round! ${lowercaseHumanChoice} beats ${computerChoiceValue}!`);
        humanScore++;
    } else {
        console.log(`You lose this round! ${computerChoiceValue} beats ${lowercaseHumanChoice}!`);
        computerScore++;
    }
    //Log the scores
    console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice;

playRound(humanSelection, computerSelection);