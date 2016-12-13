$(document).ready(function(){

// RANDOM CATS
var cat_images = ["cats1.png", "cats2.png", "cats3.png", "cats4.png"];

function getRandomImage(imgAr, path) {
    path = path || 'pics/cats/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    $('.kitty').append(imgStr); //document.close();
}
//END OF RANDOM CATS

  $(".card").hide();
  $(".mission").hide();

// var bop = new Audio('audio/bop.mp3');
//
// $(bop).prop("volume", 0.2);

var categNr;
var misNr;
var content;
var getRandom;

$(".kitty").click(function(getRandom){
  // bop.play();
  var getRandom = Math.floor((Math.random() * 15) + 1);
  //The next line can be un-quoted if you want to choose what number that comes up.
  //Don't forget to quote-out the one above as well!
  // var getRandom = 14

  if (getRandom === 1) {
  var categNr = "Fill in the blanks";
  var misNr = "Pack it up, pack it in, let me _____, I came to win, battle me that’s a ___.";
} else if (getRandom === 2) {
  var categNr = "Fill in the blanks";
  var misNr = "I got sunshine, on a cloudy ___, when it’s cold outside, I’ve got the ____ __ ___.";
} else if (getRandom === 3) {
  var categNr = "Fill in the blanks";
  var misNr = "I’m gonna pop some tags, got __ _____ in my pocket. I - I’m hunting, looking for a come-up, this is fucking ______.";
} else if (getRandom === 4) {
  var categNr = "Rules";
  var misNr = "Darling. Call everyone ”Darling” for the rest of the game.";
} else if (getRandom === 5) {
  var categNr = "Rules";
  var misNr = "No NO. You can't say 'NO' for the rest of the game.";
} else if (getRandom === 6) {
  var categNr = "Rules";
  var misNr = "No phones. If you touch your phone during the game, the person in front of you is allowed to send any text message to any contacts you have";
} else if (getRandom === 7) {
  var categNr = "Rules";
  var misNr = "The Narcissus rule: Everyone, including myself, compliment me every time they have to drink.";
} else if (getRandom === 8) {
  var categNr = "Rules";
  var misNr = "Mr. President rule. When you speak, you have to put your 2 fingers to your ear as if you are part of the President's security detail, communicating with other personnel";
} else if (getRandom === 9) {
  var categNr = "Time Travel";
  var misNr = "Do a moonwalk";
} else if (getRandom === 10) {
  var categNr = "Time Travel";
  var misNr = "Do the Robot Dance";
} else if (getRandom === 11) {
  var categNr = "Describe the movie plot, if you can't, make one up. Drink if you fail";
  var misNr = "Fight Club";
} else if (getRandom === 12) {
  var categNr = "Describe the movie plot, if you can't, make one up. Drink if you fail";
  var misNr = "The Godfather";
} else if (getRandom === 13) {
  var categNr = "Describe the movie plot, if you can't, make one up. Drink if you fail";
  var misNr = "Pulp Fiction";
}
// Stockphotos Talk
else if (getRandom === 14) {
  var categNr = "Stockphotos Talk";
  var misNr = "Create a caption for the stockphoto below:";
  var content = '<br><img src="pics/stocks/melonHead.jpg">'
}
// Pronunciation
else if (getRandom === 15) {
  var categNr = "Pronunciation";
  var misNr = "Try to pronunce this word: <br> Otorhinolaryngologist";
  var content = '<br><audio controls> <source src="audio/Otorhinolaryngologist.mp3" type="audio/mp3" </audio>';
}
//ERROR
else {
  var categNr = "This is ERROR";
}

$(".kitty").empty();
$(".card").fadeIn();
$(".cardCat").append(categNr);
$(".cardMis").append(misNr);
$(".cardCont").append(content);

})

$(".card").flip({
  axis: 'y',
  trigger: 'click'
});



$(".back").click(function(){
  $(".card").hide();
  $(".cardCat").empty();
  $(".cardMis").empty();
  $(".cardCont").empty();
  $(".kitty").append(getRandomImage(cat_images));
});

$('body').clickSpark({
  particleImagePath: 'pics/particleCat.png',
  particleCount: 20,
  particleRotationSpeed: 20,
  particleSize: 25,
  particleDuration: 500,
});

// $('#wrapper').clickSpark({
//   particleImagePath: '../particle-2.png',
//   particleCount: 35,
//   particleSpeed: 10,
//   particleSize: 15,
//   particleDuration: 400,
//   particleRotationSpeed: 20
// });

});
