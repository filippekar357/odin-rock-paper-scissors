let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice()
{
    return prompt("Rock, paper or scissors?");
}

function playRound(humanChoice, computerChoice)
{
    if (humanChoice === computerChoice)
    {
        console.log("It's a tie!");
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper"))
    {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    else
    {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}

function playGame()
{
    for (let i = 0; i < 5; i++)
    {
        const humanChoice = getHumanChoice().toLowerCase();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    console.log(`\n\nFinal scores:\nPlayer score: ${humanScore}\nComputer score: ${computerScore}`);
    if (humanScore > computerScore)
        console.log("You won!!!");
    else if (humanScore === computerScore)
        console.log("It's a tie.");
    else
        console.log("You lost.");
}

playGame();