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

//CATEGORY PICTURES

var rulesPic = '<img src="pics/categories/rules.png">'
var stockPic = '<img src="pics/categories/stockphoto.png">'
var fillBlanksPic = '<img src="pics/categories/fillintheblanks.png">'
var danceMovesPic = '<img src="pics/categories/DANCEMOVES.png">'
var charadesPic = '<img src="pics/categories/charades.png">'

//END OF CATEGORY PICTURES

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
  var getRandom = Math.floor((Math.random() * 26) + 1);
  //The next line can be un-quoted if you want to choose what number that comes up.
  //Don't forget to quote-out the one above as well!
  // var getRandom = 15

//FILL BLANKS
  if (getRandom === 1) {
  var categNr = fillBlanksPic;
  var misNr = "Pack it up, pack it in, let me _____, I came to win, battle me that’s a ___.";
} else if (getRandom === 2) {
  var categNr = fillBlanksPic;
  var misNr = "I got sunshine, on a cloudy ___, when it’s cold outside, I’ve got the ____ of May.";
} else if (getRandom === 3) {
  var categNr = fillBlanksPic;
  var misNr = "I’m gonna pop some tags, got __ _____ in my pocket. I - I’m hunting, looking for a come-up, this is fucking ______.";
} else if (getRandom === 4) {
  var categNr = fillBlanksPic;
  var misNr = "You are the ______ queen, young and sweet, almost seventeen.";
} else if (getRandom === 5) {
  var categNr = fillBlanksPic;
  var misNr = "So tell me what you ____, what you really, really ____, I’ll tell you what I ____, what I really, really ____.";
} else if (getRandom === 6) {
  var categNr = fillBlanksPic;
  var misNr = "Hey ____, don’t make it bad, take a sad song and make it ______.";
} else if (getRandom === 7) {
  var categNr = fillBlanksPic;
  var misNr = "Is this the real ____, is this just fantasy, caught in a landslide, escape from _______.";
} else if (getRandom === 8) {
  var categNr = fillBlanksPic;
  var misNr = "Billie ____ is not my lover, she’s just a girl - who claims that I am the one, but the ___ is not my son.";
} else if (getRandom === 9) {
  var categNr = fillBlanksPic;
  var misNr = "Take me down to the _______ city, where the grass is green and the _____ are pretty.";
} else if (getRandom === 10) {
  var categNr = fillBlanksPic;
  var misNr = "I see a red door and I want to paint it ____, no colours anymore I want them to turn ____.";
}
//RULES
else if (getRandom === 11) {
  var categNr = rulesPic;
  var misNr = "Darling. Call everyone ”Darling” for the rest of the game.";
} else if (getRandom === 12) {
  var categNr = rulesPic;
  var misNr = "No NO. You can't say 'NO' for the rest of the game.";
} else if (getRandom === 13) {
  var categNr = rulesPic;
  var misNr = "No phones. If you touch your phone during the game, the person in front of you is allowed to send any text message to any contacts you have";
} else if (getRandom === 14) {
  var categNr = rulesPic;
  var misNr = "The Narcissus rule: Everyone, including myself, compliment me every time they have to drink.";
} else if (getRandom === 15) {
  var categNr = rulesPic;
  var misNr = "Mr. President rule. When you speak, you have to put your 2 fingers to your ear as if you are part of the President's security detail, communicating with other personnel";
}
//TIME TRAVEL
else if (getRandom === 16) {
  var categNr = "Time Travel";
  var misNr = "Do a moonwalk";
} else if (getRandom === 17) {
  var categNr = "Time Travel";
  var misNr = "Do the Robot Dance";
}
//MOVIES
else if (getRandom === 18) {
  var categNr = "<h3>Describe the movie plot, if you can't, make one up. Drink if you fail</h3>";
  var misNr = "Fight Club";
} else if (getRandom === 19) {
  var categNr = "<h3>Describe the movie plot, if you can't, make one up. Drink if you fail</h3>";
  var misNr = "The Godfather";
} else if (getRandom === 20) {
  var categNr = "<h3>Describe the movie plot, if you can't, make one up. Drink if you fail</h3>";
  var misNr = "Pulp Fiction";
}
// Stockphotos Talk
else if (getRandom === 21) {
  var categNr = stockPic;
  var misNr = "Create a caption for the stockphoto below:";
  var content = '<img src="pics/stocks/stock1.jpg">'
} else if (getRandom === 22) {
  var categNr = stockPic;
  var misNr = "Create a caption for the stockphoto below:";
  var content = '<img src="pics/stocks/stock2.jpg">'
} else if (getRandom === 23) {
  var categNr = stockPic;
  var misNr = "Create a caption for the stockphoto below:";
  var content = '<img src="pics/stocks/stock3.jpg">'
} else if (getRandom === 24) {
  var categNr = stockPic;
  var misNr = "Create a caption for the stockphoto below:";
  var content = '<img src="pics/stocks/stock4.jpg">'
} else if (getRandom === 25) {
  var categNr = stockPic;
  var misNr = "Create a caption for the stockphoto below:";
  var content = '<img src="pics/stocks/stock5.jpg">'
}
// Pronunciation
else if (getRandom === 26) {
  var categNr = danceMovesPic;
  var misNr = "Try to pronunce this word: <br> Otorhinolaryngologist";
  // var content = '<br><audio controls> <source src="audio/Otorhinolaryngologist.mp3" type="audio/mp3" </audio>';
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
  particleDuration: 200,
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
