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


function endGame () {


}
gameStarter ();

$("#blue").on("click", function () {
    playerScore += blueCrystal;
    // addCrystals (blueCrystal);
    log(blueCrystal);
    log(playerScore);
    $("#playerScore-text").text(playerScore);
});

$("#orange").on("click", function () {
    playerScore += orangeCrystal;
    // addCrystals (orangeCrystal);
    log(orangeCrystal);
    log(playerScore);
    $("#playerScore-text").text(playerScore);

});

$("#darkBlue").on("click", function () {
    playerScore += darkBlueCrystal;
    // addCrystals (darkBlueCrystal);
    log(darkBlueCrystal);
    log(playerScore);
    $("#playerScore-text").text(playerScore);

});

$("#red").on("click", function () {
    playerScore += redCrystal;
    // addCrystals (redCrystal);
    log(redCrystal);
    log(playerScore);
    $("#playerScore-text").text(playerScore);

});
