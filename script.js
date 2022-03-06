var beginButton = document.getElementById("begin-btn");
beginButton.addEventListener("click", startGame);
var question = document.getElementById("question-container");
var next = document.getElementById("next-btn");
next.addEventListener("click", nextQuestion);
var questionElement = document.getElementById("questions");
var answerbtn = document.getElementById("answer-container");
var gameScore = document.getElementById("score");
var timeLeft = document.getElementById("time-left");
var countI = document.getElementById("count");
var scoreTitle = document.getElementById("Score title");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var buttoninput = document.getElementsByClassName("calcButton");
questionCounter = 0;
currentScore = 0;
gameScore.innerText = currentScore;
var count = 15;
var interval = setInterval(function () {
  document.getElementById("count").innerHTML = count;
  count--;
  if (count === 0) {
    clearInterval(interval);
    document.getElementById("count").innerHTML = "Done";
    // or...
    alert("You're out of time!");
  }
}, 1000);

for (var i = 0; i < buttoninput.length; i++) {
  buttoninput[i].addEventListener("click", btnPress);
}
function btnPress(ev) {
  console.log(ev.target.innerText, questionCounter);

  if (ev.target.innerText == correctAnswer[questionCounter]) {
    console.log("hello");
    currentScore++;
    console.log(currentScore);
    gameScore.innerText = currentScore;
    nextQuestion();
  } else {
    nextQuestion();
  }
}

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if (secondsLeft < 1) {
      endGameScreen();
    }
  }, 2000);
}

function startGame() {
  beginButton.classList.add("hide");
  question.classList.remove("hide");
  gameScore.classList.remove("hide");
  next.classList.remove("hide");
  timeLeft.classList.remove("hide");
  countI.classList.remove("hide");
  scoreTitle.classList.remove("hide");
  nextQuestion();
}

function nextQuestion() {
  questionElement.innerText = questions[questionCounter].question;
  buttons = [buttonA, buttonB, buttonC, buttonD];

  for (i = 0; i < questions.length; i++) {
    buttons[i].innerText = questions[questionCounter].answers[i].text;
  }

  questionCounter++;
}

var questions = [
  {
    question: "Who created Javascript",
    answers: [
      { text: "Brendan Eich", correct: true },
      { text: "Steve Jobs", correct: false },
      { text: "Cameron Stroup", correct: false },
      { text: "Bill Gates", correct: false },
    ],
  },
  {
    question: 'Javascript is the "   " of a webstite? ',
    answers: [
      { text: "Complete Webpage Interface", correct: true },
      { text: "Content and Structure", correct: false },
      { text: "Design and Display", correct: false },
      { text: "Backend", correct: false },
    ],
  },
  {
    question: "Which is not a daya types supported by JavaScript?",
    answers: [
      { text: "Boolean", correct: false },
      { text: "String", correct: false },
      { text: "Object", correct: false },
      { text: "Fucntion", correct: true },
    ],
  },
  {
    question: "Which is not a feature of Javascirpt?",
    answers: [
      {
        text: "It is a lightweight, interpreted programming language.",
        correct: false,
      },
      {
        text: "It is designed for creating network-centric applications.",
        correct: false,
      },
      {
        text: "It is complementary to and integrated with Java",
        correct: false,
      },
      {
        text: "It is extremly easy to understand and does not need much practice ",
        correct: true,
      },
    ],
  },
];
var correctAnswer = [
  "",
  "Brendan Eich",
  "Complete Webpage Interface",
  "Fucntion",
  "It is extremly easy to understand and does not need much practice ",
];
