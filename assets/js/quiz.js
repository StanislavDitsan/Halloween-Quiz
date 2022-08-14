// Variables

let question = document.getElementById("question");
let container = document.getElementById("container");
let scorecard = document.getElementById('scorecard');
let option0 = document.getElementById('option0');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let next = document.querySelector('.next');
let points = document.getElementById('score');
let span = document.querySelectorAll('span');
let i = 0;
let score = 0;

// Function for displaying the questions

function displayQuestion() {
    for (let a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Question.' + (i + 1) + ' ' + questionsForQuiz[i].question;
    option0.innerHTML = questionsForQuiz[i].option[0];
    option1.innerHTML = questionsForQuiz[i].option[1];
    option2.innerHTML = questionsForQuiz[i].option[2];
    option3.innerHTML = questionsForQuiz[i].option[3];
    stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
}


// Quiz questions

let questionsForQuiz = [{
        question: 'What is the word Halloween an abbreviation of?',
        option: ["All Hallow's Eve", "All Hallows Day", "All Saints Day", "On All Saints' Eve"],
        answer: "All Hallow's Eve"
    },
    {
        question: 'What is a group of witches called?',
        option: ["Pack of witches", "A coven", "Enchantress", "A convent"],
        answer: "A coven"
    },
    {
        question: '',
        option: [''],
        answer: ''
    },
    {
        question: '',
        option: [''],
        answer: ''
    },
    {
        question: '',
        option: [''],
        answer: ''
    },
    {
        question: '',
        option: [''],
        answer: ''
    },
    {
        question: '',
        option: [''],
        answer: ''
    },
    {
        question: '',
        option: [''],
        answer: ''
    },
    {
        question: '',
        option: [''],
        answer: ''
    },
    {
        question: '',
        option: [''],
        answer: ''
    },

];

displayQuestion();