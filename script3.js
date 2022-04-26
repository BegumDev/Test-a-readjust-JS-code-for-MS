// Initialise the game
document.addEventListener('DOMContentLoaded', startGame)

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
const nextLevelBtn = document.querySelector('.next-level')

// Event Listeners
nextLevelBtn.addEventListener('click', nextLevel)


let score = 0;
let timer = 6;

const wordArray = [
    'Imagine',
    'Build',
    'Develop',
    // 'Produce',
    // 'Explain',
    // 'Construct',
    // 'Create',
    // 'Innovate',
    // 'Succeed',
    // 'Prepare',
    // 'Adjust',
    // 'Understand',
    // 'Play',
    // 'Excel',
    // 'Enjoy',
    // 'Relax',
    // 'Assemble',
    // 'Code',
    // 'Logic',
    // 'Technical',
    // 'Spectacular',
    // 'Arrange',
    // 'Discover',
    // 'Reality',
    // 'Explore',
    // 'Value',
    // 'Platform',
    // 'Educate',
    // 'Podium',
    // 'Win',
]

const wordArrayL2 = [
    'Amaze',
    'Discover',
    'Repeat',
    // 'Produce',
    // 'Explain',
    // 'Construct',
    // 'Create',
    // 'Innovate',
    // 'Succeed',
    // 'Prepare',
    // 'Adjust',
    // 'Understand',
    // 'Play',
    // 'Excel',
    // 'Enjoy',
    // 'Relax',
    // 'Assemble',
    // 'Code',
    // 'Logic',
    // 'Technical',
    // 'Spectacular',
    // 'Arrange',
    // 'Discover',
    // 'Reality',
    // 'Explore',
    // 'Value',
    // 'Platform',
    // 'Educate',
    // 'Podium',
    // 'Win',
]

function startGame() {
    wordInput.focus();
    showWords();
    countdown();
    wordInput.addEventListener('input', checkMatch);
}
function showWords() {
    let counter = 0;

    for(let i = 0; i < wordArray.length; i++) {
        if(wordInput.value === wordDisplay.innerHTML) {
            wordArray.shift();
            console.log(wordArray[counter]) // Take this out later
        }
        wordDisplay.innerHTML = wordArray[counter];
    }
}
function checkMatch() {
    if(wordInput.value === wordDisplay.innerHTML) {
        score++;
        showWords();
        wordInput.value = '';
        timer = 6;
    }
    scoreDisplay.innerHTML = `Score: ${score}`;
    // First way to stop the game
    if(score === 3){
        clearInterval(gameInterval);
        timeDisplay.innerHTML = '';
        gameMessage.innerHTML = 'Level cleared!'
        wordDisplay.classList.add('hide');
        // wordInput.classList.add('hide');
        // Put a next level button here
    }
}
function showWordsL2() {
    // Generate a random word
    const randomWord = Math.floor(Math.random() * wordArrayL2.length);
    // Display the random word    
    wordDisplay.innerHTML = wordArrayL2[randomWord];
    console.log(wordArrayL2[randomWord]);
}
function checkMatch2() {
    if(wordInput.value === wordDisplay.innerHTML) {
        score++;
        showWordsL2();
        wordInput.value = '';
        timer = 4;
    }
    scoreDisplay.innerHTML = `Score: ${score}`;
    // First way to stop the game
    if(score === 10){
        clearInterval(gameInterval);
        timeDisplay.innerHTML = '';
        gameMessage.innerHTML = 'Level cleared!'
        wordDisplay.classList.add('hide');
        // wordInput.classList.add('hide');
        // Put a next level button here
    }
}
function countdown() {
    gameInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            console.log('on'); // Keep this here to check timer is still working
        } else if (timer === 0) {
            // Second way to stop the game
            clearInterval(gameInterval);
            gameMessage.innerHTML = 'Time is up!';
            wordInput.classList.add('hide');
            scoreDisplay.innerHTML = `You scored: ${score}!`;
            console.log('off'); // Keep this here to check timer is still working
        }
        timeDisplay.innerHTML = timer;
    }, 1000);
}
function nextLevel(){
    clearInterval(gameInterval);
    showWordsL2();
    // countdown();
    // timer = 4;
    wordDisplay.classList.remove('hide');
    wordInput.classList.remove('hide');
    wordInput.focus();
    wordInput.value = '';
    wordInput.removeEventListener('input', checkMatch);
    wordInput.addEventListener('input', checkMatch2);
}




    // let counter = 0;

    // for(let i = 0; i < wordArray.length; i++) {
    //     if(wordInput.value === wordDisplay) {
    //         counter++



    //     }
    // }
    // wordDisplay.innerHTML = wordArray[counter];





    