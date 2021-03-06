//Create a script that plays rock paper scissors.
//Variables for user input and computer input.


//User will select avocado, toast, or hipster.
//Computer will select avocado, toast, or hipster.
const options = ['AVOCADO', 'TOAST', 'HIPSTER'];


function computerPlay(array){
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
}



//Script will compare the two values.
//Script will return winner, loser, or tie.


function playRound () {

    let playerSelection = window.prompt('Which do you decide: Avocado, Toast, or Hipster?', 'AVOCADO').toUpperCase();
    let computerSelection = computerPlay(options);

    console.log (`Player picked ${playerSelection}.`);
    console.log(`Computer picked ${computerSelection}.`);


    if (computerSelection === playerSelection) {
        return (`You Tie! You both picked ${playerSelection}.`);
    } else if (computerSelection === options[0] && playerSelection === options[1]) {
        return (`You Lose! ${computerSelection} spreads over ${playerSelection}.`); 
    } else if (computerSelection === options[1] && playerSelection === options[0]) {
        return (`You Win! ${playerSelection} spreads over ${computerSelection}.`);
    } else if (computerSelection === options[2] && playerSelection === options[0]){
        return (`You Lose! ${computerSelection} eats the ${playerSelection}.`);
    } else if (computerSelection === options[0] && playerSelection === options[2]){
        return (`You Win! ${playerSelection} eats the ${computerSelection}.`);
    } else if (computerSelection === options[1] && playerSelection === options[2]) {
       return (`You Lose! ${playerSelection} eats the ${computerSelection}, but has a gluten allergy.`);
    } else if (computerSelection === options[2] && playerSelection === options[1]) {
        return (`You Win! ${computerSelection} eats the ${playerSelection}, but has a gluten allergy.`)
    } return "That wasn't one of the options... do you even want to play?"
}


//Game function to play multiple rounds.
let computerScore = 0 ;
let playerScore = 0;

function gameResults() {
    if (playerScore > computerScore) {
        return "You Win the game!";
    } else if (playerScore < computerScore) {
        return "You Lose the game!"
    } else {
        return "You Tied! Would you look at that!"
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        let roundResults = playRound();
      if (roundResults.includes("You Win!")){
          playerScore++;
          console.log (roundResults);
          console.log('\nYour score is ' + playerScore);
          console.log('The computer score is ' + computerScore);
          console.log ('\n')
      } else if (roundResults.includes("You Lose!")) {
          computerScore++;
          console.log (roundResults);
          console.log('\nYour score is ' + playerScore);
          console.log('The computer score is ' + computerScore);
          console.log ('\n')
      } else {
          console.log (roundResults);
          console.log('\nYour score is ' + playerScore);
          console.log('The computer score is ' + computerScore);
          console.log ('\n');
      }
     }
     console.log(gameResults())
   
}

game()


