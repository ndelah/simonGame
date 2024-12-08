var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = []; 
var userClickedPattern = [];

$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSounds(userChosenColour);
});

function playSounds(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function nextSequence(){
    randomNumber = Math.floor(Math.random() * 4)
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSounds(randomChosenColour);
    
}
nextSequence();