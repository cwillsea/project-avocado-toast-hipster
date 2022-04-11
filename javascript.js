//Create a script that plays rock paper scissors.
//Variables for user input and computer input.

let playerSelection = window.prompt('Which do you decide: Avocado, Toast, or Hipster?', 'avocado');


let computerSelection;
let playerSelectionUpperCase = playerSelection.toUpperCase();
console.log (`Player picked ${playerSelection}.`)
//User will select avocado, toast, or hipster.
//Computer will select avocado, toast, or hipster.
const options = ['AVOCADO', 'TOAST', 'HIPSTER'];

computerSelection = computerPlay(options);

function computerPlay(array){
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
}

console.log(`Computer picked ${computerSelection}.`);

//Script will compare the two values.
console.log (playRound (computerSelection, playerSelection);
//Script will return winner, loser, or tie.

function playRound (computerSelection, playerSelection) {

    let results;

    if (computerSelection === playerSelectionUpperCase) {
        return (`You Tie! You both picked ${playerSelection}.`);
    } else if (computerSelection === 'Avocado' && playerSelectionUpperCase === 'Toast') {
        return (`You Lose! ${computerSelection} spreads over ${playerSelection}.`); 
    } else if (computerSelection === 'Toast' && playerSelectionUpperCase === 'Avocado') {
        return (`You Win! ${playerSelection} spreads over ${computerSelection}.`);
    } else if (computerSelection === 'Hipster' && playerSelectionUpperCase === 'Avocado'){
        return (`You Lose! ${computerSelection} eats the ${playerSelection}.`);
    } else {
        (`You Win! ${computerSelection} eats the ${playerSelection}, but has a gluten allergy.`)
    }
}

//Game function to play multiple rounds.
