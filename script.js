// Choices and result elements
const userChoiceDisplay = document.getElementById("user_choice").querySelector("span");
const computerChoiceDisplay = document.getElementById("computer_choice").querySelector("span");
const gameResultDisplay = document.getElementById("game_result").querySelector("span");

// Choices array
const choices = ["Rock", "Paper", "Scissors"];

// Add event listerners to buttons
document.querySelectorAll(".choice").forEach((button)=> {
  button.addEventListener("click", ()=> {
    const userChoice = button.id.charAt(0).toUpperCase() + button.id.slice(1)
    const computerChoice = getComputerChoice()
    const result = getResult(userChoice, computerChoice);

    userChoiceDisplay.textContent = userChoice;

    updateComputerChoiceDisplay(computerChoice)
    gameResultDisplay.textContent = result
  })
})


// Get computer choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex];
}

// Update Computer Choice Display Funtion
function updateComputerChoiceDisplay(computerChoice) {
  const iconMap = {
    Rock: "✊",
    Paper: "✋",
    Scissors: "✌",
  };

  document.getElementById("computer_choice_icon").textContent = iconMap[computerChoice];
  computerChoiceDisplay.textContent = computerChoice
}

// Determine the result
function getResult(userChoice, computerChoice) {
  if(userChoice === computerChoice) return "it's draw";
  if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "You win!";
  }else {
    return "You lose!";
  }
}