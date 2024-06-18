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
    console.log(getComputerChoice());
    console.log(getComputerChoice());
    console.log(getComputerChoice());
}
//Create function for human choice
//Code for returning human choice ensuring it's valid
//console.log to test