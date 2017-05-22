


//pseudo code

//create array list
//choose band from list
//take band name and split into single characters
//replace characters with dash
//create function that collects keyboard stroke

// VARIABLES

//array of bands (all lowercase)
var bandList = ["theclash", "theramones", "blondie", "sexpistols", "pattismith"];
//holds random band chosen
var chosenBand="";
//this will break chosenBand into individual letters and be held here in an array
var lettersInChosenBand=[];
//this will be the number of blanks we show based on the solution
var numBlanks=0;
//holds mix of blank and solved letters
var blanksAndSuccesses=[];
//holds all the wrong guesses
var wrongGuesses=[];


//game counters
var winCounter=0;
var lossCounter=0;
var numGuess=15;

function startGame() {
	// reset the guesses back 15
	numGuess=15;

	//randomly choosing band from array
	chosenBand = bandList[Math.floor(Math.random()*bandList.length)];
	//splitting chosen band into individual letters
	lettersInChosenBand = chosenBand.split("");

	//making sure the space is kept as a space
	// for (var i=0; i<lettersInChosenBand.length; i++) {
	// 	if (lettersInChosenBand[i] === " ") {

	// 	}
	// }

	//finding out how many letters are in the chosen band
	numBlanks = lettersInChosenBand.length;


	console.log("Random Band Chosen: " + chosenBand);
	console.log("SPLIT: " + lettersInChosenBand);
	console.log("Amount of letters in chosen band: " + numBlanks);

	//we reset the guess and wrong guesses for new round
	blanksAndSuccesses = [];
	wrongGuesses = [];

	// Fill up the blanksAndSuccesses list with appropriate number of blanks.
	for (var i=0; i<numBlanks; i++) {
		blanksAndSuccesses.push("_");
	}

	console.log("Blanks/Successes: " + blanksAndSuccesses);

	// Reprints the guessesLeft to 9
  	document.getElementById("guessesLeft").innerHTML = "Number of Guesses Remaining: " +numGuess;


	//prints blanks at beginning of each round
  	document.getElementById("wordGuessSlot").innerHTML = blanksAndSuccesses.join(" ");

  	//writes the blanks to the div
  	document.getElementById("letterGuessSlot").innerHTML = wrongGuesses.join(" , ");

};

function checkLetters(letter) {
	//boolean will toggle based on whether letter is in word
	var letterInWord = false;

	for (var i=0; i<numBlanks; i++) {
		if (chosenBand[i] === letter) {
			//if letter exists toggle boolean to true
			letterInWord = true;
		}
	}

	//if letter exists in word, figure out where
	if (letterInWord) {
		//loop through word
		for (var i=0; i<numBlanks; i++) {
			//populate b&s with every instance of letter
			if (chosenBand[i] === letter) {
				//set specific space in b&s equal to letter that is matched
				blanksAndSuccesses[i] = letter;
			}

		}
		console.log("Check letter blanks: " + blanksAndSuccesses);
	}

	else {
		wrongGuesses.push(letter);
		numGuess--;
	}

}

//code run after each guess is made
function roundComplete() {
	console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuess);

	document.getElementById("guessesLeft").innerHTML = numGuess;

	document.getElementById("wordGuessSlot").innerHTML = blanksAndSuccesses.join(" ");

	document.getElementById("letterGuessSlot").innerHTML = wrongGuesses.join(" ");

	if (lettersInChosenBand.toString() === blanksAndSuccesses.toString()) {

		winCounter++;
		alert("YOU WIN!");

		document.getElementById("wins").innerHTML = "Wins: " + winCounter;

		bandImage();

		startGame();
	}
	else if (numGuess === 0) {

		lossCounter++;
		alert("Sorry, you've lost.");

		document.getElementById("losses").innerHTML = "Losses: " + lossCounter;

		startGame();
	}
}

//play music and show image if they win
function bandImage() {
	if (chosenBand === "theclash") {
			document.getElementById("photoBand").innerHTML = "<img src = './assets/images/the_clash_uk.jpg' alt='The Clash' height='225' width='auto'>";
	}
	if (chosenBand === "theramones") {
			document.getElementById("photoBand").innerHTML = "<img src = './assets/images/the_ramones.jpeg' alt='The Ramones' height='225' width='auto'>";
	}
	if (chosenBand === "blondie") {
			document.getElementById("photoBand").innerHTML = "<img src = './assets/images/blondie.jpg' alt='Blondie' height='225' width='auto'>";
	}
	if (chosenBand === "sexpistols") {
			document.getElementById("photoBand").innerHTML = "<img src = './assets/images/sex_pistols.jpg' alt='Sex Pistols' height='225' width='auto'>";
	}
	if (chosenBand === "pattismith") {
			document.getElementById("photoBand").innerHTML = "<img src = './assets/images/patti_smith.jpg' alt='Patti Smith' height='225' width='auto'>";
	}
}


// MAIN PROCESSES

startGame();

// capturing the key clicks
document.onkeyup = function(event) {
  // Converts all key clicks to lowercase letters.
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  // Runs the code to check for correctness.
  checkLetters(letterGuessed);
  // Runs the code after each round is done.
  // roundComplete();
  roundComplete();
};






