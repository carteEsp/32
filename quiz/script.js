var crt = new Audio('crrct.wav');
var wrn = new Audio('wrng.wav');

const quizData = [
    {
        question: "Quel est le rôle de l'ESP32 dans l'IoT ?",
        a: "microcontrôleur",
        b: "detecteur",
        c: "actionneur",
        d: "autre",
        correct: "a",
    },
    {
        question: "Quel est le processeur utilisé dans l'ESP32 ?",
        a: "dual-core Tensilica LX6 à 240 MHz",
        b: "quad-core Tensilica LX6 à 480 MHz",
        c: "single-core Tensilica LX6 à 120 MHz",
        d: "autre",
        correct: "a",
    },
    {
        question: "Quelles sont les interfaces de communication disponibles sur l'ESP32 ?",
        a: "GPIO",
        b: "I2C",
        c: "SPI",
        d: "all",
        correct: "d",
    },
    {
        question: "On programme l'ESP32 en utilisant: ...",
        a: "MicroJs",
        b: "MicroPython",
        c: "MicroC",
        d: "autre",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
           crt.play();
       }else{
           wrn.play();
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})