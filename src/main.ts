let userChoice: string;

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

enum Choices {
  ROCK = "rock",
  PAPER = "paper",
  SCISSORS = "scissors",
}

let user = 0;
let comp = 0;

function chosenRock() {
  userChoice = "rock";
  showUserChoice.textContent = `Your choice was ${userChoice}`;
  let currentGuess = losuj();
  if (currentGuess === Choices.ROCK) {
    draw();
  } else if (currentGuess === Choices.PAPER) {
    compWin();
  } else if (currentGuess === Choices.SCISSORS) {
    userWin();
  } else {
    console.log("error");
  }
}

function chosenPaper() {
  userChoice = "paper";
  showUserChoice.textContent = `Your choice was ${userChoice}`;
  let currentGuess = losuj();

  if (currentGuess === Choices.PAPER) {
    draw();
  } else if (currentGuess === Choices.SCISSORS) {
    compWin();
  } else if (currentGuess === Choices.ROCK) {
    userWin();
  } else {
    console.log("error");
  }
}

function chosenScissors() {
  userChoice = "scissors";
  showUserChoice.textContent = `Your choice was ${userChoice}`;
  let currentGuess = losuj();

  if (currentGuess === Choices.SCISSORS) {
    draw();
  } else if (currentGuess === Choices.ROCK) {
    compWin();
  } else if (currentGuess === Choices.PAPER) {
    userWin();
  } else {
    console.log("error");
  }
}

function losuj() {
  let idxLos = Math.floor(Math.random() * 3);
  showCompChoice.textContent = `Computer choice was ${
    Object.values(Choices)[idxLos]
  }`;
  return Object.values(Choices)[idxLos] as Choices;
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
