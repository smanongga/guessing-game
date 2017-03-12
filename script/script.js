var max = 100;
var min = 0;

var randomNumber = Math.floor(Math.random() * (max - min)) + min;

var numberTurn = 1;



function guessMyNumber () {
  var submmitedNumber = document.guessThatNumberForm.guessedNumber.value;

  var showNumber = submmitedNumber + ', ';

  document.getElementById("pastGuesses").innerHTML += showNumber;
}
