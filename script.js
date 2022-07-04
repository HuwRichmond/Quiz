var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var secondsLeft = 10;

//this function is to trigger the timer when the start button is used. event listener on click 
document.getElementsByClassName("start-button").addEventListener("click", function(){
    var timeleft = 10;
//this sets the base value for the timer "timeleft" section below is supposed to deduct  value of 1 from the timer every 1 second
    var downloadTimer = setInterval(function function1(){
    document.getElementsByClassName("card timer").innerHTML = timeleft + 
    " "+"seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementsByClassName("card timer").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

setTime();

let current
//these are the questions that will be prompted when starting the start of the quiz.

//each qestion is assigned a choice value to order them on the text boxes and there is 1 unique answer value attached to only 1 of the items in each list
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
//this is attempts to make the start of the game work as intended. i could not get this functionality to work. it is based on samples i found online.
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