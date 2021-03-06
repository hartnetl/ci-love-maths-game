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
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer(); 
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

    runGame("addition");
})

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    // Empties the box for each game
    document.getElementById("answer-box").value=" ";

    // Brings the cursor into the answer box automatically
    document.getElementById("answer-box").focus();

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1
    let num2 = Math.floor(Math.random() * 25) + 1

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
        // throw will stop the game from running and send the error message we enter into the console for debugging
    }
}

/**
 * Checks the answer against the first element in the 
 * returned calculateCorrectAnswer array
 */

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);     // We use .value here because it is a user input value
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D ");
        incrementScore();
    } else {
        alert(`awww..... You answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);    // This will restart the gametype returned, which is of the same type
}

/**
 * Get the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */

function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText); // Gets value from DOM and changes them to an integer
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {                               // If the operator is a plus sign
        return [operand1 + operand2, "addition"];        // It will return the sum of operand 1 and 2, and the game type (addition)
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "/") {
        return [operand1 / operand2, "division"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`
    }
}

/**
 * Get the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * Get the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1: operand2;
    // This is a shortened if statement (ternary operator). It says if (operand 1 > operand2) is true,
    // return operand 1, or else return operand 2
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2: operand1;
    document.getElementById('operator').textContent = "-";

}

function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";

}

function displayDivisionQuestion(operand1, operand2) {

    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operand1').textContent = operand1 * operand2;
    
    document.getElementById('operator').textContent = "/";
}