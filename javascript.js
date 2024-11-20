function getComputerChoice(){
    let choice=Math.floor(Math.random() * 10)%3;
    switch(choice)
    {
        case 0:return "rock";break;
        case 1:return "paper";break;
        case 2:return "sessior";break;
    }
    // console.log(choice)
}

function getHumanChoice(){
    let ans= prompt("Enter Your Choice: (Rock or Paper of Sessior)");console.log(ans);
    ans=ans.toLowerCase();console.log(ans);
    if(ans!="rock"&&ans!="paper"&&ans!="sessior")
        // console.log(ans);
        return -1;
    return ans;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice==-1){
        console.log("Invalid Input. Automatic Defeat for this round");
        computerScore++;
    }
    else if(humanChoice===computerChoice){
        console.log(humanChoice, " Draws ", computerChoice);
    }
    else if( (humanChoice=="rock" && computerChoice=="paper") || (humanChoice=="paper" && computerChoice=="sessior") || (humanChoice=="sessior" && computerChoice=="rock") ){
        console.log(humanChoice," loses to ", computerChoice);
        computerScore++;
    }
    else{
        console.log(humanChoice," wins against ", computerChoice);
        humanScore++;
    }
    

}

function playGame(){
    let round=parseInt(prompt("How many round will you like to play?"));
    for(let i=0;i< round;i++){
        console.log("Round", i+1);
        playRound(getHumanChoice(), getComputerChoice())
    }
}

function showResult(){
    if(humanScore>computerScore){
        console.log("You won!!!:  ",humanScore," to ",computerScore);
    }
    else if(humanScore<computerScore)
    {
        console.log("You lost!!!:  ",humanScore," to ",computerScore);
    }
    else{
        console.log("It's a draw: ",humanScore," to ",computerScore);
    }
}

let humanScore=0;
let computerScore=0;
console.log("Initializing -> Rock-Paper-Sessior !!!");

playGame();
showResult();