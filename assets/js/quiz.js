// Variables

let question = document.getElementById('question');
let quizContainer = document.getElementById('quiz-container');
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

// Event listener for click next button

next.addEventListener('click', nextQuestion);

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
    qnum.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionsForQuiz.length;
};

// Function for displaying the next question

function nextQuestion() {
    if (i < questionsForQuiz.length - 1) {
        i = i + 1;
        displayQuestion();
    } else {
        points.innerHTML = score + '/' + questionsForQuiz.length;
        quizContainer.style.display = '';
        scoreboard.style.display = 'block';
        alert(`Congratulations, you have completed the quiz! Scroll down to see the results and answers.`);
    }
};

// Function to add up scores

function calcScore(e) {
    if (e.innerHTML === questionsForQuiz[i].answer && score < questionsForQuiz.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'green';
    } else {
        document.getElementById(e.id).style.background = 'red';
    }
    setTimeout(nextQuestion, 500);
};

// Function to check the answers

function checkAnswer() {
    let answersForQuiz = document.getElementById('answersForQuiz');
    let answers = document.getElementById('answers');
    answersForQuiz.style.display = 'block';
    scoreboard.style.display = 'none';
    for (let a = 0; a < questionsForQuiz.length; a++) {
        let list = document.createElement('li');
        list.innerHTML = questionsForQuiz[a].answer;
        answers.appendChild(list);
    }
}


// Function button back to quiz

function backToQuiz() {
    location.reload();
};

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

// Timer bar

let timeleft = 100;
let downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        alert(`Time has run out! however, the quiz can still be completed.`);
    }
    document.getElementById("timerBar").value = 100 - timeleft;
    timeleft -= 1;
}, 1000);
alert(`You will face an additional challenge! But it is entirely up to you. If you run out of time, you will not lose the game. 
Complete the quiz before the timer runs out. Keep an eye on the timer bar.`);

displayQuestion();