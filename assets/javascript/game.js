var log = console.log;
var randomNumber = 0;
var playerScore = 0;
var blueCrystal = "";
var orangeCrystal = "";
var darkBlueCrystal = "";
var redCrystal = "";
var wins = 0;
var losses = 0;



$(".blue").on("click", function () {
    var blueCrystal = Math.floor(Math.random() * 12) + 1;
    log(blueCrystal);
});

$(".orange").on("click", function () {
    var orangeCrystal = Math.floor(Math.random() * 12) + 1;
    log(orangeCrystal);
});

$(".darkBlue").on("click", function () {
    var darkBlueCrystal = Math.floor(Math.random() * 12) + 1;
    log(darkBlueCrystal);
});

$(".red").on("click", function () {
    var redCrystal = Math.floor(Math.random() * 12) + 1;
    log(redCrystal);
});

function gameStarter () {
    var playerScore = 0;

    // var  = Math.floor(Math.random() * 120) + 19;
    log(hi);


}

function endGame () {


}