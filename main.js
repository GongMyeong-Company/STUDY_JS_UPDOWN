let computerNumber = 0;
let playButton = document.getElementById('play-button');
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');
let resetButton = document.getElementById('reset-button');
let chanceArea = document.getElementById('chance')
let chances = 5;
let gameOver = false;
let history = [];


playButton.addEventListener('click',play);
resetButton.addEventListener('click',reset);
userInput.addEventListener('focus',function(){userInput.value = ""})


function RandomNumber() {
    computerNumber = Math.floor(Math.random()*100)+1;
    console.log("정답",computerNumber);
}

function play() {
    let userValue = userInput.value;
    
    if(userValue <0 || userValue > 100) {
        resultArea.textContent = " 0~100사이 숫자를 입력하세요.";
        return;
    }
    if(history.includes(userValue)) {
        resultArea.textContent = "중복된 숫자입니다. 다른숫자를 입력하세요";
        return;
    }

    chances --;
    chanceArea.textContent = `남은기회 : ${chances}번`;
    
    if(userValue > computerNumber) {
        resultArea.textContent = 'DOWN !!';
    }else if ( userValue < computerNumber) {
        resultArea.textContent = 'UP !!';
    }else {
        resultArea.textContent = '정답입니다 !!';
        gameOver = true;
    }

    history.push(userValue);
    
    if (chances < 1) {
        gameOver = true;
    }
    if (gameOver == true){
        playButton.disabled = true;
    }
}

function reset() {
    resultArea.textContent = "결과가 나옵니다";
    userInput.value = "";
    chanceArea.textContent = "남은기회 : 5번";
    RandomNumber();
}







RandomNumber();
