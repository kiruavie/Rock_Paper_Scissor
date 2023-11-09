function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  const computerChoiced = Math.floor(Math.random() * choice.length);

  return choice[computerChoiced];
}

//fonction qui joueun seul tour
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  console.log("Player : " + playerSelection);
  console.log("Computer : " + computerSelection.toLowerCase());

  if (playerSelection === computerSelection) {
    return "Equality !";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You Win, " + playerSelection + " beats " + computerSelection;
  } else {
    return "You lose, " + computerSelection + " beats " + playerSelection;
  }
}

function game() {
  var playerScore = 0;
  var computerScore = 0;

  for (let i = 0; i < 5; i++) {
    var playerSelection = prompt("Choose any Rock, Paper, Scissors");
    var computerSelection = getComputerChoice();
    var result = playRound(playerSelection, computerSelection);
    console.log(result);
  }

  //update score
  if (result.includes("win")) {
    playerScore++;
  } else if (result.includes("lose")) {
    computerScore++;
  }

  //the final winner
  if (playerScore > computerScore) {
    console.log("Player win the game");
  } else {
    console.log("Computer winned");
  }
}

game();
