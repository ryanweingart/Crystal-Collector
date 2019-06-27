var log = console.log;
var randomNumber = 0;
var playerScore = 0;
var blueCrystal = 0;
var orangeCrystal = 0;
var darkBlueCrystal = 0;
var redCrystal = 0;
var wins = 0;
var losses = 0;



function gameStarter () {
    var playerScore = 0;

    var randomNumber = Math.floor(Math.random() * 102) + 19;
    document.getElementById("random-number-text").innerHTML = randomNumber;

    blueCrystal = Math.floor(Math.random() * 12) + 1;
    orangeCrystal = Math.floor(Math.random() * 12) + 1;
    darkBlueCrystal = Math.floor(Math.random() * 12) + 1;
    redCrystal = Math.floor(Math.random() * 12) + 1;
}

function addCrystals (blueCrystal) {
  

    playerScore = playerScore + blueCrystal + orangeCrystal + darkBlueCrystal + redCrystal;
    log(playerScore);
}
function endGame () {


}
gameStarter ();

$("#blue").on("click", function () {
    addCrystals (blueCrystal);
    log(blueCrystal);
});

$("#orange").on("click", function () {
    addCrystals (orangeCrystal);
    log(orangeCrystal);
});

$("#darkBlue").on("click", function () {
    addCrystals (darkBlueCrystal);
    log(darkBlueCrystal);
});

$("#red").on("click", function () {
    addCrystals (redCrystal);
    log(redCrystal);
});
