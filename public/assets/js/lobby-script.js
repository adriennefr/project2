let timeLeft = 10;
let elem = document.getElementById('some_div');
let timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        quizTime();
    } else {
        elem.innerHTML = `<h2>Game Starts ${intimeLeft} seconds!` ;
        timeLeft--;
    }
}

function quizTime() {
    
}