
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

console.log(getComputerChoice());
console.log(getHumanChoice());