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
let userScoreTotal = 0
let cpuScoreTotal = 0



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
   
    //resets
    function softreset() {
        userScore = 0
        cpuScore = 0
        
    }

    //score counters //added totalScore
    let userTotalScore

    if (userScore === 5) {
        console.log("User wins the round! Yay!")
        userScoreTotal = userScoreTotal + 1
        console.log("User rounds " + userScoreTotal + " " + "-" + " " + cpuScoreTotal + " " + "Cpu rounds")
        softreset()
    } else if (cpuScore === 5) {
        console.log("Oh no! The computer wins the round!")
        cpuScoreTotal = cpuScoreTotal + 1
        softreset()
    } else rockPaperScissors()

    if (userScoreTotal === 5) {
        console.log("User wins! Yay!")
        softreset()
    } else if (cpuScoreTotal === 5) {
        console.log("The computer wins the game!")
        softreset()
    } else rockPaperScissors() 
}

const console = document.querySelector('.console') //store console in variable

/*
let playAgain = function() {        //prompts the play again question inside console box
    const messageContainer = document.createElement('div')
    messageContainer.classList.add ('.playAgain')
    messageContainer.textContent = 'Play again?'
    messageContainer.addEventListener ('click', function (e) {
        rockPaperScissors()
    })
    console.appendChild(messageContainer)

}

//display current score


*/
