var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left until game over";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
      

      }
  }, 1000);
}

setTime();

let current
//these are the questions that will be prompted when starting the start of the quiz.
let questions = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: "What is the correct syntax for referring to an external script called xxx.js?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xx.js'>",
        answer: 3
    },
    {
        question: "How do you write 'hello world' in an alert box?",
        choice1: "msgBox('hello world');",
        choice2: "alertBox('hello world');",
        choice3: "msg('hello world');",
        choice4: "alert('hello world');",
        answer: 4
    },
    {
        question: "What command do you use to log 'hello' to the console in javascript?",
        choice1: "log.console('hello');",
        choice2: "console('hello'.log);",
        choice3: "console.log('hello');",
        choice4: "logtoconsole.('hello');",
        answer: 3
    },
]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3; 

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++;
    const quesionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText - currentQuestion['choice' + number];
})
};

setTime();