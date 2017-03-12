/** Declare random number between 1 and 100 **/
var max = 100;
var min = 0;

var randomNumber = Math.floor(Math.random() * (max - min)) + min;


var numberTurn = 1;




function guessMyNumber() {

  var submittedNumber = document.guessThatNumberForm.guessedNumber.value;

  var showNumber = submittedNumber + " ";
  document.getElementById("pastGuesses").innerHTML += showNumber;

   if (submittedNumber == randomNumber) {
     document.getElementById("congratulation").innerHTML = 'Congratulation! You guessed correctly.';
     document.getElementById('numberInput').disabled = true;
     document.getElementById('submitButton').disabled = true;
   }
   else if (submittedNumber < randomNumber ){
      document.getElementById("hintMessage").innerHTML = 'You are too low!';
   }
   else if  (submittedNumber > randomNumber ){
     document.getElementById("hintMessage").innerHTML = 'You are too high!';
     }

}
