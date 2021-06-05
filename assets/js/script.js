// Wait for the DOM to finish loading before running the game
// This is a good practice to get into so you're not trying to target things that don't exist yet
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    // This is shorter syntax for (let i = 0; i < buttons.length; i++)
    // It's going  to go through our buttons array and return each element in the array 
    // which will be stored in  that variable button on each iteration.  
    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("date-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType)
            }
        })
    }

    runGame("addition");
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1
    let num2 = Math.floor(Math.random() * 25) + 1

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
        // throw will stop the game from running and send the error message we enter into the console for debugging
    }
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}