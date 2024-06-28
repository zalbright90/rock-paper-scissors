let humanScore = 0;
let computerScore = 0;
const resultDiv = document.querySelector('#results');
const scoreDiv = document.querySelector('#score');

function getComputerChoice() {
    const choices = ['firewall', 'virus', 'backdoor'];
    return choices[Math.floor(Math.random() * 3)];
}
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let result = '';

    if (humanChoice === computerChoice) {
        result = "Standoff detected! Breach deadlocked!";
    } else if (
        (humanChoice === "firewall" && computerChoice === "virus") ||
        (humanChoice === "virus" && computerChoice === "backdoor") ||
        (humanChoice === "backdoor" && computerChoice === "firewall")
    ) {
        result = `Breach successful! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
    } else {
        result = `Breach failed! ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
    }
        
    updateUI(result);
    checkWinner();
}

function updateUI(result) {
    resultDiv.textContent = result;
    scoreDiv.textContent = `Hacker: ${humanScore} | System: ${computerScore}`;
}

function checkWinner() {
    if (humanScore === 9) {
        resultDiv.textContent = "MATRIX BREACHED! YOU'VE HACKED THE MACHINES AND RESET THEM!!";
        resetGame();
    } else if (computerScore === 9) {
        resultDiv.textContent = "TRACE COMPLETE! THEY'RE COMING FOR YOU!";
        resetGame();
    }
    }
function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

document.querySelector('#firewall').addEventListener('click', () => playRound('firewall'));
document.querySelector('#virus').addEventListener('click', () => playRound('virus'));
document.querySelector('#backdoor').addEventListener('click', () => playRound('backdoor'));

const matrixBg = document.getElementById('matrix-bg');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?';

function createMatrixBackground() {
    matrixBg.innerHTML = ''; // Clear existing content
    const columnWidth = 20;
    const columnCount = Math.ceil(window.innerWidth / columnWidth);

    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.classList.add('matrix-column');
        column.style.left = `${i * columnWidth}px`;
        column.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random speed
        
        const columnHeight = Math.floor(Math.random() * 20) + 20;
        for (let j = 0; j < columnHeight; j++) {
            const char = document.createElement('span');
            char.classList.add('matrix-character');
            char.textContent = characters[Math.floor(Math.random() * characters.length)];
            column.appendChild(char);
        }
        matrixBg.appendChild(column);
    }
}

function updateCharacters() {
    const columns = document.querySelectorAll('.matrix-column');
    columns.forEach(column => {
        if (Math.random() < 0.1) { // 10% chance to update a character
            const chars = column.children;
            const randomIndex = Math.floor(Math.random() * chars.length);
            chars[randomIndex].textContent = characters[Math.floor(Math.random() * characters.length)];
        }
    });
    requestAnimationFrame(updateCharacters);
}

createMatrixBackground();
updateCharacters();

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(createMatrixBackground, 250);
});