
function problemGenerator(diff){
    let op = Math.floor(Math.random()*3)
    let num1 = Math.floor(Math.random()*Math.pow(10, diff))
    let num2 = Math.floor(Math.random()*Math.pow(10, diff))
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
case 3:
q = `What is the quotient of ${num1} / ${num2} ?`;
a = num1 / num2;
break;
    }
    return {q:q, a:a}
}
const qArr = []
for(let i = 0; i < 100; i++){
    qArr.push(problemGenerator(2))
}

console.log(qArr)