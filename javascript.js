//Create a script that plays rock paper scissors.
//Variables for user input and computer input.
let playerSelection;
let computerSelection;
//User will select avocado, toast, or hipster.
//Computer will select avocado, toast, or hipster.
const options = ['Avocado', 'Toast', 'Hipster'];

computerSelection = computerPlay(options);

function computerPlay(array){
    const randomIndex = Math.floor(Math.random() * array.length);
    const item = array[randomIndex];
    return item;
}

console.log(computerSelection);

//Script will compare the two values.
//Script will return winner, loser, or tie.

function playRound (computerSelection, playerSelection) {
    let results;
    if (computerSelection === playerSelection) {
        return (`You Tie! You both picked ${playerSelection}.`);
    } else if (computerSelection === 'Avocado' && playerSelection === 'Toast') {
        return (`You Lose! ${computerSelection} spreads over ${playerSelection}.`); 
    } else if (computerSelection === 'Toast' && playerSelection === 'Avocado') {
        return (`You Win! ${playerSelection} spreads over ${computerSelection}.`);
    } else if (computerSelection === 'Hipster' && playerSelection === 'Avocado'){
        return (`You Lose! ${computerSelection} eats the ${playerSelection}.`);
    } else {
        (`You Win! ${computerSelection} eats the ${playerSelection}, but has a gluten allergy.`)
    }
}
