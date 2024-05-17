// Wait for Dom to finish loading before running the game.
// Get the button elements and add event listeners to them.

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button');

    for (button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You clicked Submit!')
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}` );
            }
        })
    }
})


function rungame() {

}

function checkAnswer() {

}

function caculateCorrectAnswer() {

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