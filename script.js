var timerElement = document.querySelector(".timer")

var greeting = document.querySelector(".greeting")

var quizContainer = document.querySelector(".questions")

var questionElement = document.querySelector("#current-question")

var choicesElement = document.querySelector("#choices")
var startButton = document.querySelector("#start")

const javascriptQuestions = [
  {
    question: 'What is the correct way to declare a variable in JavaScript?',
    answerChoices: ['let x = 5;', 'variable x = 5;', 'int x = 5;', 'const x = 5;'],
    answer: 'let x = 5;'
  },
  {
    question: 'Which operator is used to compare the value and type of two variables in JavaScript?',
    answerChoices: ['==', '===', '!=', '!=='],
    answer: '==='
  },

  {
    question: 'What is the purpose of the `addEventListener` method in JavaScript?',
    answerChoices: ['To add two numbers together', 'To create a new HTML element', 'To attach an event handler to an element', 'To define a function'],
    answer: 'To attach an event handler to an element'
  },
  {
    question: 'How do you comment out a single line of code in JavaScript?',
    answerChoices: ['// This is a comment', '/* This is a comment */', '*/ This is a comment /*', '# This is a comment'],
    answer: '// This is a comment'
  },
  {
    question: 'Which loop in JavaScript is used to iterate over the properties of an object?',
    answerChoices: ['for loop', 'while loop', 'do...while loop', 'for...in loop'],
    answer: 'for...in loop'
  }
];

var questionIndex = 0
var time = 100
let interval;

function startTimer() {
  interval = setInterval(function () {
    timerElement.textContent = "Time: " + time

    time--
    if (time <= 0) {
      clearInterval()
      // Call end game function here later - will need a function call to end game ex endGame()
    }
  }, 1000)
}

function startQuiz() {
  greeting.classList.add("hide")
  quizContainer.classList.remove("hide")
  displayQuestions()
}

function displayQuestions() {
  var currentQuestion = javascriptQuestions[questionIndex]
  console.log(currentQuestion)
  questionElement.textContent = currentQuestion.question
  var choices = javascriptQuestions[questionIndex].answerChoices
  var answerList = ""
  for (var i = 0; i < choices.length; i++) {
    answerList += `
            <li class="choice">${choices[i]}</li>
            `
    choicesElement.innerHTML = answerList
  }
}

// Creating start quiz function that simultaniously starts the timer
startButton.addEventListener("click", function (event) {
  event.preventDefault()
  startQuiz()
  startTimer()
})

// need to create an event listener