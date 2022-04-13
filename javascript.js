//Create a script that plays rock paper scissors.
//Variables for user input and computer input.

let playerSelection = window.prompt('Which do you decide: Avocado, Toast, or Hipster?', 'avocado');


let computerSelection;
let playerSelectionUpperCase = playerSelection.toUpperCase();
console.log (`Player picked ${playerSelectionUpperCase}.`)
//User will select avocado, toast, or hipster.
//Computer will select avocado, toast, or hipster.
const options = ['AVOCADO', 'TOAST', 'HIPSTER'];

computerSelection = computerPlay(options)

function computerPlay(array){
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
}

console.log(`Computer picked ${computerSelection}.`);

//Script will compare the two values.
console.log (playRound (computerSelection, playerSelectionUpperCase));
//Script will return winner, loser, or tie.

function playRound (computer, player) {

    if (computer === player) {
        return (`You Tie! You both picked ${playerSelection}.`);
    } else if (computer === options[0] && player === options[1]) {
        return (`You Lose! ${computer} spreads over ${player}.`); 
    } else if (computer === options[1] && player === options[0]) {
        return (`You Win! ${player} spreads over ${computer}.`);
    } else if (computer === options[2] && player === options[0]){
        return (`You Lose! ${computer} eats the ${player}.`);
    } else if (computer === options[0] && player === options[2]){
        return (`You Win! ${player} eats the ${computer}.`);
    } else if (computer === options[1] && player === options[2]) {
       return (`You Lose! ${player} eats the ${computer}, but has a gluten allergy.`);
    } else if (computer === options[2] && player === options[1]) {
        return (`You Win! ${computer} eats the ${player}, but has a gluten allergy.`)
    } return "That wasn't one of the options... do you even want to play?"
}

//Game function to play multiple rounds.
