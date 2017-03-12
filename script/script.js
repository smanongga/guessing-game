/** Declare random number between 1 and 100 **/
var max = 100;
var min = 0;

var randomNumber = Math.floor(Math.random() * (max - min)) + min;


var numberTurn = 1;



function guessMyNumber() {

  var submittedNumber = document.guessThatNumberForm.guessedNumber.value;


 if (numberTurn <= 10 ) {
     var showNumber = submittedNumber + " ";
     document.getElementById("pastGuesses").textContent += showNumber;
 }

else {
  stopGame();

}


   if (submittedNumber == randomNumber) {
     document.getElementById("congratulation").textContent = 'Congratulation! You guessed correctly.';
     stopGame();
   }

   else if (submittedNumber < randomNumber ){
      document.getElementById("hintMessage").textContent = 'You are too low!';
   }
   else if  (submittedNumber > randomNumber ){
     document.getElementById("hintMessage").textContent = 'You are too high!';
     }

  numberTurn++;
}

function stopGame () {
  document.getElementById('numberInput').disabled = true;
  document.getElementById('submitButton').disabled = true;
  document.getElementById("tryAgain").textContent = 'YOU FAIL! GAME OVER!!';

}
