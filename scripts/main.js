$(document).ready(function(){

  $(".card").hide();
  $(".mission").hide();

var bop = new Audio('audio/bop.mp3');

$(bop).prop("volume", 0.2);

var categNr;
var misNr;
var getRandom;

$(".kitty").click(function(getRandom){
  bop.play();
  var getRandom = Math.floor((Math.random() * 13) + 1);
  // console.log(getRandom);

  if (getRandom === 1) {
    var categNr = "<h2>Fill in the blanks</h2>";
    var misNr = "<h3>Pack it up, pack it in, let me _____, I came to win, battle me that’s a ___.</h3>";
  } else if (getRandom === 2) {
    var categNr = "<h2>Fill in the blanks</h2>";
    var misNr = "<h3>I got sunshine, on a cloudy ___, when it’s cold outside, I’ve got the ____ __ ___.</h3>";
  } else if (getRandom === 3) {
    var categNr = "<h2>Fill in the blanks</h2>";
    var misNr = "<h3>I’m gonna pop some tags, got __ _____ in my pocket. I - I’m hunting, looking for a come-up, this is fucking ______.</h3>";
  } else if (getRandom === 4) {
    var categNr = "<h2>RULES</h2>";
    var misNr = "<h3>Darling. Call everyone ”Darling” for the rest of the game.</h3>";
  } else if (getRandom === 5) {
    var categNr = "<h2>RULES</h2>";
    var misNr = "<h3>No NO. You can't say 'NO' for the rest of the game.</h3>";
  } else if (getRandom === 6) {
    var categNr = "<h2>RULES</h2>";
    var misNr = "<h3>No phones. If you touch your phone during the game, the person in front of you is allowed to send any text message to any contacts you have</h3>";
  } else if (getRandom === 7) {
    var categNr = "<h2>RULES</h2>";
    var misNr = "<h3>The Narcissus rule: Everyone, including myself, compliment me every time they have to drink.</h3>";
  } else if (getRandom === 8) {
    var categNr = "<h2>RULES</h2>";
    var misNr = "<h3>Mr. President rule. When you speak, you have to put your 2 fingers to your ear as if you are part of the President's security detail, communicating with other personnel</h3>";
  } else if (getRandom === 9) {
    var categNr = "<h2>TIME TRAVEL</h2>";
    var misNr = "<h3>Do a moonwalk</h3>";
  } else if (getRandom === 10) {
    var categNr = "<h2>TIME TRAVEL</h2>";
    var misNr = "<h3>Do the Robot Dance</h3>";
  } else if (getRandom === 11) {
    var categNr = "<h2>This is category 11</h2>";
    var misNr = "<h3>This is mission 11</h3>";
  } else if (getRandom === 12) {
    var categNr = "<h2>This is category 12</h2>";
    var misNr = "<h3>This is mission 12</h3>";
  }else if (getRandom === 13) {
    var categNr = "<h2>This is category 13</h2>";
    var misNr = "<h3>This is mission 13</h3>";
  } else {
    var categNr = "<h2>This is ERROR</h2>";
  }

$("#kittyPic").hide();
$(".card").fadeIn();
$(".cardCat").append(categNr);
$(".cardMis").append(misNr);

})

$(".card").flip({
  axis: 'y',
  trigger: 'click'
});

$(".back").click(function(){
  $(".card").hide();
  $(".cardCat").empty();
  $(".cardMis").empty();
  $("#kittyPic").show();
});

});
