function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random() * choices.length);

  return choices[computerChoice];
}

// Function for a single round
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  // console.log("Player: " + playerSelection);
  // console.log("Computer: " + computerSelection.toLowerCase());

  const resultDiv = document.getElementById("result");
  const scoreDiv = document.getElementById("score");

  // Display player and computer choices
  const playerResult = document.createElement("p");
  playerResult.textContent = "Player: " + playerSelection;
  resultDiv.innerHTML = ""; // clear previous result
  resultDiv.appendChild(playerResult);

  const computerResult = document.createElement("p");
  computerResult.textContent = "Computer : " + computerSelection.toLowerCase();
  resultDiv.appendChild(computerResult);

  // Determine and display the result
  if (playerSelection === computerSelection) {
    const equalityResult = document.createElement("p");
    equalityResult.textContent = "Equality";
    resultDiv.appendChild(equalityResult);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    const winResult = document.createElement("p");
    winResult.textContent = `You Win, ${playerSelection} beats ${computerSelection}`;
    resultDiv.appendChild(winResult);
    updateScore(1);
  } else {
    const loseResult = document.createElement("p");
    loseResult.textContent =
      "You lose, " + computerSelection + " beats " + playerSelection;
    resultDiv.appendChild(loseResult);
    updateScore(-1);
  }
}

//function to update the score

function updateScore(roundScore) {
  const scoreDiv = document.getElementById("score");
  const scores = scoreDiv.textContent.split(",");
  let playerScore = parseInt(scores[0].split(":")[1]);
  let computerScore = parseInt(scores[1].split(":")[1]);

  playerScore += roundScore;

  // Update the score in the DOM
  scoreDiv.textContent =
    "Player: " + playerScore + ", Computer: " + computerScore;

  // Check for the winner
  if (playerScore === 5) {
    announceWinner("Player");
  } else if (computerScore === 5) {
    announceWinner("Computer");
  } else if (playerScore === -5 || computerScore === -5) {
    return "GAME OVER";
  }
}

//Function to annouce the winner
function announceWinner(winner) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p> ${winner} wins the game! </p>`;
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

document.getElementById("paper").addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
document.getElementById("scissors").addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

// function game() {
//   var playerScore = 0;
//   var computerScore = 0;

//   // for (let i = 0; i < 5; i++) {
//   //   var playerSelection = prompt("Choose Rock, Paper, or Scissors");
//   //   var computerSelection = getComputerChoice();
//   //   var result = playRound(playerSelection, computerSelection);
//   //   console.log(result);

//   // Update score
//   if (result.includes("Win")) {
//     playerScore++;
//   } else if (result.includes("lose")) {
//     computerScore++;
//   }
//   // }

//   // The final winner
//   if (playerScore > computerScore) {
//     console.log("Player wins the game");
//   } else if (playerScore < computerScore) {
//     console.log("Computer wins the game");
//   } else {
//     console.log("It's a tie!");
//   }
// }

// game();
