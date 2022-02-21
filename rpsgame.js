let computerSelection = '';

function computerPlay(){
    const choices = ["rock", "paper", "scissors"]
    //math.floor rounds down math.random gets random number .length gives amount of choices for the random function to go up to
    const random_num = Math.floor(Math.random()*choices.length);
    computerSelection = choices[random_num];
    console.log(`computer pick is ${computerSelection}`);
}


//getting player's selection that will work regardless of caps and whitespaces and makes sure selection is a viable choice

let keep_going = "yes"
let playerSelection = "";


let player_wins = 0;
let player_losses = 0;
let player_ties = 0;



function rpsGame(playerSelection, computerSelection){
    //console.log(playerSelection);
    //console.log(computerSelection);
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "scissors"){
                player_wins++;
                return(`player wins! ${player_wins} wins and ${player_losses} losses and ${player_ties} ties`);
              
            }
            else if (computerSelection == "paper"){
                player_losses++;
            return(`player loses! ${player_wins} wins and ${player_losses} losses and ${player_ties} ties`);
            

            }
            else {
                player_ties++;
            return(`player ties! ${player_wins} wins and ${player_losses} losses and ${player_ties} ties`);
           

            }
        
        
        case "scissors":
            if (computerSelection == "paper"){
                player_wins++;
                return(`player wins! ${player_wins} wins and ${player_losses} losses and ${player_ties} ties`);
            }
            else if (computerSelection == "rock"){
                player_losses++;
            return(`player loses! ${player_wins} wins and ${player_losses} losses and ${player_ties} ties`);
            

            }
            else {
                player_ties++;
            return(`player ties! ${player_wins} wins and ${player_losses} losses and ${player_ties} ties`);
            

            }
        case "paper":
            if (computerSelection == "rock"){
                player_wins++;
               // console.log(`player wins! ${player_wins} wins and ${player_losses} losses and ${player_ties} ties`);
               return(`player ties! ${player_wins} wins and ${player_losses} losses and ${player_ties} ties`);
                
            }
            else if (computerSelection == "scissors"){
                player_losses++;
            //console.log(`player loses! ${player_wins} wins and ${player_losses} losses and ${player_ties} ties`);
            return(`player loses! ${player_wins} wins and ${player_losses} losses and ${player_ties} ties`);

            }
            else {
                player_ties++;
            //console.log(`player ties! ${player_wins} wins and ${player_losses} losses and ${player_ties} ties`);
            return(`player ties! ${player_wins} wins and ${player_losses} losses and ${player_ties} ties`);

            }
            
    }  

}

keepPlaying = "yes";

//unlimited game play

//while (keepPlaying != "no"){
    //player_pick();
    //computerPlay();
    //have to pass in arguments to rpsGame
    //console.log(rpsGame(playerSelection, computerSelection));
    //keepPlaying = prompt("Keep Playing Yes or No?");
    //keepPlaying = keepPlaying.toLowerCase().trim();
    //if (keepPlaying == "no"){
   //     console.log(`Thanks for playing FINAL RECORD ${player_wins} wins and ${player_losses} losses and ${player_ties} ties`);
    //}
    //else{
        //must change keep_going variable so player_pick while loop will start again in its function
       // keep_going = "yes";

    //}


//}

//5 Rounds of Game Play
//for (let gameRounds = 0; gameRounds<5; gameRounds++){
    //player_pick();
    //computerPlay();
    //have to pass in arguments to rpsGame
    //console.log(rpsGame(playerSelection, computerSelection));


//}
//console.log(`Thanks for playing FINAL RECORD ${player_wins} wins and ${player_losses} losses and ${player_ties} ties`);

let player_titles = 0;
let computer_titles = 0;

function grand_champ(){
    if (player_wins == 5){
        document.getElementById("best5").textContent = "You've won 5 games, you are the CHAMPION!";
        player_wins = 0;
        player_losses = 0;
        player_ties = 0;
        player_titles++;
        document.getElementById("titles").textContent = `PLAYER TITLES ${player_titles} COMPUTER TITLES ${computer_titles}`;
        
    }
    else if (player_losses == 5){
        document.getElementById("best5").textContent = "You have lost to the machine :("
        player_wins = 0;
        player_losses = 0;
        player_ties = 0;
        computer_titles++;
        document.getElementById("titles").textContent = `PLAYER TITLES ${player_titles} COMPUTER TITLES ${computer_titles}`;
    }
    else{}
};



rock.addEventListener('click', function(){
document.getElementById("best5").textContent = "FIRST TO 5 WINS!";
 playerSelection = "rock";
 computerPlay();
 //console.log(rpsGame(playerSelection, computerSelection));
 document.getElementById("ppick").textContent = "Player Pick is rock!";
 document.getElementById("mpick").textContent = `Machine Pick is ${computerSelection}`;
 document.getElementById("record").textContent = `${rpsGame(playerSelection, computerSelection)}`;
 grand_champ();
  });

paper.addEventListener('click', function(){
    document.getElementById("best5").textContent = "FIRST TO 5 WINS!";
    playerSelection = "paper";
    computerPlay();
    //console.log(rpsGame(playerSelection, computerSelection));
    document.getElementById("ppick").textContent = "Player Pick is paper!";
    document.getElementById("mpick").textContent = `Machine Pick is ${computerSelection}`;
    document.getElementById("record").textContent = `${rpsGame(playerSelection, computerSelection)}`;
    grand_champ();
     });

scissors.addEventListener('click', function(){
    document.getElementById("best5").textContent = "FIRST TO 5 WINS!";
    playerSelection = "scissors";
    computerPlay();
    //console.log(rpsGame(playerSelection, computerSelection));
    document.getElementById("ppick").textContent = "Player Pick is scissors!";
    document.getElementById("mpick").textContent = `Machine Pick is ${computerSelection}!`;
    document.getElementById("record").textContent = `${rpsGame(playerSelection, computerSelection)}`;
    grand_champ();
     });



