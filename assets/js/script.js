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
                alert(`You clicked ${gameType}`);
            }
        })
    }
})


function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}