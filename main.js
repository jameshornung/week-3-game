document.onkeypress= function(event){
	document.getElementById("play-box").innerHTML = "";
	document.getElementById("wins").innerHTML = "Wins: ";
	document.getElementById("losses").innerHTML = "Losses: ";
}

var playMusic = function(){
	document.getElementById("moon-song").play();
}

playMusic();