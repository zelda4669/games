const ruleset = {
    'rock': {'rock': 'tie', 'paper': 'lose', 'scissors': 'win', 'lizard': 'win', 'spock': 'lose'},
    'paper': {'rock': 'win', 'paper': 'tie',  'scissors': 'lose', 'lizard': 'lose', 'spock': 'win'},
    'scissors': {'rock': 'lose', 'paper': 'win', 'scissors': 'tie',  'lizard': 'win', 'spock': 'lose'},
    'lizard': {'rock': 'lose', 'paper': 'win', 'scissors': 'lose', 'lizard': 'tie', 'spock': 'win'},
    'spock': {'rock': 'win', 'paper': 'lose', 'scissors': 'win', 'lizard': 'lose', 'spock': 'tie'}
}

let num = 2

let round = 0
let computerScore = 0
let userScore = 0

function playRound(computerPlay, userPlay) {
    const compPlayName = {0: 'rock', 1: 'paper', 2: 'scissors', 3: 'lizard', 4: 'spock'}
    const numrounds = document.querySelector('#numrounds')
    const results = document.querySelector('#results')
    const compscore = document.querySelector('#compscore')
    const uscore = document.querySelector('#userscore')
    computerPlay = compPlayName[computerPlay]

    round++
    numrounds.textContent = `${round}`

    if(ruleset[userPlay][computerPlay] === 'win') {
        results.textContent = `You played ${userPlay} and I played ${computerPlay}. You won this round, but I'll get you next time!`
        userScore++
    } else if (ruleset[userPlay][computerPlay] === 'lose') {
        results.textContent = `You played ${userPlay} and I played ${computerPlay}. You have been defeated by my superior intellect!`
        computerScore++
    } else {
        results.textContent = `You played ${userPlay} and I played.... ${computerPlay}?!?!?! A tie! What witchcraft is this?`
    }

    compscore.textContent = `${computerScore}`
    uscore.textContent = `${userScore}`
}

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        let playerOne = Math.floor((Math.random()) * num)
        let playerTwo = button.id
        playRound(playerOne, playerTwo)
    })
})