// Iteration 8: Making scoreboard functional
const score = document.getElementById("score-board");
const playAgain = document.getElementById("play-again-button");
let currentScore =localStorage.getItem("score");
score.innerText = currentScore;
playAgain.onclick = ()=>{
    window.location.href = "game.html";
}