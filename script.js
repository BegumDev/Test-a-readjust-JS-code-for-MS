// On load, initialise the game
document.addEventListener('DOMContentLoaded', intro);

//===================================================================================

// DOM constants
const timeDisplay = document.querySelector('.timer');
const wordDisplay = document.querySelector('.word-display');
const wordInput = document.querySelector('.word-input');
const gameMessage = document.querySelector('.message');
const scoreDisplay = document.querySelector('#score');
const closeInstruction = document.querySelector('.close');
const showInstruction = document.querySelector('.help-btn');
const restartBtn = document.querySelector('.restart-btn');
const introDisplay = document.querySelector('.introBtn');
const modalDisplay = document.querySelector('.modal-container');
// const nextLevelBtn = document.querySelector('.next-level')

// Event listeners
closeInstruction.addEventListener('click', closeInstructions);
showInstruction.addEventListener('click', showInstructions);
restartBtn.addEventListener('click', restart);
// nextLevelBtn.addEventListener('click', nextLevel)

// Add global variables
let timer = 6;
let score = 0;
let isPlaying;


//===================================================================================
// Trigger the modal with user control of starting the game
function intro() {
    // Listen out for the click, once clicked hide the modal and start the game
    introDisplay.addEventListener('click', () => {
        modalDisplay.classList.add('hide');
        startGame();
    });
}
//Display the words
function showWords() {
    // Generate a random word
    const randomWord = Math.floor(Math.random() * wordArray.length);
    // Display the random word    
    wordDisplay.innerHTML = wordArray[randomWord];
}

// Start the game
function startGame() {
    // Display the words
    showWords();
    // Focus on the input box
    wordInput.focus();
    // Start the timer
    countdown();
    // Check the users input against the word displayed
    wordInput.addEventListener('input', ifCorrectAnswer);
}
// Check if its a match
function checkMatch() {
    if (wordInput.value === wordDisplay.innerHTML) {
        gameMessage.innerHTML = 'Well done!';
        return true;
    } else {
        gameMessage.innerHTML = 'Typing...';
        return false;
    }
}
// What happens if the answer is correct
function ifCorrectAnswer() {
    if (checkMatch()) {
        isPlaying = true;
        timer = 6;
        wordInput.value = '';
        showWords();
        score++;
    }
    scoreDisplay.innerHTML = `Score: ${score}`;
    
    if (score === -1) {
        scoreDisplay.innerHTML = `Score: 0`;
    } else {
        scoreDisplay.innerHTML = `Score: ${score}`;
    }
}
// Countdown timer
function countdown() {
    gameInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            console.log('on'); // Keep this here to check timer is still working
        } else if (timer === 0) {
            clearInterval(gameInterval);
            gameMessage.innerHTML = 'Time is up!';
            wordInput.classList.add('hide');
            scoreDisplay.innerHTML = `You scored: ${score}!`;
            score = -1;
            isPlaying = false;
            console.log('off'); // Keep this here to check timer is still working
        }
        timeDisplay.innerHTML = timer;
    }, 1000);
}
// Show instructions when help button is clicked
function showInstructions() {
    let help = document.querySelector('.instructions');
    let helpBtn = document.querySelector('.help-btn');
    const helpDisplay = window.getComputedStyle(help).getPropertyValue('display');

    if (helpDisplay === 'none') {
        help.style.display = 'block';
        helpBtn.style.display = 'none';
    } else {
        help.style.display = 'none';
        helpBtn.style.display = 'block';
    }
}
// Hide instructions upon closing
function closeInstructions() {
    let help = document.querySelector('.instructions');
    let helpBtn = document.querySelector('.help-btn');

    if (help.style.display = 'block') {
        help.style.display = 'none';
        helpBtn.style.display = 'block';
    }
}
// Restart the game on click
function restart() {
    wordInput.classList.remove('hide');
    score = -1;
    timer = 6;
    clearInterval(gameInterval);
    countdown();
    showWords();
    wordInput.focus();
    gameMessage.innerHTML = "";
    wordInput.value = '';
    scoreDisplay.innerHTML = `Score: 0`;
    score = 0;
}
// function nextLevel() {
//     wordInput.removeEventListener('input', ifCorrectAnswer);
//     showWords();
//     wordInput.focus();
//     countdown();
//     wordInput.addEventListener('input', function () {
//         if (checkMatch()) {
//             isPlaying = true;
//             timer = 4;
//             wordInput.value = '';
//             showWords();
//             score++;
//         }
//         scoreDisplay.innerHTML = `Score: ${score}`;

//         if (score === -1) {
//             scoreDisplay.innerHTML = `Score: 0`;
//         } else {
//             scoreDisplay.innerHTML = `Score: ${score}`;
//         }
//     })
// }
