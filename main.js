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
//console.log to test