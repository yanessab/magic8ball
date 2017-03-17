$(document).ready(function(){

var magic8Ball = {};

$("#answer").hide();

magic8Ball.listOfAnswers = ["For sure", "YES!", "Absolutely", "Of course", "Si!", "Oui!", "Definitely", "Indubitably", "Why, yes", "Signs point to yes", "Ummmm huh?", "Maybe", "Possibly", "Who's to say?", "Ask me later", "In your dreams", "As if", "I doubt it", "Nope", "You wish"];

  //define the method
magic8Ball.askQuestion = function(question) {

$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

$("#answer").fadeIn(4000);

  // create a random number
var randomNumber = Math.random();

  // make the random number between 0 and the number of items in your array
var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;

  // round down the number to be a whole number
var randomIndex = Math.floor(randomNumberForListOfAnswers);

  // use that number to index a random number from the answers array
var answer = this.listOfAnswers[randomIndex];

$("#answer").text(answer);

console.log(question);
console.log(answer);

}

var onClick = function()
{
  $("#8ball").effect( "shake" );
  $("#answer").hide();
  var question = prompt("ASK A YES/NO QUESTION!");
  magic8Ball.askQuestion(question);
}

$("#questionButton").click(onClick);

$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");


});
