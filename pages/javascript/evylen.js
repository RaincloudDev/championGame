
var evylenHealth;


function evylenChampOne(){
    const e1Options =[0,1,2];
    const e1Choice = Math.floor(Math.random()*e1Options.length);
    const e1 = e1Options[e1Choice];
    console.log("e1move" + " " + (e1));
    
}

function evylenChampTwo(){
    const e2Options =[0, 1, 2];
    const e2 = Math.floor(Math.random()*e2Options.length);
    console.log(e2);
    return e2;
}

function evylenChampThree(){
    const e3Options =[0, 1, 2];
    const e3 = Math.floor(Math.random()*e3Options.length);
    console.log(e3);
    return e3;
}

/**fighting for Primary Champions */
function fight(){
    
 clearButtons();   
}




/*Clears buttons after being sumbitted */
/************************************* */
function clearButtons(){
    document.getElementById("champThreeScissors").style.backgroundColor = "grey";
    document.getElementById("champThreePaper").style.backgroundColor = "grey";
    document.getElementById("champThreeRock").style.backgroundColor = "grey";

    document.getElementById("champTwoScissors").style.backgroundColor = "grey";
    document.getElementById("champTwoRock").style.backgroundColor = "grey";
    document.getElementById("champTwoPaper").style.backgroundColor = "grey";
    
    document.getElementById("champOneScissors").style.backgroundColor = "grey";
    document.getElementById("champOneRock").style.backgroundColor = "grey";
    document.getElementById("champOnePaper").style.backgroundColor = "grey";

}