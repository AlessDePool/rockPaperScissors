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
    let indicator = Math.floor(Math.random() * 3)
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

//Game starter and winner indicator
let userScore = 0
let cpuScore = 0

function rockPaperScissors() {

    let result = (playerInput() + computerPlay())
    let winner
    if(result === "ad") {
        winner = "tie"
        console.log("Rock and rock, it's a tie!")
    }else if(result === "ae") {
        winner = "cpu"
        console.log("Rock loses to paper, you lose!")
        cpuScore = cpuScore + 1
    }else if(result === "af") {
        winner = "user"
        console.log("Rock beats scissors, you win!")
        userScore = userScore + 1
    }else if(result === "bd") {
        winner = "user"
        console.log("Paper beats rock, you win!")
        userScore = userScore + 1
    }else if(result === "be") {
        winner = "tie"
        console.log("Paper and paper, it's a tie!")
    }else if(result === "bf") {
        winner = "cpu"
        console.log("Paper loses to scissor, you lose!")
        cpuScore = cpuScore + 1
    }else if (result === "cd") {
        winner = "cpu"
        console.log("Scissors loses to rock, you lose!")
        cpuScore = cpuScore + 1
    }else if(result === "ce") {
        winner = "user"
        console.log("Scissor wins over paper, you win!")
        userScore = userScore  + 1
    }else if(result = "cf") {
        winner = "tie"
        console.log("Scissor and Scissor, you win!")
    }
    console.log("userScore " + userScore + " " + "-" + " " + cpuScore + " " + "cpuScore")
   

    //Reset function

    function reset() {
        userScore = 0
        cpuScore = 0
        
    }

    //Telling the machine to stop when you reach the highest score and resetting
    if (userScore === 5) {
        console.log("User wins! Yay!")
        reset()
    } else if (cpuScore === 5) {
        console.log("Oh no! The computer wins!")
        reset()
    } else rockPaperScissors()
}


    


