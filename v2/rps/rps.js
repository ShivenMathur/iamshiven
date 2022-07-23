
function hoverTitle() {
    var computerEmoji = document.getElementById("computerFinal");
    var playerEmoji = document.getElementById("playerFinal");
    shiven = document.getElementById("title");
    shiven.innerText = "Made By: Shiven Mathur - www.iamshiven.tk";

    computerEmoji.innerText = "👊";
    playerEmoji.innerText = "👊";
}

function noHover() {

    shiven = document.getElementById("title");
    shiven.innerText = "RockPaperScissors";
}



function btnClicked(playerChoice) {
    

    let computerNumber = Math.floor(Math.random()*3);
    var computerChoice = "";
    var final = "";
    let title = document.getElementById("title");
    var computerEmoji = document.getElementById("computerFinal");
    var playerEmoji = document.getElementById("playerFinal");
   
    
    
    

    if (computerNumber==0){

        computerChoice = "rock";
        computerEmoji.innerText = "👊";
    }

    else if (computerNumber==1){

        computerChoice = "paper";
        computerEmoji.innerText = "✋";
    }

    else{

        computerChoice = "scissors";
        computerEmoji.innerText = "✌️";
    }


    if (playerChoice=="rock"){


        if (computerChoice=="rock"){

            final = "Tie!";
            title.innerText = final;

        }

        else if (computerChoice=="paper"){

            final = "Computer Won!";
            title.innerText = final;
           

        }

        else{

            final = "Player Won!";
            title.innerText = final;
           


        }

        playerEmoji.innerText = "👊";


    }

    else if (playerChoice=="paper"){


        if (computerChoice=="rock"){

            final = "Player Won!";
            title.innerText = final;
          
        }

        else if (computerChoice=="paper"){

            final = "Tie!";
            title.innerText = final;


        }

        else{

            final = "Computer Won!";
            title.innerText = final;
           

        }
        playerEmoji.innerText = "✋";

    }

    else if (playerChoice=="scissors"){


        if (computerChoice=="rock"){

            final = "Computer Won!";
            title.innerText = final;
            

        }

        else if (computerChoice=="paper"){

            final = "Player Won!";
            title.innerText = final;
         

        }

        else{

            final = "Tie!";
            title.innerText = final;

        }
        playerEmoji.innerText = "✌️";

    }



}



 





