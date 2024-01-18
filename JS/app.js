// Basic JS
const user = document.querySelector(".section-img").querySelectorAll("img"),
      message = document.querySelector(".msg").querySelector(".show-message"),
      computerS = document.querySelector(".cup-result"),
      userS = document.querySelector(".user-result");


const result = ["rock", "paper", "scissors"];
const maxScore = 5;
let userScore = 0;
let computerScore = 0;

const checkResult = (user, computer) => {
    if (user === computer) {
        return "Draw";
    } else if (user === "rock") {
        return computer === "scissors" ? "player" : "computer";
    } else if (user === "psper") {
        return computer === "rock" ? "player" : "computer";
    } else {
        return computer === "paper" ? "player" : "computer";
    }
};

const showResult = res => {
    if  (res === "player") {
        message.innerText = "You won round 1!";
        userScore++
        userS.innerText = userScore;
    } else if (res === "computer") {
        message.innerText = "The computer won the 1 round!";
        computerScore++
        computerS.innerText = computerScore;
    } else {
        message.innerText = "The game equalised!";
    }
}

const game = event => {
    const userChoice = event.target.dataset.name;
    
    if (userScore === maxScore) {
        message.innerText = "Game finished and your score was";
        return;
    } else if (computerScore === maxScore) {
        message.innerText = "Game finished and computer score was";
        return;
    }

    const randomComputer = Math.floor(Math.random() * result.length);
    const computerChoice  = result[randomComputer];

    
    const check = checkResult(userChoice, computerChoice);
    showResult(check);

}

user.forEach(img => {
    img.addEventListener("click", game)
})