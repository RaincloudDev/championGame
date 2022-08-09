var playerScore = 0;
var evylenScore = 0;
var playerHealth = 100;
var choice = 0;
var c1 = 0;
var c2 = 0;
var c3 = 0;


function startup(){

let message = 'what is your name?'
let playerName = prompt(message);
let playerNameElement = document.getElementById("playerName");
playerNameElement.innerHTML= playerName;
console.log(playerName);

}

function c1Rock(){
    c1 = 0;   
   document.getElementById("champOneRock").style.backgroundColor = "blue";
   document.getElementById("champOnePaper").style.backgroundColor = "grey";
   document.getElementById("champOneScissors").style.backgroundColor = "grey";
   document.getElementById("c1Monitor").innerHTML=(c1);
   console.log(c1);
   
   return(c1);
}
function c2Rock(){
    c2 = 0;   
    document.getElementById("champTwoRock").style.backgroundColor = "blue";
    document.getElementById("champTwoPaper").style.backgroundColor = "grey";
    document.getElementById("champTwoScissors").style.backgroundColor = "grey";

}
function c3Rock(){
    c3 = 0;   
    document.getElementById("champThreeRock").style.backgroundColor = "blue";
    document.getElementById("champThreePaper").style.backgroundColor = "grey";
    document.getElementById("champThreeScissors").style.backgroundColor = "grey";

}
function c1Paper(){
    c1 = 1;   
    document.getElementById("champOnePaper").style.backgroundColor = "blue";
    document.getElementById("champOneRock").style.backgroundColor = "grey";
    document.getElementById("champOneScissors").style.backgroundColor = "grey";
    document.getElementById("c1Monitor").innerHTML=(c1);
    console.log(c1);
    return(c1);
}

function c2Paper(){
    c2 = 1;   
    document.getElementById("champTwoPaper").style.backgroundColor = "blue";
    document.getElementById("champTwoRock").style.backgroundColor = "grey";
    document.getElementById("champTwoScissors").style.backgroundColor = "grey";
}
function c3Paper(){
    c3 = 1;   
    document.getElementById("champThreePaper").style.backgroundColor = "blue";
    document.getElementById("champThreeRock").style.backgroundColor = "grey";
    document.getElementById("champThreeScissors").style.backgroundColor = "grey";
}

function c1Scissors(){
    c1 = 2;   
    document.getElementById("champOneScissors").style.backgroundColor = "blue";
    document.getElementById("champOneRock").style.backgroundColor = "grey";
   document.getElementById("champOnePaper").style.backgroundColor = "grey";
   document.getElementById("c1Monitor").innerHTML=(c1); 
   console.log(c1);
   return(c1);
}
function c2Scissors(){
    c2 = 2;   
    document.getElementById("champTwoScissors").style.backgroundColor = "blue";
    document.getElementById("champTwoRock").style.backgroundColor = "grey";
    document.getElementById("champTwoPaper").style.backgroundColor = "grey";
    
}
function c3Scissors(){
    c3 = 2;   
    document.getElementById("champThreeScissors").style.backgroundColor = "blue";
    document.getElementById("champThreePaper").style.backgroundColor = "grey";
    document.getElementById("champThreeRock").style.backgroundColor = "grey";
    
}



