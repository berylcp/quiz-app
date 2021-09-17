const quizData = [
  {
    question: "Tempat pematangan sel-sel spermatozoa adalah di...",
    a: "Tubuli seminiferi",
    b: "Ductus afferens",
    c: "Epidydimis",
    d: "Ductus afferens",
    correct: "c",
  },
  {
    question:
      "Louis Pasteur menyumbangkan teori generatio spontanea dengan memuaskan karena percobaannya yang menggunakan...",
    a: "Potongan daging",
    b: "Kaldu ayam",
    c: "Tabung ditutup rapat",
    d: "Botol berbentuk leher angsa",
    correct: "d",
  },
  {
    question:
      "Hewan yang mempunyai ciri-ciri : tubuh bersel banyak, mempunyai tentakel, tidak mempunyai anus, reproduksinya dapat dengan cara bertunas. Kemungkinan hewan tersebut termasuk ke dalam...",
    a: "Porifera",
    b: "Coelenterata",
    c: "Platyhelminthes",
    d: "Oligochaeta",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2> <button onclick="history.go(0)">Jawab Lagi</button>`;
    }
  }
});
