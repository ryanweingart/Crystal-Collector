//Global variables
//--------------------------------------------------------------------------------------------------------------------------------------------------

var log = console.log;
var randomNumber = 0;
var playerScore = 0;
var blueCrystal = 0;
var orangeCrystal = 0;
var darkBlueCrystal = 0;
var redCrystal = 0;
var wins = 0;
var losses = 0;

//Function that starts game with new random number and player score back to 0.
//--------------------------------------------------------------------------------------------------------------------------------------------------

function gameStarter () {
    playerScore = 0;

    randomNumber = Math.floor(Math.random() * 102) + 19;
    
    blueCrystal = Math.floor(Math.random() * 12) + 1;
    orangeCrystal = Math.floor(Math.random() * 12) + 1;
    darkBlueCrystal = Math.floor(Math.random() * 12) + 1;
    redCrystal = Math.floor(Math.random() * 12) + 1;
    
    $("#randomNumber-text").text(randomNumber);
    $("#playerScore-text").text(playerScore);
}

//Button click functions that add value of button to player score and calls endGame function to check if game has been won
//--------------------------------------------------------------------------------------------------------------------------------------------------
$("#blue").on("click", function () {
    playerScore += blueCrystal;
    endGame ();
    $("#playerScore-text").text(playerScore);
});

$("#orange").on("click", function () {
    playerScore += orangeCrystal;
    endGame ();
    $("#playerScore-text").text(playerScore);
});

$("#darkBlue").on("click", function () {
    playerScore += darkBlueCrystal;
    endGame ();
    $("#playerScore-text").text(playerScore);
});

$("#red").on("click", function () {
    playerScore += redCrystal;
    endGame ();
    $("#playerScore-text").text(playerScore);
});

//Function that checks if player score has matched random number to win or gone over random number to lose
//--------------------------------------------------------------------------------------------------------------------------------------------------
function endGame () {

    if (playerScore === randomNumber) {
        alert("You win!");
        wins++;
        $("#wins-text").text(wins);

        gameStarter ();

    } else if (playerScore > randomNumber) {
        alert("You lose!");
        losses++;
        $("#losses-text").text(losses);

        gameStarter ();
    }
}

gameStarter ();



