// Basic JS
const user = document.querySelector(".section-img").querySelectorAll("img"),
    message = document.querySelector(".msg").querySelector(".show-message"),
    computerS = document.querySelector(".cup-result"),
    userS = document.querySelector(".user-result"),
    playAgain = document.querySelector(".play-again"),
    backHome = document.querySelector(".back-home"),
    sectionImg = document.querySelectorAll(".section-img img"),
    imgUser = document.querySelector(".img-user"),
    computerUser = document.querySelector(".img-computer"),
    handSection = document.querySelector(".hand-section"),
    loader = document.querySelector(".loader");



const result = ["rock", "paper", "scissors"];
const imgSrc = ["/Image/Rock.png", "/Image/paper.png", "/Image/scissors.png"];
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

const showResult = (res) => {
    if (res === "player") {
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
    handSection.classList.add("start");
    message.style.display = "none";
    loader.style.display = "flex";
    const userChoice = event.target.dataset.name;
    imgUser.src = event.target.src;

    if (userScore === maxScore) {
        message.innerText = "Game finished and your score was";
        return;
    } else if (computerScore === maxScore) {
        message.innerText = "Game finished and computer score was";
        return;
    }

    setTimeout(() => {
        message.style.display = "flex";
        loader.style.display = "none";
        handSection.classList.remove("start")
        const randomComputer = Math.floor(Math.random() * result.length);
        const randomSrc = imgSrc[randomComputer];
        computerUser.src = randomSrc;
        const computerChoice = result[randomComputer];


        const check = checkResult(userChoice, computerChoice);
        showResult(check);
    }, 2000);

};

const restGame = () => {
    message.innerText = "Select";
    computerS.innerText = 0;
    userS.innerText = 0;
    game();
};

const backToHome = () => {
    window.location.assign("/index.html");
};

playAgain.addEventListener("click", restGame);
backHome.addEventListener("click", backToHome);
user.forEach(img => {
    img.addEventListener("click", game)
});