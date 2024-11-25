function getComputerChoice(){
    let choice=Math.floor(Math.random() * 10)%3;
    switch(choice)
    {
        case 0:return "ROCK";break;
        case 1:return "PAPER";break;
        case 2:return "SESSIOR";break;
    }
    // console.log(choice)
}

function playRound(humanChoice, computerChoice){
    if(humanChoice===computerChoice){
        div.textContent=humanChoice+ " Draws "+ computerChoice;
    }
    else if( (humanChoice=="ROCK" && computerChoice=="PAPER") || (humanChoice=="PAPER" && computerChoice=="SESSIOR") || (humanChoice=="SESSIOR" && computerChoice=="ROCK") ){
        div.textContent=humanChoice+" loses to "+ computerChoice;
        computerScore++;
    }
    else{
        div.textContent=humanChoice+" wins against "+ computerChoice;
        humanScore++;
    }
    div2.textContent="Player: "+humanScore+" & Computer: "+computerScore;

    if(humanScore===5) {
        cleanUp();
    }
    else if(computerScore===5) {
        cleanUp();
    }

}



function cleanUp(){
    if(humanScore===round){
        div.textContent="You won!!!:  "+humanScore+" to "+computerScore;
    }
    else if(computerScore===round)
    {
        div.textContent="You lost!!!:  "+humanScore+" to "+computerScore;
    }
    div2.textContent="";
    humanScore=computerScore=0;
}


const round=5;
let humanScore=0;
let computerScore=0;
const div2=document.querySelector("#two")
const div=document.querySelector("div");
div.textContent="Initialized -> Rock-Paper-Sessior !!!";
const buttons=document.querySelectorAll("button");

buttons.forEach((button)=>{
    // console.log(button);
    button.addEventListener("click", respondClick);
});


// playGame();
// showResult();


function respondClick(e) {
    // alert(e.pressure);
    console.log(e.target.textContent);
    playRound(e.target.textContent, getComputerChoice());
}