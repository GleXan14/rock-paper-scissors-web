//variables DOM
const btnRock = document.querySelector('.rock-border');
const btnPaper = document.querySelector('.paper-border');
const btnScissors = document.querySelector('.scissors-border');
const gameContainer = document.querySelector('.game-container');
const user = document.getElementById('user');
const userImg = document.querySelector('#user .btn-games img');
const cpu = document.getElementById('cpu');
const cpuImg = document.querySelector('#cpu .btn-games img');
const resultContainer = document.querySelector('#result');
const resultText = document.querySelector('#result span');
const btnPlayAgain = document.querySelector('#result button');
const option1 = document.querySelector('#option1');
const option1Text = document.querySelector('#option1 .text');
const option2 = document.querySelector('#option2');
const option2Text = document.querySelector('#option2 .text');
const gameOption1 = document.getElementById('game-option1');
const gameOption2 = document.getElementById('game-option2');
const gameOption3 = document.getElementById('game-option3');
const score = document.querySelector('.score h1');
const btnRules = document.getElementById('lb-button');
const rulesContainer = document.querySelector('.rules-window-container');
const rules = document.querySelector('.rules-window-container .rules');
const btnClose = document.getElementById('lb-close');



const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const TIE = 0;
const WIN = 1;
const LOSE = 2;

let userClass = '';
let cpuClass = '';


//EVENTOS
btnRock.addEventListener('click', function(){
    console.log('you picked ROCK');

    setResult();

    userClass = `${ROCK}-border`;
    user.classList.add(userClass);
    user.classList.add('option-picked');
    userImg.src = `./images/icon-${ROCK}.svg`;

    const cpuOption = calcCpuOption();
    cpuClass = cpuOption;
    cpu.classList.add(`${cpuOption}-border`);
    cpu.classList.add('option-picked');
    cpuImg.src = `./images/icon-${cpuOption}.svg`;

    const gameResult = play(ROCK,cpuOption);

    setPostResult(gameResult);
    
});

btnPaper.addEventListener('click', function(){
    console.log('you picked PAPER');

    setResult();

    userClass = `${PAPER}-border`;
    user.classList.add(userClass);
    user.classList.add('option-picked');
    userImg.src = `./images/icon-${PAPER}.svg`;

    const cpuOption = calcCpuOption();
    cpuClass = cpuOption;
    cpu.classList.add(`${cpuOption}-border`);
    cpu.classList.add('option-picked');
    cpuImg.src = `./images/icon-${cpuOption}.svg`;

    const gameResult = play(PAPER,cpuOption);

    setPostResult(gameResult);
});

btnScissors.addEventListener('click', function(){
    console.log('you picked SCISSORS');

    setResult();

    userClass = `${SCISSORS}-border`;
    user.classList.add(userClass);
    user.classList.add('option-picked');
    userImg.src = `./images/icon-${SCISSORS}.svg`;

    const cpuOption = calcCpuOption();
    cpuClass = cpuOption;
    cpu.classList.add(`${cpuOption}-border`);
    cpu.classList.add('option-picked');
    cpuImg.src = `./images/icon-${cpuOption}.svg`;

    const gameResult = play(SCISSORS,cpuOption);

    setPostResult(gameResult);
});

btnPlayAgain.addEventListener('click',function(){
    console.log('you picked PLAY AGAIN');


    user.classList.remove(userClass);
    user.classList.remove('option-picked');
    user.style.boxShadow =  'none';
    userImg.src = '';

    
    cpu.classList.remove(`${cpuClass}-border`);
    cpu.classList.remove('option-picked');
    cpu.style.boxShadow =  'none';
    cpuImg.src = '';

    unsetResult();

    userClass = '';
    cpuClass = '';


});

btnRules.addEventListener('click',function(){
    
    rulesContainer.style.zIndex = '100';
    rules.style.right = '0';
    
   
});

btnClose.addEventListener('click',function(){
    rules.style.right = '-100%';
    rulesContainer.style.zIndex = '-100';
});

//FUNCIONES 

function setResult(){

    gameOption1.style.display = 'none';
    gameOption2.style.display = 'none';
    gameOption3.style.display = 'none';
   

    option1.style.display = 'block';
    option2.style.display = 'block';
    resultContainer.style.display = 'block';

    option1.classList.add('option-container');
    option2.classList.add('option-container');
    option1Text.classList.add('text-game');
    option2Text.classList.add('text-game');
    resultContainer.classList.add('result-container');
    resultText.classList.add('result-text');
    btnPlayAgain.classList.add('btn-play-again');


}
function unsetResult(){
    option1.style.display = 'none';
    option2.style.display = 'none';
    resultContainer.style.display = 'none';

    option1.classList.remove('option-container');
    option2.classList.remove('option-container');
    option1Text.classList.remove('text-game');
    option2Text.classList.remove('text-game');
    resultContainer.classList.remove('result-container');
    resultText.classList.remove('result-text');
    btnPlayAgain.classList.remove('btn-play-again');

    gameOption1.style.display = 'block';
    gameOption2.style.display = 'block';
    gameOption3.style.display = 'block';
}

function calcCpuOption(){
    const number = Math.floor(Math.random() * 3);

    switch(number){
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

function calcResult(userOption, cpuOption){

    if(userOption == ROCK){
        if(cpuOption == ROCK){
            return 0;
        }else if(cpuOption == SCISSORS){
            return 1;
        }else{
            return 2;
        }
    }else if(userOption == PAPER){
        if(cpuOption == PAPER){
            return 0;
        }else if(cpuOption == ROCK){
            return 1;
        }else{
            return 2;
        }
    }else{
        if(cpuOption == SCISSORS){
            return 0;
        }else if(cpuOption == PAPER){
            return 1;
        }else{
            return 2;
        }
    }
}


function play(userOption,cpuOption){

    const result = calcResult(userOption, cpuOption);

    switch(result){
        case 0:
            resultText.innerHTML = 'You Tied';
            break;
        case 1:
            resultText.innerHTML = 'You Win';
            break;
        case 2:
            resultText.innerHTML = 'You Lose';
            break;

    }
    return result;

}

function setPostResult(gameResult){
    if(gameResult == 1){
        let punto = parseInt(score.innerHTML);
        punto += 1;
        score.innerHTML = punto;

        user.style.boxShadow =  '.1rem .1rem .8rem 1.5rem rgba(255,255,255,0.5)';

    }else if (gameResult == 2){
        cpu.style.boxShadow = '.1rem .1rem .8rem 1.5rem rgba(255,255,255,0.5)';
    }
}
