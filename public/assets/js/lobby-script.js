let timeLeft = 10;
// let timer = document.getElementById('#timer');
let timerId = setInterval(countdown, 1000);

function quizTime() {
    window.location.href = "http://google.com";

}
function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        quizTime();
    } else {
        $('#timer').text(`Game Starts ${timeLeft} seconds!`) ;
        timeLeft--;
        if(timeLeft === 0){
            quizTime();
        }
    }
}


