let humanScore = 0;
let computerScore = 0;
const resultDiv = document.querySelector(".results");
const resultMsg = document.createElement("p");
const humanResult = document.createElement("p");
const computerResult = document.createElement("p");
const winner = document.createElement("p");

function getComputerChoice()
{
    let rand = Math.floor(Math.random() * 3);
    if (rand === 0)
        return "rock";
    else if (rand === 1)
        return "paper";
    else
        return "scissors";
}

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === computerChoice)
    {
        resultMsg.textContent = "It's a tie!";
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper"))
    {
        resultMsg.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    }
    else
    {
        resultMsg.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }
}

function trackScore()
{
    if (humanScore <= 1 && computerScore <= 1) {
        if (resultDiv.contains(winner)) {
            resultDiv.removeChild(winner);
        }
    }
    resultDiv.appendChild(resultMsg);
    humanResult.textContent = `Human score: ${humanScore}`;
    resultDiv.appendChild(humanResult);
    computerResult.textContent = `Computer score: ${computerScore}`;
    resultDiv.appendChild(computerResult);
    if (humanScore === 5) {
        winner.textContent = "Human wins!!!";
    }
    if (computerScore === 5) {
        winner.textContent = "Computer wins.";
    }

    if (humanScore === 5 || computerScore === 5) {
        humanScore = 0;
        computerScore = 0;
        resultDiv.removeChild(resultMsg);
        resultDiv.removeChild(humanResult);
        resultDiv.removeChild(computerResult);
        resultDiv.appendChild(winner);
    }
}

const choices = document.querySelectorAll("button");

choices.forEach(choice => {
    choice.addEventListener("click", (e) => {
        playRound(e.target.textContent.toLowerCase(), getComputerChoice());
        trackScore();
    })
});

