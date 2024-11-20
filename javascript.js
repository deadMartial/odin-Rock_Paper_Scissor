function getComputerChoice(){
    let choice=Math.floor(Math.random() * 10)%3;
    switch(choice)
    {
        case 0:return "Rock";break;
        case 1:return "Paper";break;
        case 2:return "Sessior";break;
    }
    // console.log(choice)
}

function getHumanChoice(){
    let ans= prompt("Enter Your Choice: (Rock or Paper of Sessior)");
    if(ans!="Rock"&&ans!="Paper"&&ans!="Sessior")
        return -1;
    return ans;
}

let humanScore=0;
let computerScore=0;

