const scoreNumber = document.querySelector('.scoreNumber')

let userScore = 0
let cpuScore = 0

let userRound = 0 //totalScoreNumber variabes
let cpuRound = 0

let userPlay
let cpuPlay

 //scissor user
 const userS = document.querySelector('.userScissors')
 const userSB = document.querySelector('.scissorsButtonU')

 //rock user
 const userR = document.querySelector('.userRock')
 const userRB = document.querySelector('.rockButtonU')

 //paper user

 const userP = document.querySelector('.userPaper')
 const userPB = document.querySelector('.paperButtonU')

 // scissors cpu
 const cpuSB = document.querySelector('.scissorsButtonC')
 const cpuPB = document.querySelector('.paperButtonC')
 const cpuRB = document.querySelector('.rockButtonC')

 scoreNumber.textContent = userScore + ' ' + '-' + ' ' + cpuScore

 //consoleMessage message variables
const consoleMessage = document.querySelector('.consoleMessage') //<p> element stored in variable
const console = document.querySelector('.console')

let welcome = 'Welcome to Rock, Paper & Scissors! First to reach 5 round wins is declared the winner. Good luck!'
let stage2 = 'Click the option you wish to play and see if you got any luck!'

consoleMessage.textContent = welcome //default console message
console.classList.add ('stage1')

let z0 = 'Yes! you got this'
let z1 = "That's how its played!"
let z2 = 'You win! keep it up!'

let x0 = 'Oh no! The evil robot wins this one!'
let x1 = "Uh oh! didn't see this one coming!"
let x2 = "I guess somedays you just have to accept your L's"

let v0 = 'Oh! A tie!'
let v1 = 'That was close, be careful! Tie!'
let v2 = "It's a tie! nervous, huh?"

let userWinMessage = function() {
    let messageIndicator = Math.floor(Math.random() * 3)
    let message = 'z' + messageIndicator
    if (message === 'z0'){
        consoleMessage.textContent = z0
    } else if (message === 'z1') {
        consoleMessage.textContent = z1
    } else if (message === 'z2') {
        consoleMessage.textContent = z2
    }
}

let cpuWinMessage = function() {
    let messageIndicator = Math.floor(Math.random() * 3)
    let message = 'x' + messageIndicator
    if (message === 'x0'){
        consoleMessage.textContent = x0
    } else if (message === 'x1') {
        consoleMessage.textContent = x1
    } else if (message === 'x2') {
        consoleMessage.textContent = x2
    }
}

let tieMessage = function() {
    let messageIndicator = Math.floor(Math.random() * 3)
    let message = 'v' + messageIndicator
    if (message === 'v0'){
        consoleMessage.textContent = v0
    } else if (message === 'v1') {
        consoleMessage.textContent = v1
    } else if (message === 'v2') {
        consoleMessage.textContent = v2
    }
}

    //remove cpu clicked class
    let removeClassSC = function() {
        cpuSB.classList.remove('clicked')
     }
    
     let removeClassRC = function() {
        cpuRB.classList.remove('clicked')
     }
    
     let removeClassPC = function() {
        cpuPB.classList.remove('clicked')
     }
    

    //get computer play
 let computerPlay = function(){
    let indicator = Math.floor(Math.random() * 3)
    let play
    if(indicator === 0) {
    play = "cRock" // "d" = rock 
    cpuRB.classList.add('clicked')
    setTimeout(removeClassRC, 2000)
    } else if(indicator === 1) {
    play = 'cPaper' // "e" = paper
    cpuPB.classList.add('clicked')
    setTimeout(removeClassPC, 2000)
    } else if (indicator === 2) {
    play = 'cScissors' // "f" = scissors
    cpuSB.classList.add('clicked')
    setTimeout(removeClassSC, 2000)
    } 
    return play
 }

 let removeClassS = function() {
    userSB.classList.remove('clicked')
 }

 let removeClassR = function() {
    userRB.classList.remove('clicked')
 }

 let removeClassP = function() {
    userPB.classList.remove('clicked')
 }

 let score //variable of currentScore

 const totalScoreNumber = document.querySelector('.totalScoreNumber') //totalScoreNumber variable
 let totalScore //display

 totalScore = userRound + " " + "-" + " " + cpuRound
     totalScoreNumber.textContent = totalScore

 //totalScoreNumber display functions
 let userWinRound = function() {
     ++userRound
     totalScore = userRound + " " + "-" + " " + cpuRound
     totalScoreNumber.textContent = totalScore
     consoleMessage.textContent = 'You win this round! Keep it up!'
 }

 let cpuWinRound = function() {
     ++cpuRound
     totalScore = userRound + " " + "-" + " " + cpuRound
     totalScoreNumber.textContent = totalScore
     consoleMessage.textContent = 'The robot wins this round! Try harder!'
 }

 let softReset = function () {
     userScore = 0
     cpuScore = 0
     score = userScore + " " + "-" + " " + cpuScore
     scoreNumber.textContent = score
 }

 let hardReset = function() {
    console.classList.add('stage1')
     userScore = 0
     cpuScore = 0
     userRound = 0
     cpuRound = 0
     userRound = 0
    totalScoreNumber.textContent = userRound + " " + "-" + " " + cpuRound

    let PlayAgain = document.createElement('div')
 PlayAgain.classList.add('startButton')
 PlayAgain.textContent = 'Play Again'
 console.appendChild(PlayAgain)
 PlayAgain.addEventListener('click', function(e){
    userS.addEventListener('click', scissor)

    userP.addEventListener('click', paper)

     userR.addEventListener('click', rock)
     console.removeChild(PlayAgain)
    rockPaperScissors()
})
 userS.removeEventListener('click', scissor)

userP.removeEventListener('click', paper)

userR.removeEventListener('click', rock)
 }

 let test = function() {
    if (userScore === 3) {
        userWinRound()
        softReset()
    } else if (cpuScore === 3) {
        cpuWinRound()
        softReset()
    }
   }

   let test2 = function(){
       if (userRound === 3) {
        consoleMessage.textContent = 'Congrats! you beat the evil robot trying to take over the world!'
           hardReset()
       } else if (cpuRound === 3) {
        consoleMessage.textContent = 'Oh no! The evil robot will take over the world now! Try again to stop him!'
           hardReset()
       }
   }

