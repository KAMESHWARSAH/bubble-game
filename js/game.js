var timer = 60;
var timerlem = document.querySelector('#timerelem');
var hitelem = document.querySelector('#hitelem');
var btmpnl = document.querySelector('#btmpnl');
var randomNumber;
var scor = 0;
setInterval(function() {
    if (timer > 0) {
        --timer;
        // console.log(timer);
        timerlem.textContent = timer;
    } else {

        btmpnl.innerHTML = `<h1 id="gameover">Game Over <br> Your Score Is : ${scor}</h1>`;

    }
}, 1000);

function getNewGuess() {
    // Get a randome Number

    randomNumber = Math.floor(Math.random() * 10);
    hitelem.textContent = randomNumber;

}

function makeBubble() {
    for (var i = 0; i < 274; i++) {
        var randomNumber = Math.floor(Math.random() * 10);
        var template = `<div class="bubble">${randomNumber}</div>`;
        btmpnl.innerHTML += template;
    }
}
btmpnl.addEventListener('click', function(details) {
    var clickedBubblevalue = details.target.textContent;
    if (clickedBubblevalue == randomNumber) {
        // console.log("sahi");
        // var bcol = document.querySelector("#MyDiv");
        // bcol.style.backgroundColor = "green";
        // document.getElementById("MyDiv").style.backgroundColor = "green";
        scor = scor + 10;
        scorelm.textContent = scor;
        getNewGuess();
        btmpnl.innerHTML = '';
        makeBubble();
    } else {
        console.log("wrong");
    }
})
getNewGuess();
makeBubble();