let mode = "ai";

let playerScore = 0;
let aiScore = 0;

let playerHistory = [];

function setMode(selectedMode) {
    mode = selectedMode;

    if (mode === "ai") {
        document.getElementById("opponentText").innerHTML = "AI: <span id='aiScore'>0</span>";
    } else {
        document.getElementById("opponentText").innerHTML = "Player 2: <span id='aiScore'>0</span>";
    }

    playerScore = 0;
    aiScore = 0;

    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("aiScore").innerText = aiScore;
}

function play(playerChoice) {

    let opponentChoice;

    if (mode === "ai") {
        opponentChoice = smartAI(playerChoice);
    } else {
        opponentChoice = prompt("Player 2: rock, paper, or scissors?");
    }

    let result = getResult(playerChoice, opponentChoice);

    document.getElementById("result").innerText =
        "You chose " + playerChoice + " | Opponent chose " + opponentChoice + " → " + result;

    if (result === "You Win!") {
        playerScore++;
    } else if (result === "You Lose!") {
        aiScore++;
    }

    document.getElementById("playerScore").innerText = playerScore;
    document.getElementById("aiScore").innerText = aiScore;

    playerHistory.push(playerChoice);
}

function smartAI(playerChoice) {

    if (playerHistory.length < 3) {
        return randomChoice();
    }

    let lastMove = playerHistory[playerHistory.length - 1];

    if (lastMove === "rock") return "paper";
    if (lastMove === "paper") return "scissors";
    if (lastMove === "scissors") return "rock";
}

function randomChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getResult(player, opponent) {

    if (player === opponent) return "Draw";

    if (
        (player === "rock" && opponent === "scissors") ||
        (player === "paper" && opponent === "rock") ||
        (player === "scissors" && opponent === "paper")
    ) {
        return "You Win!";
    }

    return "You Lose!";
}