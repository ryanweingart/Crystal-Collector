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
    
    blueCrystal = Math.floor(Math.random() * 12) + 1;
    orangeCrystal = Math.floor(Math.random() * 12) + 1;
    darkBlueCrystal = Math.floor(Math.random() * 12) + 1;
    redCrystal = Math.floor(Math.random() * 12) + 1;
    
    $("#randomNumber-text").text(randomNumber);
    $("#playerScore-text").text(playerScore);

}

function endGame () {

    if (playerScore > randomNumber) {
        alert("You lose!");
        losses++;
        
        gameStarter ();
    } else if (playerScore === randomNumber) {
        alert("You win!");
        wins++;
        gameStarter ();
    }


}


gameStarter ();

$("#blue").on("click", function () {
    playerScore += blueCrystal;
    log(blueCrystal);
    log(playerScore);
    $("#playerScore-text").text(playerScore);
});

$("#orange").on("click", function () {
    playerScore += orangeCrystal;
    log(orangeCrystal);
    log(playerScore);
    $("#playerScore-text").text(playerScore);

});

$("#darkBlue").on("click", function () {
    playerScore += darkBlueCrystal;
    log(darkBlueCrystal);
    log(playerScore);
    $("#playerScore-text").text(playerScore);

});

$("#red").on("click", function () {
    playerScore += redCrystal;
    log(redCrystal);
    log(playerScore);
    $("#playerScore-text").text(playerScore);

});

