//global variable
var wordBank = ["dog", "bird", "pidgeon"];
var targetWord = "";
var targetWordArray = [];
var wrongLetters = [];
var correctLetters = [];
var displayWord = [];
var wins = 0;
var losses = 0;
var remainingGuesses = 10;



//functions
function startGame()
{
	targetWord = wordBank[Math.floor(Math.random()* wordBank.length)];
	targetWordArray = targetWord.split("");

	for(i=0; i<targetWord.length; i++)
	{
		displayWord.push(" _ ");
	}

	document.getElementById("array-box").innerHTML = displayWord.join("");
	document.getElementById("instruction-box").innerHTML = "press any key to guess a letter";
	document.getElementById("wins").innerHTML = "Wins: " + wins;
	document.getElementById("losses").innerHTML = "Losses: " + losses;
	document.getElementById("remaining-guesses").innerHTML = "Guesses Remaing: " + remainingGuesses;
	document.getElementById("letters-guessed-box").innerHTML = "Letters Guessed: " + wrongLetters;
}

function checkLetter(letter)
{
	var isInWord;
	for (i = 0; i < targetWordArray.length; i++)
	{
		if(letter == targetWordArray[i])
		{
			isInWord = true;
			replaceLetter(letter);
			correctLetters.push(letter);
		}
		else
		{
			isInWord = false;
		}
	}
	if(isInWord == false)
	{
		wrongLetters.push(letter);
		remainingGuesses = remainingGuesses - 1;
	}
	else
	{
		
	}
	document.getElementById("array-box").innerHTML = displayWord.join("");
}

function reset()
{
	targetWord = "";
	targetWordArray = [];
	wrongLetters = [];
	correctLetters = [];
	displayWord = [];
	remainingGuesses = 10;

}

function replaceLetter(letter)
{
	var j = targetWordArray.indexOf(letter);
	displayWord.splice(j, 1, letter);
}

function checkForWin()
{

	if(correctLetters.length == targetWordArray.length)
	{
		document.getElementById("remaining-guesses").innerHTML = "YOU WIN, YOU WIN, YOU WIN";
		wins = wins + 1;
		document.getElementById("wins").innerHTML = "Wins: " + wins;
		reset();
		startGame();
	}
}

function playMusic(){
	document.getElementById("moon-song").play();
}




//main code
startGame();

document.onkeyup = function(event)
{
	console.log(targetWordArray);
	console.log(displayWord);
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetter(letterGuessed);
	document.getElementById("remaining-guesses").innerHTML = "Guesses Remaing: " + remainingGuesses;
	document.getElementById("letters-guessed-box").innerHTML = "Letters Guessed: " + wrongLetters;

	console.log(correctLetters.length);
	console.log(targetWordArray.length);

	checkForWin();

	if (remainingGuesses == 0)
	{
		reset();
		startGame();
		losses = losses + 1;
		document.getElementById("losses").innerHTML = "Losses: " + losses;
	}

}
console.log(displayWord);
//troubleshoot

