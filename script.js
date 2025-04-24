// Elementos del DOM
const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const quizContainer = document.querySelector('.quiz-container');
const resultContainer = document.getElementById('result');
const quizTitle = document.getElementById('quiz-title');

let currentQuestion = 0;
let score = 0;

// Iniciar el quiz
startBtn.addEventListener('click', function() {
    startScreen.style.display = 'none';
    quizContainer.style.display = 'block';
    quizTitle.textContent = '🎉Preguntas sobre el cumpleañero🎂';
    showQuestion(currentQuestion);
});

// Mostrar la pregunta actual
function showQuestion(index) {
    const questions = document.querySelectorAll('.question');
    questions.forEach((question, i) => {
        question.style.display = i === index ? 'block' : 'none';
    });
}

// Comprobar respuesta
function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('incorrect');
    }

    const buttons = button.parentNode.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.disabled = true;
    });

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < document.querySelectorAll('.question').length) {
            showQuestion(currentQuestion);
        } else {
            showResult();
        }
    }, 1000);
}

// Mostrar resultado final
function showResult() {
    const totalQuestions = document.querySelectorAll('.question').length;

    if (score > totalQuestions) {
        score = totalQuestions;
    }

    let message = '';

    if (score === totalQuestions) {
        message = `🎉 ¡Impresionante! Acertaste todas las preguntas. ¡Sos el alma de la fiesta! 🥳`;
    } else if (score >= 8) {
        message = `🎈 ¡Genial! Obtuviste ${score} de ${totalQuestions}. ¡Estás para organizar la próxima fiesta! 🎊`;
    } else if (score >= 6) {
        message = `🍰 ¡Muy bien! Conocés bastante al cumpleañero/a. ${score} de ${totalQuestions}.`;
    } else if (score === 5) {
        message = `🎁 ¡Bien! Aprobaste con ${score} de ${totalQuestions}. ¡A seguir festejando!`;
    } else if (score >= 3) {
        message = `🎉 ¡Vamos! Sacaste ${score} de ${totalQuestions}. ¡Todavía queda torta, no te desanimes! 🍰`;
    } else if (score === 2) {
        message = `😄 ¡Dos aciertos! ${score} de ${totalQuestions}. ¡Seguimos celebrando igual! 🎈`;
    } else if (score === 1) {
        message = `🎈 ¡Al menos no fue cero! ${score} de ${totalQuestions}. ¡Te ganaste un pedacito de torta! 🍰`;
    } else {
        message = `🎉 ¡Cero aciertos pero muchas ganas de celebrar! 🙌 ¡Lo importante es que viniste! 🥳`;
    }

    resultContainer.innerHTML = `
        <h2>¡Terminaste el quiz de cumpleaños! 🎂</h2>
        <p>${message}</p>
    `;
}
