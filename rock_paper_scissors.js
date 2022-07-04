function computerPlay() {
    return Math.floor((Math.random()) * 2)
}

function userPlay() {
    let turn = window.prompt("Let's play! Pick rock, paper, or scissors!").toLowerCase()
    
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

function playRound(computerPlay, userPlay) {
    if (computerPlay === userPlay) {
        console.log("It's a tie!")
        return [0, 0]
    } else if (computerPlay === 0) {
        if (userPlay === 1) {
            console.log("You win! Paper beats rock.")
            return [0, 1]
        } else {
            console.log("You lose! Scissors beats paper.")
            return [1, 0]
        }
    } else if (computerPlay === 1) {
        if (userPlay === 0) {
            console.log("You lose! Paper beats rock.")
            return [1, 0]
        } else {
            console.log("You win! Rock beats scissors.")
            return [0, 1]
        }
    } else if (computerPlay === 2) {
        if (userPlay === 0) {
            console.log("You win! Rock beats scissors.")
            return [0, 1]
        } else {
            console.log("You lose! Scissors beats paper.")
            return [1, 0]
        }
    }
}

function game() {
    let score = [0,0]

    for (let i = 0; i < 5; i++) {
        let playerOne = computerPlay()
        let playerTwo = userPlay()

        let round = playRound(playerOne, playerTwo)

        score = score.map(function(num, idx) {
            return num + round[idx]
        })

        console.log(`Computer score: ${score[0]}`)
        console.log(`Player score: ${score[1]}`)
     }  
    
    if (score[0] > score[1]) {
        console.log("Sorry, you lost to the computer.")
    } else if (score[0] < score [1]) {
        console.log("You won! Congratulations!")
    } else {
        console.log("It's a tie!")
    }
}

game()