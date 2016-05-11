var wins = 0;
var losses = 0;
var wordSelector = 0;
var guessWord = ["mumford and sons", "zilker", "radiohead", "die antwoord", "cage the elephant"];
var remainingGuesses = 5;
var guessedLetters = [];
var displayWord = guessWord[wordSelector].split("");
var playWord = guessWord[wordSelector].split("");
var evaluateKeystroke;
var letterGuessed = "";

for(i=0; i < displayWord.length; i++){
	if (displayWord[i] === " "){
	}
	else{
	displayWord[i] = "\u2014";
	}
};

document.getElementById("instruction-box").innerHTML = "press any key to guess a letter";
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("remaining-guesses").innerHTML = "Guesses Remaing: " + remainingGuesses;
document.getElementById("letters-guessed-box").innerHTML = "Letters Guessed: " + guessedLetters;
document.getElementById("array-box").innerHTML = displayWord.join("");

//record a keystroke from user and assign it to a variable
for(remainingGuesses > 0){
document.onkeyup = function(event){
	
	letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(letterGuessed);
	//evaluate the keystroke to see if it is in the current array
	evaluateKeystroke = playWord.includes(letterGuessed);
	
if(evaluateKeystroke == true){
	console.log("got one");
	}
else{
	guessedLetters.push(letterGuessed);
	remainingGuesses = remainingGuesses - 1;
	document.getElementById("remaining-guesses").innerHTML = "Guesses Remaing: " + remainingGuesses;
	document.getElementById("letters-guessed-box").innerHTML = "Letters Guessed: " + guessedLetters;
}
}
}
else{

}






	


//function to play music, need to learn how to make this pause music on second keystroke
function playMusic(){
	document.getElementById("moon-song").play();
}







