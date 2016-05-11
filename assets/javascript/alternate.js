//variables to be used in game
var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var guessedLetters = [];
var x = 0;
var bands = ["major lazer", "die antwoord", "haim", "cage the elephant", "kendrick lamar", "lcd soundsystem", "radiohead", "willie nelson", "schoolboy q", "young the giant"];
var playWord = bands[x].split("");
var displayWord = bands[x].split("");
var letterGuessed;
var evaluateKeystroke;
var newGame = false;

for (i=0; i<displayWord.length; i++)
{
	if (displayWord[i] == " ")
	{

	}
	else
	{
		displayWord[i] = "_";
	}
}

console.log(displayWord);

//provide text to the html document
document.getElementById("instruction-box").innerHTML = "press any key to guess a letter";
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("remaining-guesses").innerHTML = "Guesses Remaing: " + remainingGuesses;
document.getElementById("letters-guessed-box").innerHTML = "Letters Guessed: " + guessedLetters;
document.getElementById("array-box").innerHTML = displayWord;

document.onkeyup = function(event)
{
	if (remainingGuesses === 0)
	{
		newGame = true;
	}
	else
	{
	}
	
	letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(letterGuessed);
	evaluateKeystroke = playWord.includes(letterGuessed);
	console.log(evaluateKeystroke);

	if (evaluateKeystroke == false)
	{
		guessedLetters.push(letterGuessed);
		remainingGuesses = remainingGuesses - 1;
		document.getElementById("remaining-guesses").innerHTML = "Guesses Remaing: " + remainingGuesses;
		document.getElementById("letters-guessed-box").innerHTML = "Letters Guessed: " + guessedLetters;
	}
	// else
	// {
	// 	for (i=0; i < playWord.length; i ++)
	// }		
			
		
	

	


//record a keystroke from the user

//evaluate keystroke to determine if it is in the array

//if in the array, push that letter to its correct position among the dashes

//if not in array, add letter to guessed letters array, subtract 1 from remaining guesses

//if remaining guesses equal 0; start over


// // function startOver(){
// // 	x = x+1;
// // 	guessedLetters = [];
// // 	remainingGuesses = 10;

// // 	playWord = bands[x].split("");
// // 	displayWord = bands[x].split("");

// // 	for (i=0; i<displayWord.length; i++){
// // 	if (displayWord[i] == " "){

// // 	}
// // 	else{
// // 		displayWord[i] = "_";
// // 	}
// // }
// 	}


// function playMusic(){
// 	document.getElementById("moon-song").play();
// }