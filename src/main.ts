let userChoice: string;
const choices = ["rock", "paper", "scissors"];
const scoreUserShow = document.getElementById(
  "scoreUser"
) as HTMLHeadingElement;
const scoreCompShow = document.getElementById(
  "scoreComp"
) as HTMLHeadingElement;

const showUserChoice = document.getElementById(
  "userChoice"
) as HTMLHeadingElement;
const showCompChoice = document.getElementById(
  "compChoice"
) as HTMLHeadingElement;

const result = document.getElementById("result") as HTMLDivElement;

let user = 0;
let comp = 0;

function chosenRock() {
  userChoice = "rock";
  showUserChoice.textContent = `Your choice was ${userChoice}`;
  let currentGuess = losuj();
  if (currentGuess === "rock") {
    draw();
  } else if (currentGuess === "paper") {
    compWin();
  } else if (currentGuess === "scissors") {
    userWin();
  } else {
    console.log("error", losuj(), userChoice);
  }
}

function chosenPaper() {
  userChoice = "paper";
  showUserChoice.textContent = `Your choice was ${userChoice}`;
  let currentGuess = losuj();

  if (currentGuess === "paper") {
    draw();
  } else if (currentGuess === "scissors") {
    compWin();
  } else if (currentGuess === "rock") {
    userWin();
  } else {
    console.log("error");
  }
}

function chosenScissors() {
  userChoice = "scissors";
  showUserChoice.textContent = `Your choice was ${userChoice}`;
  let currentGuess = losuj();

  if (currentGuess === "scissors") {
    draw();
  } else if (currentGuess === "rock") {
    compWin();
  } else if (currentGuess === "paper") {
    userWin();
  } else {
    console.log("error");
  }
}

function losuj() {
  let idxLos = Math.floor(Math.random() * 3);
  showCompChoice.textContent = `Computer choice was ${choices[idxLos]}`;
  return choices[idxLos];
}

function draw() {
  user++;
  comp++;
  scoreUserShow.textContent = user.toString();
  scoreCompShow.textContent = comp.toString();
  result.textContent = "its a draw";
}

function compWin() {
  comp++;
  scoreCompShow.textContent = comp.toString();
  result.textContent = "computer wins";
}

function userWin() {
  user++;
  scoreUserShow.textContent = user.toString();
  result.textContent = "you win";
}

function resetScores() {
  user = 0;
  comp = 0;
  scoreUserShow.textContent = "0";
  scoreCompShow.textContent = "0";
  showUserChoice.textContent = "";
  showCompChoice.textContent = "";
  result.textContent = "";
}
