
function randomizeNumber1(min, max) {
    let num1 = Math.floor(Math.random() * (max-min) + min);
    return num1;
}

function randomizeNumber2(min, max) {
    let num2 = Math.floor(Math.random() * (max-min) + min);
    return num2;
}


function problemGenerator(diff){
    let op = Math.floor(Math.random() * 3)
    // let num1 = Math.floor(Math.random()*Math.pow(10, diff))
    // let num2 = Math.floor(Math.random()*Math.pow(10, diff))

    let num1 = randomizeNumber1(6,12);
    let num2 = randomizeNumber1(0,5);

let q = ''
switch(op){
    case 0:
        q = `What is the sum of ${num1} + ${num2} ?`;
        a = num1 + num2;
        break;
    case 1:
        q = `What is the difference of ${num1} - ${num2} ?`;
        a = num1 - num2;
        break;
    case 2:
        q = `What is the product of ${num1} * ${num2} ?`;
        a = num1 * num2;
        break;
    // case 3:
    //     q = `What is the quotient of ${num1} / ${num2} ?`;
    //     a = num1 / num2;
    //     break;
    }
    return {q:q, a:a}
}


const qArr = []
for(let i = 0; i < 10; i++){
    qArr.push(problemGenerator())
}
// console.log(qArr)

function randomQuestion(arr) {
    let question = arr[Math.floor(Math.random() * arr.length)]
    return question;
}
// console.log(randomQuestion(qArr))

//once the document is ready, it should drop bubbles
    //each bubble should have a new question with input area
//when input is correct then make bubble green
//when input is wrong then make bubble red
//once question is answered, stop current bubble and drop bubbles function again
//once last question is answered load results page

function changeBackgroundGreen() {
    var correctAnswer = document.getElementById("answer-input").value;

    bubble.style.color = 'green';
}

function changeBackgroundRed(){
    var wrongAnswer = document.getElementById("answer-input").value;

    bubble.style.color = 'red';
}

$(document).ready(function() {

    dropBubbles();

    //function to initiate questions to start falling
    //get a reference to input feild where user adds their answer
    let $answerInput = $("answer-input").val().trim();

    function submitAnswer() {
        //if answer is right and is not the 10th question then make circle green and then initiate the next falling question
        //else if is wrong and not the 10th question make it red and then initiate the next falling questions
        //else if they reached 10 questions then lead to the results page

        if ($answerInput === true) {
            changeBackgroundGreen();
            dropBubbles();
        }
        else if ($answerInput === false) {

        } 
        else if (isLastQuestion) {
            changeBackgroundRed();
            loadResultsPage();
        }
    }

    function loadResultsPage() {
        //does this load the next page?
        window.location.pathname = "/";
    }

})