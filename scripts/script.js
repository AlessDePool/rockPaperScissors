 //Function where player inputs the option
 function playerInput() {
     let userInput = prompt('Rock, paper, scissors')
     userInput = userInput.toLowerCase()
     let userPlay
     if(userInput === "rock") {
         userPlay = "a"
     }else if(userInput === "paper") {
         userPlay = "b"
     }else if(userInput === "scissors") {
         userPlay = "c"
     } 
     return userPlay
 }

 //Function where computer generates option
 let computerPlay = function(){
    let indicator = Math.floor(Math.random() * 3); //
    let play
    if(indicator === 0) {
    play = "d" // "d" = rock 
    } else if(indicator === 1) {
    play = 'e' // "e" = paper
    } else if (indicator === 2) {
    play = 'f' // "f" = scissors
    } 
    return play
 }

//Function that compares both outputs and indicates a winner
let userPoints = 0
let cpuPoints = 0
function rockPaperScissors() {
    let result = (playerInput() + computerPlay())
    let winner
    if(result === "ad") {
        winner = "tie"
    }else if(result === "ae") {
        winner = "cpu"
    }else if(result === "af") {
        winner = "user"
    }else if(result === "bd") {
        winner = "user"
    }else if(result === "be") {
        winner = "tie"
    }else if(result === "bf") {
        winner = "cpu"
    }else if (result === "cd") {
        winner = "cpu"
    }else if(result === "ce") {
        winner = "user"
    }else if(result = "cf") {
        winner = "tie"
    }

    if(winner === "tie"){
        console.log("It's a tie!")
    } else if(winner === "user") {
        console.log('You win')
        userPoints = ++userPoints
    } else if(winner === "cpu") {
        console.log('Oh no. You lose!')
    }
}
