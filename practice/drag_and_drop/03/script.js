const dragItems = document.querySelectorAll(".drag-item");
const blanks = document.querySelectorAll(".blank");
const sentences = document.querySelectorAll(".blank");

dragItems.forEach(item => item.addEventListener('dragstart', dragStart))

function dragStart(event) {

  event.dataTransfer.setData('text/plain', event.target.id)
}

blanks.forEach(blank => {
  blank.addEventListener('drop', drop);
  blank.addEventListener('dragover', dragOver)
})

function drop(event) {
  event.preventDefault();
  const id = event.dataTransfer.getData('text/plain');
  const dragItem = document.getElementById(id);
  //event.currentTarget.append(dragItem)

  const optionsContainer = event.target
      .closest(".question")
      .querySelector(".options");

  const allowedAnswers = Array.from(optionsContainer.querySelectorAll('.drag-item')).map(answer => answer.textContent);
  console.log(allowedAnswers)

  event.target.classList.remove('active');
  if (!allowedAnswers.includes(dragItem.textContent)) {
    alert('Ответ к вопросу не относится');
    return
  }
  event.target.append(dragItem);
}

function dragOver(event) {
  event.preventDefault();
  const existingAnswer = event.target.querySelector(".drag-item");
  if (existingAnswer) {
    const optionsContainer = event.target
        .closest(".question")
        .querySelector(".options");
    optionsContainer.append(existingAnswer);
  }
}
sentences.forEach(sentence => {
  sentence.addEventListener('dragover', dragOverQuestion);
  sentence.addEventListener('dragleave', dragLeave);
});

function dragOverQuestion(event) {
  event.target.classList.add('active')
}

function dragLeave(event) {
  event.target.classList.remove('active');
}

document.getElementById('check-answers').addEventListener('click', (event) => {

  let correctAnswersCount = 0;

  const correctAnswers = {
    "blank-1": "ёлка",
    "blank-2": "лук",
  };
  const countQuestions = Object.keys(correctAnswers).length;
  blanks.forEach(blank => {
    const answer = blank.querySelector('.drag-item')?.textContent;
    if (answer && correctAnswers[blank.id] === answer) {
      correctAnswersCount++;
    }
  });
  document.getElementById('result').textContent
      = `Правильных ответов: ${correctAnswersCount} из ${countQuestions}. Процент правильных: ${countQuestions > 0 ? (correctAnswersCount / countQuestions) * 100 : 0}%`
})