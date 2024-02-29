let userChoice:string;
const choices = ["rock", "paper", "scissors"];
const scoreUserShow = document.getElementById("scoreUser") as HTMLHeadingElement;
const scoreCompShow = document.getElementById("scoreComp") as HTMLHeadingElement;

const showUserChoice = document.getElementById("userChoice") as HTMLHeadingElement;
const showCompChoice = document.getElementById("compChoice") as HTMLHeadingElement;

let user = 0;
let comp = 0;

function chosenRock(){
  userChoice = "rock";
  showUserChoice.textContent = `Your choice was ${userChoice}`;
  if (losuj() === "rock"){
    userWin();
  }else{
    compWin();
  }
}

function chosenPaper(){
  userChoice = "paper";
  showUserChoice.textContent = `Your choice was ${userChoice}`;
  if (losuj() === "paper"){
    userWin();
  }else{
    compWin();
  }}

function chosenScissors(){
  userChoice = "scissors";
  showUserChoice.textContent = `Your choice was ${userChoice}`;
  if (losuj() === "scissors"){
    userWin();
  }else{
    compWin();
  }}

function losuj(){
  let idxLos = Math.floor(Math.random() * 3);
  showCompChoice.textContent = `Computer choice was ${choices[idxLos]}`;
  return choices[idxLos];  
}

function userWin(){
  user++;
  scoreUserShow.textContent = user.toString();
}

function compWin(){
  comp++;
  scoreCompShow.textContent = comp.toString();
}

function resetScores(){
  user = 0;
  comp = 0;
  scoreUserShow.textContent = "0";
  scoreCompShow.textContent = "0";
}

//zamienic userwin na draw xddd i wgl to gowno naprawic