let scissor = function(){
    userPlay = 'scissors'
         userSB.classList.add('clicked')
         setTimeout(removeClassS, 2000)
         let cpuPlay = computerPlay()
         if (cpuPlay === 'cScissors') {
             tieMessage()
         } else if (cpuPlay === 'cRock') {
             cpuWinMessage()
             ++cpuScore
         } else if (cpuPlay === 'cPaper'){
             userWinMessage()
             ++userScore
         }
         score = userScore + " " + "-" + " " + cpuScore
         test()
         test2()
         scoreNumber.textContent = score
}

let paper = function() {
    userPlay = 'paper'
         userPB.classList.add('clicked')
         setTimeout(removeClassP, 2000)
         let cpuPlay = computerPlay()
         if (cpuPlay === 'cScissors') {
             cpuWinMessage()
             ++cpuScore
         } else if (cpuPlay === 'cRock') {
             userWinMessage()
             ++userScore
         } else if (cpuPlay === 'cPaper'){
             tieMessage()
         }
         score = userScore + " " + "-" + " " + cpuScore
         test()
         test2()
         scoreNumber.textContent = score
}

let rock = function(){
    userPlay = 'rock'
    userRB.classList.add('clicked')
    setTimeout(removeClassR, 2000)
    let cpuPlay = computerPlay()
    if (cpuPlay === 'cScissors') {
        userWinMessage()
        ++userScore
    } else if (cpuPlay === 'cRock') {
        tieMessage()
    } else if (cpuPlay === 'cPaper'){
        cpuWinMessage()
        ++cpuScore
    }
    score = userScore + " " + "-" + " " + cpuScore
    test()
    test2()
    scoreNumber.textContent = score
}
 //game start
 let rockPaperScissors = function() {
   totalScoreNumber.textContent = userRound + " " + "-" + " " + cpuRound
     consoleMessage.textContent = stage2
     console.removeChild(startButton)
     console.classList.remove('stage1')
     userS.addEventListener('click', scissor)

     userP.addEventListener('click', paper)

      userR.addEventListener('click', rock)
 }

 let startButton = document.createElement('div')
 startButton.classList.add('startButton')
 startButton.textContent = 'Start Game'
 console.appendChild(startButton)
 startButton.addEventListener('click', function(e){
    rockPaperScissors()
})

let button = function() {
    let startButton = document.createElement('div')
 startButton.classList.add('startButton')
 startButton.textContent = 'Start Game'
 console.appendChild(startButton)
 startButton.addEventListener('click', function(e){
    rockPaperScissors()
})
}
