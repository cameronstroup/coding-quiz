var beginButton = document.getElementById("begin-btn");
beginButton.addEventListener("click", startGame);
var question = document.getElementById("question-container");
var next = document.getElementById("next-btn");
next.addEventListener("click", nextQuestion);
var questionElement = document.getElementById("questions");
var answerbtn = document.getElementById("answer-container");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
questionCounter = 0;

function startGame() {
  beginButton.classList.add("hide");
  question.classList.remove("hide");
  next.classList.remove("hide");
  nextQuestion();
  setTime();
  console.log(questionElement);
}
git;
function nextQuestion() {
  questionElement.innerText = questions[0].question;
  buttons = [buttonA, buttonB, buttonC, buttonD];

  for (i = 0; i < questions.length; i++) {
    buttons[i].innerText = questions[questionCounter].answers[i];
  }
  questionCounter++;
}

var questions = [
  {
    question: "Who created Javascript",
    answers: ["Brendan Eich", "Steve Jobs", "Cameron Stroup", "Bill Gates"],
  },
  {
    question: 'Javascript is the "   " of a webstite? ',
    answers: [
      "Complete Webpage Interface",
      "Content and Structure",
      "Design and Display",
      "Backend",
    ],
  },
  {
    question: "Which is not a daya types supported by JavaScript?",
    answers: ["Boolean", "String", "Object", "Fucntion"],
  },
  {
    question: "Which is not a feature of Javascirpt?",
    answers: [
      "It is a lightweight, interpreted programming language.",
      "It is designed for creating network-centric applications.",
      "It is complementary to and integrated with Java",
      "It is extremly easy to understand and does not need much practice ",
    ],
  },
];
