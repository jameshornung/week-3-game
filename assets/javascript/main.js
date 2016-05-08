var wins = 0;
var losses = 0;

var guessWord = ["mumford and sons", "zilker", "austin", "die antwoord"];

document.onkeypress= function(event){
	document.getElementById("instruction-box").innerHTML = "";
	document.getElementById("wins").innerHTML = "Wins: " + wins;
	document.getElementById("losses").innerHTML = "Losses: " + losses;

	var x=0;

	if(x >= 0){
		guessWord[x];

		var playWord = guessWord[x].split("");
		var playArray = playWord;
		var j = 0;

		for(i=0; i<playArray.length; i++){
		if (playArray[i] === " "){
		}
		else{
			playArray[i] = "\u2014";
		}
		}
		}
		console.log(playArray);
	var displayWord = playArray.join("");
	document.getElementById("array-box").innerHTML = displayWord;
		console.log(displayWord);
}

function playMusic(){
	document.getElementById("moon-song").play();
}





