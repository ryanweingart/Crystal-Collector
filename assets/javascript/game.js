var log = console.log;
var randomNumber = 0;
var playerScore = 0;
var blueCrystal = 0;
var orangeCrystal = 0;
var darkBlueCrystal = 0;
var redCrystal = 0;
var wins = 0;
var losses = 0;



$(".blue").one("click", function () {
    var blueCrystal = Math.floor(Math.random() * 12) + 1;
    log(blueCrystal);
});

$(".orange").one("click", function () {
    var orangeCrystal = Math.floor(Math.random() * 12) + 1;
    log(orangeCrystal);
});

$(".darkBlue").one("click", function () {
    var darkBlueCrystal = Math.floor(Math.random() * 12) + 1;
    log(darkBlueCrystal);
});

$(".red").one("click", function () {
    var redCrystal = Math.floor(Math.random() * 12) + 1;
    log(redCrystal);
});

function gameStarter () {
    var playerScore = 0;

    var randomNumber = Math.floor(Math.random() * 102) + 19;
    document.getElementById("random-number-text").innerHTML = randomNumber;


}

function endGame () {


}


gameStarter ();