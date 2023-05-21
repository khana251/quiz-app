const quizData = [
    {
        question: 'How can you check your current git version?',
        a: 'git --v',
        b: 'git --version',
        c: 'git --option',
        d: 'git version',
        correct: 'b',
    },{
        question: 'What command lets you create a connection between a local and remote repository?',
        a: 'git remote add new',
        b: 'git remote add origin',
        c: 'git remote new origin',
        d: 'git remote origin',
        correct: 'b',
    }, {
        question: 'Which of the following is true you when you use the following command? git add -A',
        a: 'All new and updated files are staged',
        b: 'Files are staged in alphabetical order',
        c: 'All new files are staged',
        d: 'Only updated files are staged',
        correct: 'a',
    },{
        question: 'What will the following command print to the Terminal? git remote -v',
        a: 'A list of remote repositories and their URLs',
        b: 'The current git version you are running',
        c: 'An inline editor for modifying remote repositories',
        d: 'The last 5 git versions you have installed',
        correct: 'a',
    }, {
        question: 'What option can you use to apply git configurations across your entire git environment?',
        a: '--all',
        b: '--master',
        c: '--global',
        d: '--update',
        correct: 'c',
    }  
]

const answersEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
 
}

function getSelected() {
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer

}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitButton.addEventListener("click", () => {
    const answer = getSelected();

    console.log(answer);
    if (answer){
        if (answer == quizData[currentQuiz].correct) {
            score++;
        }


        currentQuiz ++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // TODO show score at the end of the quiz
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onClick="location.reload()">Try again</button>`;
        }
    }

});