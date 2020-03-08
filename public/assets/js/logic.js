
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

// Function to ensure the questions don't repeat


// Function to display in the bubble

f