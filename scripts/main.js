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
var catInst;
var misNr;
var content;
var getRandom;
//var answer;

$(".kitty").click(function(getRandom){
  // bop.play();
  var getRandom = Math.floor((Math.random() * 40) + 1);
  //The next line can be un-quoted if you want to choose what number that comes up.
  //Don't forget to quote-out the one above as well!
  // var getRandom = 30

//FILL BLANKS
  if (getRandom === 1) {
  var categNr = fillBlanksPic;
  var catInst = "Sing the lyrics (including the blanks) that are on the backside of this card. If you can't, you drink.<br><br>(Want to know the answer? Google it you lazy SOB. Coding is hard.)"
  var misNr = "Pack it up, pack it in, let me _____, I came to win, battle me that’s a sin.";
  //var answer = "begin";
} else if (getRandom === 2) {
  var categNr = fillBlanksPic;
  var catInst = "Sing the lyrics (including the blanks) that are on the backside of this card. If you can't, you drink.<br><br>(Want to know the answer? Google it you lazy SOB. Coding is hard.)"
  var misNr = "I got sunshine, on a cloudy day, when it’s cold outside, I’ve got the _____ of May.";
  //var answer = "month"
} else if (getRandom === 3) {
  var categNr = fillBlanksPic;
  var catInst = "Sing the lyrics (including the blanks) that are on the backside of this card. If you can't, you drink.<br><br>(Want to know the answer? Google it you lazy SOB. Coding is hard.)"
  var misNr = "I’m gonna pop some tags, got 20 dollars in my pocket. I - I’m hunting, looking for a come-up, this is fucking ______.";
  //var answer = "awesome";
} else if (getRandom === 4) {
  var categNr = fillBlanksPic;
  var catInst = "Sing the lyrics (including the blanks) that are on the backside of this card. If you can't, you drink.<br><br>(Want to know the answer? Google it you lazy SOB. Coding is hard.)"
  var misNr = "You are the ______ queen, young and sweet, almost seventeen.";
  //var answer = "dancing";
} else if (getRandom === 5) {
  var categNr = fillBlanksPic;
  var catInst = "Sing the lyrics (including the blanks) that are on the backside of this card. If you can't, you drink.<br><br>(Want to know the answer? Google it you lazy SOB. Coding is hard.)"
  var misNr = "So tell me what you ____, what you really, really ____, I’ll tell you what I ____, what I really, really ____.";
  //var answer = "want";
} else if (getRandom === 6) {
  var categNr = fillBlanksPic;
  var catInst = "Sing the lyrics (including the blanks) that are on the backside of this card. If you can't, you drink.<br><br>(Want to know the answer? Google it you lazy SOB. Coding is hard.)"
  var misNr = "Hey ____, don’t make it bad, take a sad song and make it better.";
  //var answer = "Jude";
} else if (getRandom === 7) {
  var categNr = fillBlanksPic;
  var catInst = "Sing the lyrics (including the blanks) that are on the backside of this card. If you can't, you drink.<br><br>(Want to know the answer? Google it you lazy SOB. Coding is hard.)"
  var misNr = "Is this the real ____, is this just fantasy, caught in a landslide, escape from reality.";
  //var answer = "life";
} else if (getRandom === 8) {
  var categNr = fillBlanksPic;
  var catInst = "Sing the lyrics (including the blanks) that are on the backside of this card. If you can't, you drink.<br><br>(Want to know the answer? Google it you lazy SOB. Coding is hard.)"
  var misNr = "Billie ____ is not my lover, she’s just a girl - who claims that I am the one, but the kid is not my son.";
  //var answer = "Jean";
} else if (getRandom === 9) {
  var categNr = fillBlanksPic;
  var catInst = "Sing the lyrics (including the blanks) that are on the backside of this card. If you can't, you drink.<br><br>(Want to know the answer? Google it you lazy SOB. Coding is hard.)"
  var misNr = "Take me down to the ________ city, where the grass is green and the girls are pretty.";
  //var answer = "paradise";
} else if (getRandom === 10) {
  var categNr = fillBlanksPic;
  var catInst = "Sing the lyrics (including the blanks) that are on the backside of this card. If you can't, you drink.<br><br>(Want to know the answer? Google it you lazy SOB. Coding is hard.)"
  var misNr = "I see a red door and I want to paint it _____, no colours anymore I want them to turn _____.";
  //var answer = "black";
}
//RULES
else if (getRandom === 11) {
  var categNr = rulesPic;
  var catInst = "The rule on the backside of this card rules you for the rest of the game. If you don't follow it, you drink."
  var misNr = "Darling. Call everyone ”Darling” for the rest of the game.";
} else if (getRandom === 12) {
  var categNr = rulesPic;
  var catInst = "The rule on the backside of this card rules you for the rest of the game. If you don't follow it, you drink."
  var misNr = "No NO. You can't say 'NO' for the rest of the game.";
} else if (getRandom === 13) {
  var categNr = rulesPic;
  var catInst = "The rule on the backside of this card rules you for the rest of the game. If you don't follow it, you drink."
  var misNr = "Duck selfie. Snap a selfie of yourself doing duck lips everytime you're about to drink.";
} else if (getRandom === 14) {
  var categNr = rulesPic;
  var catInst = "The rule on the backside of this card rules you for the rest of the game. If you don't follow it, you drink."
  var misNr = "The Narcissus rule: Everyone, including myself, compliment me every time they have to drink.";
} else if (getRandom === 15) {
  var categNr = rulesPic;
  var catInst = "The rule on the backside of this card rules you for the rest of the game. If you don't follow it, you drink."
  var misNr = "Mr. President rule. When you speak, you have to put your 2 fingers to your ear as if you are part of the President's security detail, communicating with other personnel.";
}
//DANCE MOVES
else if (getRandom === 16) {
  var categNr = danceMovesPic;
  var catInst = "Do the dance move that is displayed on the backside of this card. Your friends evaluate if you rockin’ it or not by voting. If not, drink. You have 20 seconds."
  var misNr = "Do a moonwalk";
} else if (getRandom === 17) {
  var categNr = danceMovesPic;
  var catInst = "Do the dance move that is displayed on the backside of this card. Your friends evaluate if you rockin’ it or not by voting. If not, drink. You have 20 seconds."
  var misNr = "Do the Robot Dance";
} else if (getRandom === 18) {
  var categNr = danceMovesPic;
  var catInst = "Do the dance move that is displayed on the backside of this card. Your friends evaluate if you rockin’ it or not by voting. If not, drink. You have 20 seconds."
  var misNr = "Stop... Hammertime!";
} else if (getRandom === 19) {
  var categNr = danceMovesPic;
  var catInst = "Do the dance move that is displayed on the backside of this card. Your friends evaluate if you rockin’ it or not by voting. If not, drink. You have 20 seconds."
  var misNr = "Vogueing!";
} else if (getRandom === 20) {
  var categNr = danceMovesPic;
  var catInst = "Do the dance move that is displayed on the backside of this card. Your friends evaluate if you rockin’ it or not by voting. If not, drink. You have 20 seconds."
  var misNr = "Do the macarena!";
} else if (getRandom === 21) {
  var categNr = danceMovesPic;
  var catInst = "Do the dance move that is displayed on the backside of this card. Your friends evaluate if you rockin’ it or not by voting. If not, drink. You have 20 seconds."
  var misNr = "Do a break dance move of your choice!";
} else if (getRandom === 22) {
  var categNr = danceMovesPic;
  var catInst = "Do the dance move that is displayed on the backside of this card. Your friends evaluate if you rockin’ it or not by voting. If not, drink. You have 20 seconds."
  var misNr = "DAB! <br> Do 5 dabs as quickly as you can!";
} else if (getRandom === 23) {
  var categNr = danceMovesPic;
  var catInst = "Do the dance move that is displayed on the backside of this card. Your friends evaluate if you rockin’ it or not by voting. If not, drink. You have 20 seconds."
  var misNr = "TWERK!";
} else if (getRandom === 24) {
  var categNr = danceMovesPic;
  var catInst = "Do the dance move that is displayed on the backside of this card. Your friends evaluate if you rockin’ it or not by voting. If not, drink. You have 20 seconds."
  var misNr = "The running man!";
} else if (getRandom === 25) {
  var categNr = danceMovesPic;
  var catInst = "Do the dance move that is displayed on the backside of this card. Your friends evaluate if you rockin’ it or not by voting. If not, drink. You have 20 seconds."
  var misNr = "Do the snake dance!";
}
// STOCKPHOTOS TALK
else if (getRandom === 26) {
  var categNr = stockPic;
  var catInst = "Create a funny caption/quote for the photo on the backside of this card. If the other players do not think it is funny (decided by voting), you drink. You have 10 seconds."
  var misNr = "Create a caption for the stockphoto below:";
  var content = '<img src="pics/stocks/stock1.jpg">'
} else if (getRandom === 27) {
  var categNr = stockPic;
  var catInst = "Create a funny caption/quote for the photo on the backside of this card. If the other players do not think it is funny (decided by voting), you drink. You have 10 seconds."
  var misNr = "Create a caption for the stockphoto below:";
  var content = '<img src="pics/stocks/stock2.jpg">'
} else if (getRandom === 28) {
  var categNr = stockPic;
  var catInst = "Create a funny caption/quote for the photo on the backside of this card. If the other players do not think it is funny (decided by voting), you drink. You have 10 seconds."
  var misNr = "Create a caption for the stockphoto below:";
  var content = '<img src="pics/stocks/stock3.jpg">'
} else if (getRandom === 29) {
  var categNr = stockPic;
  var catInst = "Create a funny caption/quote for the photo on the backside of this card. If the other players do not think it is funny (decided by voting), you drink. You have 10 seconds."
  var misNr = "Create a caption for the stockphoto below:";
  var content = '<img src="pics/stocks/stock4.jpg">'
} else if (getRandom === 30) {
  var categNr = stockPic;
  var catInst = "Create a funny caption/quote for the photo on the backside of this card. If the other players do not think it is funny (decided by voting), you drink. You have 10 seconds."
  var misNr = "Create a caption for the stockphoto below:";
  var content = '<img src="pics/stocks/stock5.jpg">'
}
// CHARADES
else if (getRandom === 31) {
  var categNr = charadesPic;
  var catInst = "Make sure the others can’t see the screen. Do your best impression of the character on the backside of this card WITHOUT talking. If they can’t guess who you are, you drink."
  var misNr = "Nemo from Finding Nemo with two functioning fins.";
} else if (getRandom === 32) {
  var categNr = charadesPic;
  var catInst = "Make sure the others can’t see the screen. Do your best impression of the character on the backside of this card WITHOUT talking. If they can’t guess who you are, you drink."
  var misNr = "Shrek on the catwalk.";
} else if (getRandom === 33) {
  var categNr = charadesPic;
  var catInst = "Make sure the others can’t see the screen. Do your best impression of the character on the backside of this card WITHOUT talking. If they can’t guess who you are, you drink."
  var misNr = "Spider Man watching porn.";
} else if (getRandom === 34) {
  var categNr = charadesPic;
  var catInst = "Make sure the others can’t see the screen. Do your best impression of the character on the backside of this card WITHOUT talking. If they can’t guess who you are, you drink."
  var misNr = "The Hulk in a wheelchair.";
} else if (getRandom === 35) {
  var categNr = charadesPic;
  var catInst = "Make sure the others can’t see the screen. Do your best impression of the character on the backside of this card WITHOUT talking. If they can’t guess who you are, you drink."
  var misNr = "Darth Vader eating carrots.";
} else if (getRandom === 36) {
  var categNr = charadesPic;
  var catInst = "Make sure the others can’t see the screen. Do your best impression of the character on the backside of this card WITHOUT talking. If they can’t guess who you are, you drink."
  var misNr = "Harry Potter with contact lenses.";
} else if (getRandom === 37) {
  var categNr = charadesPic;
  var catInst = "Make sure the others can’t see the screen. Do your best impression of the character on the backside of this card WITHOUT talking. If they can’t guess who you are, you drink."
  var misNr = "Forrest Gump supporting Donald Trump.";
} else if (getRandom === 38) {
  var categNr = charadesPic;
  var catInst = "Make sure the others can’t see the screen. Do your best impression of the character on the backside of this card WITHOUT talking. If they can’t guess who you are, you drink."
  var misNr = "T-Rex playing chess.";
} else if (getRandom === 39) {
  var categNr = charadesPic;
  var catInst = "Make sure the others can’t see the screen. Do your best impression of the character on the backside of this card WITHOUT talking. If they can’t guess who you are, you drink."
  var misNr = "The captain of Titanic on cocaine.";
} else if (getRandom === 40) {
  var categNr = charadesPic;
  var catInst = "Make sure the others can’t see the screen. Do your best impression of the character on the backside of this card WITHOUT talking. If they can’t guess who you are, you drink."
  var misNr = "Wolverine slicing bread.";
}
//ERROR
else {
  var categNr = "This is ERROR";
}

$(".kitty").empty();
$(".card").fadeIn();
$(".cardCatInst").append(catInst);
$(".cardCat").append(categNr);
$(".cardMis").append(misNr);
$(".cardCont").append(content);
//$(".cardAns").append(answer);

})

$(".blurry").click(function(){
  $(".blurry").removeClass(".blurry");
});

$(".card").flip({
  axis: 'y',
  trigger: 'click'
});



$(".back").click(function(){
  $(".card").hide();
  $(".cardCat").empty();
  $(".cardMis").empty();
  $(".cardCont").empty();
  $(".cardCatInst").empty();
  //$(".cardAns").empty();
  $(".kitty").append(getRandomImage(cat_images));
});

$('body').clickSpark({
  particleImagePath: 'pics/particleCat.png',
  particleCount: 20,
  particleRotationSpeed: 20,
  particleSize: 25,
  particleDuration: 200,
});

});
