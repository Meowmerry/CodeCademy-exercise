const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if( userInput === 'rock' || userInput ==='paper' || userInput ===' scissors' || userInput === 'bomb') {
    return userInput;
  }else {
    console.log('Error, please type : rock, paper or scissors')
  }
}
// console.log(getUserChoice('Paper'))

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2: 
      return 'scissors'
  }
}
// console.log(getComputerChoice()); 

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
  return 'This game is a tie!';
  }
  if(userChoice === 'rock') {
    if(computerChoice === 'paper'){
    return 'Sorry! The computer won! ';
  } else {
    return 'Congratulation you won!';
  }
} 

  if(userChoice === 'paper') {
    if(computerChoice === 'scissors'){
    return 'Sorry! The computer won! ';
  } else {
    return 'Congratulation you won!';
  }
} 
  if(userChoice === 'scissors') {
    if(computerChoice === 'rock'){
    return 'Sorry! The computer won! ';
  } else {
    return 'Congratulation you won!';
  }
} 
  if(userChoice === 'bomb') {
		return 'Contratulation you won!'
	}
}

// console.log(determineWinner('paper', 'rock'))

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log( `You threw  ${userChoice}`)
  console.log(`Computer threw  ${computerChoice}`)
  
  console.log(determineWinner(userChoice, computerChoice))
}

playGame();


// const getUserChoice = userInput => {
//     userInput = userInput.toLowerCase();
//     if(userInput === "rock" || userInput == "paper" || userInput === "scissors" || userInput === "boml"){
//       return userInput
//     } else {
//       console.log('Please input rock, paper, scissors or bomb')
//     }
// }