import './styles.css';

const possibleAnswers = [
  "Так",
  "Ні",
  "Можливо",
  "Спробуй пізніше",
  "Не розраховуй на це"
];

const ball = document.querySelector('.magic-ball');
const answerDisplay = document.querySelector('.answer');
const askButton = document.querySelector('.ask-button');

askButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * possibleAnswers.length);
  const randomAnswer = possibleAnswers[randomIndex];
  
  answerDisplay.textContent = randomAnswer;
  
  shakeMagicBall();
});

function shakeMagicBall() {
  const shakeFrames = 10;
  const shakeDistance = 5;

  ball.style.animation = `shake ${shakeFrames * 100}ms`;

  setTimeout(() => {
    ball.style.animation = '';
  }, shakeFrames * 100);
}
