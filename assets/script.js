const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "paper" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    return;
    ("Input not valid!");
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "scissors";
      break;
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    default:
      console.log("something's wrong");
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Game is a tie";
  }
  if (userChoice === "bomb") {
    return "You Absolute WINNER";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins";
    } else {
      return "Human wins";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins";
    } else {
      return "Human wins";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins";
    } else {
      return "Human wins";
    }
  }
};
/*
  console.log(determineWinner("paper", "rock"));
  console.log(determineWinner("paper", "scissors"));
  console.log(determineWinner("scissors", "scissors"));
  */

const playGame = () => {
  let userChoice = getUserChoice("rock");
  console.log("You're throwin': " + userChoice);
  let computerChoice = getComputerChoice();
  console.log("Machine is getting: ", computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
