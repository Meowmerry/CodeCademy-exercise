const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput
    } else {
        console.log('Error! your input is invalid')
    }

};
console.log(getUserChoice('Paper')); // should print 'paper'
console.log(getUserChoice('fork')); // should print 'Error!' and `undefined`

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock'
    }
    else if (randomNumber === 0) {
        return 'paper'
    }
    else if (randomNumber === 0) {
        return 'scissors'
    } else {
        console.log('Error')
    }
}