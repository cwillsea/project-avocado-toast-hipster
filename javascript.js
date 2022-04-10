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