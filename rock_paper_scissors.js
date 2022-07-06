function computerPlay() {
    return Math.floor((Math.random()) * 2)
}

function userPlay(turn) {
    
    switch(turn) {
        case "rock":
            return 0;
            break;
        case "paper":
            return 1;
            break;
        case "scissors":
            return 2;
            break;
        default:
            return "That's not a vaild play! Refresh the page to try again."
    }
}

let round = 0
let computerScore = 0
let userScore = 0

function playRound(computerPlay, userPlay) {
    const numrounds = document.querySelector('#numrounds')
    const results = document.querySelector('#results')
    const compscore = document.querySelector('#compscore')
    const uscore = document.querySelector('#userscore')

    round++
    numrounds.textContent = `${round}`

    if (computerPlay === userPlay) {
        results.textContent = "It's a tie!"
    } else if (computerPlay === 0) {
        if (userPlay === 1) {
            results.textContent = "You win! Paper beats rock."
            userScore++
        } else {
            results.textContent = "You lose! Scissors beats paper."
            computerScore++
        }
    } else if (computerPlay === 1) {
        if (userPlay === 0) {
            results.textContent = "You lose! Paper beats rock."
            computerScore++
        } else {
            results.textContent = "You win! Rock beats scissors."
            userScore++
        }
    } else if (computerPlay === 2) {
        if (userPlay === 0) {
            results.textContent = "You win! Rock beats scissors."
            userScore++
        } else {
            results.textContent = "You lose! Scissors beats paper."
            computerScore++
        }
    }

    compscore.textContent = `${computerScore}`
    uscore.textContent = `${userScore}`
}

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        let playerOne = computerPlay()
        let playerTwo = userPlay(button.id)
        playRound(playerOne, playerTwo)
    })
})