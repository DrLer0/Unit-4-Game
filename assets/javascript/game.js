var crytals = [0,0,0,0];
var wins;
var losses;
var randomNumber;
var totalScore;

function initializeGame(){
    wins = 0;
    losses = 0;
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    for(var i=0; i < crytals.length; i++){
        crytals[i] = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    }
    totalScore = 0;
    $("#randomNumber").text(randomNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#totalScore").text(totalScore);
};
function restartGame(){
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    for(var i=0; i < crytals.length; i++){
        crytals[i] = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    }
    totalScore = 0;
    $("#randomNumber").text(randomNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#totalScore").text(totalScore);
};

function compareNumbers(){
    if(totalScore===randomNumber){
        wins++;
        restartGame();
    }
    else if(totalScore>randomNumber){
        losses++;
        restartGame();
    }
    else{
        $("#totalScore").text(totalScore);
    }
}
initializeGame();
$("#crystal1").click(function(){
    totalScore+=crytals[0];
    compareNumbers();
})
$("#crystal2").click(function(){
    totalScore+=crytals[1];
    compareNumbers();
})
$("#crystal3").click(function(){
    totalScore+=crytals[2];
    compareNumbers();
})
$("#crystal4").click(function(){
    totalScore+=crytals[3];
    compareNumbers();
})

$("#crystal1").sparkle({
    color: "rainbow",
    count: 50,
    minSize: 2,
    maxSize: 10
});
$("#crystal2").sparkle({
    color: ["#FFFFFF", "#FF00FF", "#4B0082"],
    count: 50,
    minSize: 2,
    maxSize: 10
});
$("#crystal3").sparkle({
    color: ["#00FF7F", "#20B2AA", "#7FFF00", "#FFFFFF"],
    count: 50,
    minSize: 2,
    maxSize: 10
});
$("#crystal4").sparkle({
    color: ["#2F4F4F", "#DCDCDC", "#C0C0C0", "#FFFFFF"],
    count: 50,
    minSize: 2,
    maxSize: 10
});
$(".container").sparkle({
    count: 25,
    minSize: 5,
    maxSize: 10
});

