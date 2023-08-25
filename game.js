const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 =document.getElementById("number3");
const buttons = document.getElementById("buttons");
const timer = document.getElementById("timer");
let time = 20;
let score = 0;

let operator;
function randomNumbers(){
    return Math.floor(Math.random()*100)+1
}

function displayNumbers(){
    let num1 = randomNumbers();
    let num2 = randomNumbers();
    let num3 = updateAnswer(num1,num2)
    number1.innerText=num1;
    number2.innerText=num2;
    number3.innerText=num3;
}

displayNumbers()


buttons.addEventListener("click",(anything)=>{
    checkScore(anything.target.id)
})


function checkScore(any){
    if(any=="plus" && operator=="+" || any=="minus" && operator=="-" || any=="mul" && operator=="*" || any=="divide" && operator=="/" || any=="modulus" && operator=="%"){
        displayNumbers();
        time=20;
        score++;
        // console.log(localStorage.getItem("score"))
    }
    else{
        window.location.href="gameover.html";
    }
    localStorage.setItem("score",score);
}

timer.innerText=time;
setInterval(setTimer,1000);

function setTimer(){
    time--
    if(time==0){
        window.location.href="gameover.html";
    }
    timer.innerText=time;
}


function updateAnswer(num1,num2){
    let ans=0;
    let operators = ["+","-","*","/","%"];
    operator =operators[Math.floor(Math.random()*5)]
    if(operator=="+"){
        ans = num1+num2;
    }
    else if(operator=="-"){
        ans = num1-num2;
    }
    else if(operator=="*"){
        ans = num1*num2;
    }
    else if(operator=="/"){
        ans = Math.floor(num1/num2);
    }
    else if(operator=="%"){
        ans = num1%num2;
    }
    return ans
}

