// Quiz questions
const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },

    {
        question: "Which language is used to style a webpage?",
        options: [
            "HTML",
            "CSS",
            "Java",
            "Python"
        ],
        answer: 1
    },

    {
        question: "Which language is used to make a webpage interactive?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2
    },

    {
        question: "Which symbol is used for comments in JavaScript?",
        options: [
            "//",
            "##",
            "<!-- -->",
            "**"
        ],
        answer: 0
    },

    {
        question: "Which tag is used to create a paragraph in HTML?",
        options: [
            "<h1>",
            "<p>",
            "<br>",
            "<div>"
        ],
        answer: 1
    }
];


// Current question
let currentQuestion = 0;

// User score
let score = 0;


// Get HTML elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreElement = document.getElementById("score");


// Show question
function showQuestion() {

    const question = questions[currentQuestion];

    questionElement.textContent =
        (currentQuestion + 1) + ". " + question.question;

    optionsElement.innerHTML = "";

    question.options.forEach(function(option, index) {

        const button = document.createElement("button");

        button.textContent = option;

        button.classList.add("option");

        button.addEventListener("click", function() {
            checkAnswer(index, button);
        });

        optionsElement.appendChild(button);
    });

    nextButton.style.display = "none";
}


// Check answer
function checkAnswer(selectedAnswer, selectedButton) {

    const correctAnswer = questions[currentQuestion].answer;

    const allOptions = document.querySelectorAll(".option");

    // Disable all buttons
    allOptions.forEach(function(button) {
        button.disabled = true;
    });

    // Check answer
    if (selectedAnswer === correctAnswer) {

        selectedButton.classList.add("correct");

        score++;

    } else {

        selectedButton.classList.add("wrong");

        // Show correct answer
        allOptions[correctAnswer].classList.add("correct");
    }

    nextButton.style.display = "inline-block";
}


// Next question
nextButton.addEventListener("click", function() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();
    }

});


// Show result
function showResult() {

    quizBox.style.display = "none";

    resultBox.style.display = "block";

    scoreElement.textContent =
        "Your score is " + score + " out of " + questions.length;
}


// Restart quiz
function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    quizBox.style.display = "block";

    resultBox.style.display = "none";

    showQuestion();
}


// Start quiz
showQuestion();