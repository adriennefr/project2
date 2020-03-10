
function randomizeNumber(min, max) {
    let num1 = Math.floor(Math.random() * (max-min) + min);
    return num1;
}


function problemGenerator(){
    let op = Math.floor(Math.random() * 3)
    // let num1 = Math.floor(Math.random()*Math.pow(10, diff))
    // let num2 = Math.floor(Math.random()*Math.pow(10, diff))

    let num1 = randomizeNumber(6,12);
    let num2 = randomizeNumber(0,5);

let q = ''
switch(op){
    case 0:
        q = `${num1} + ${num2}`;
        a = num1 + num2;
        break;
    case 1:
        q = `${num1} - ${num2}`;
        a = num1 - num2;
        break;
    case 2:
        q = `${num1} * ${num2}`;
        a = num1 * num2;
        break;
    // case 3:
    //     q = `What is the quotient of ${num1} / ${num2} ?`;
    //     a = num1 / num2;
    //     break;
    }
    return {q:q, a:a}
}


function qMaker(q, diff) {
    const qArr = []
    for(let i = 0; i < 10; i++){
        qArr.push(problemGenerator())
    }
    return qArr;
}
// console.log(qMaker(10, 2));


function randomQuestion(arr) {
    let question = arr[Math.floor(Math.random() * arr.length)]
    return question;
}
// console.log(randomQuestion(qArr))
