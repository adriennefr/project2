

$("#rtp-button").on("click", function(){
    // console.log("clicked");
    $("#rtp-button").attr("disabled", "disabled");
    // location.replace("http://www.google.com"); This replaces the entire page and are unable to go back to the previous page
    // Create a conditional to ensure the code below is only ran when another player is found
    if("playerfound"){
    location.href = "http://www.google.com";
    }
});

let timeLeft = 10;
// let timer = document.getElementById('#timer');
let timerId = setInterval(countdown, 1000);
function quizTime() {
    window.location.href = "/questions.html";
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