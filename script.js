var beginButton = document.getElementById("begin-btn");
beginButton.addEventListener("click", startGame);
var question = document.getElementById("question-container");
var next = document.getElementById("next-btn");
var questionElement = document.getElementById("questions");
var answerbtn = document.getElementById("answer-container");

function startGame() {
  beginButton.classList.add("hide");
  question.classList.remove("hide");
  next.classList.remove("hide");
  nextQuestion();
  console.log(questionElement);
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

function nextQuestion() {
  questionElement.innerText = questions[0].question;
  answerbtn.innerText = questions[0].answers;
}
