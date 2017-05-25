


var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];






var Wins = 0;
var Losses = 0;
var GuessesLeft = 10;
var YourGuessesSoFar = [];
var userGuess = [];
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];


document.onkeyup = function(event){

   var userGuess = event.key;
   console.log(userGuess);
      status = " ";

      if(userGuess === computerChoice){
          Wins++;
          status = "You Win!!!";
          computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
          alert("Good job!!!")
          YourGuessesSoFar = [];
          GuessesLeft = 10;
      } 
      else{
          GuessesLeft--;
          YourGuessesSoFar.push(userGuess);
      }

      if(GuessesLeft === 0){
          Losses++; 
          GuessesLeft = 10;
          status = "You lost!!";
          YourGuessesSoFar = [];

          }

  
  var updatestatus = "<p>Status: " + status +"</p>";
  var updateWins = "<p>Wins: " + Wins + "</p>";
  var updateLosses = "<p>Losses: " + Losses + "</p>";
  var updateGuessLeft = "<p>Guesses Left:" +GuessesLeft + "</p>";
  var updateYourGuessesSoFar = "<p>Your Guesses So Far:" + YourGuessesSoFar + "</p>"


  var gameDiv = document.getElementById("game");

  gameDiv.innerHTML = updateWins + updateLosses + updateGuessLeft + updateYourGuessesSoFar + updatestatus ;

}
