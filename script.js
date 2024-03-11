let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector(".msg")

const userScorePara = document.querySelector("#yourScore")
const computerScorePara = document.querySelector("#compScore")
const reset = document.querySelector("#reset-btn")

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * 3)
    return options[randomIndex]
}

const drawGame = (userChoice) => {
    console.log("Game was a draw")
    msg.innerText = `Game Drawn! You both chose: ${userChoice}`
    msg.style.backgroundColor = "#ffe11d"
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        ++userScore
        userScorePara.innerText = userScore
        console.log("You Win!")
        msg.innerText = `You Win!! Your ${userChoice} beats ${computerChoice}`
        msg.style.backgroundColor = "#00d130"
    }
    else {
        ++compScore
        computerScorePara.innerText = compScore
        console.log("You Loose!")
        msg.innerText = `You Loose!! ${computerChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "#ff1f1f"
    }
}

const playGame = (userChoice) => {
    console.log("User's choice was", userChoice)

    // Generate Computer Choice
    const computerChoice = generateComputerChoice()
    console.log("Computer's choice was", computerChoice)

    if (userChoice === computerChoice) {
        // Game Drawn
        drawGame(userChoice)
    }
    else {
        let userWin = true
        if (userChoice === "rock") {
            // Computer's Choice: paper, scissors
            userWin = computerChoice === "scissors" ? true : false
        }
        else if (userChoice === "paper") {
            // Computer's Choice: rock, scissors
            userWin = computerChoice === "rock" ? true : false
        }
        else {
            // Computer's Choice: rock, paper
            userWin = computerChoice === "paper" ? true : false
        }

        // Declaring the winner
        showWinner(userWin, userChoice, computerChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})

// Resetting the Game
reset.addEventListener("click", () => {
    msg.innerText = "Pick Your Move"
    msg.style.backgroundColor = "#1fdaff"
    userScore = 0
    compScore = 0
    userWin = true
    computerScorePara.innerText = compScore
    userScorePara.innerText = userScore
})
