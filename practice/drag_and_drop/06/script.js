const blanks = document.querySelectorAll(".blank");
const parts = document.querySelector(".parts");
const dragItems = document.querySelectorAll(".drag-item");
const checkButton = document.getElementById("check-puzzles");
const result = document.getElementById("result");

blanks.forEach(blank => {
  blank.draggable = true
})

const shuffledItems = Array.from(dragItems).sort(() => Math.random() - 0.5);
shuffledItems.forEach((item) => parts.append(item));

dragItems.forEach((item) => {
  item.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
  })
})

blanks.forEach((blank) => {
  blank.addEventListener('dragover', (event) => {
    event.preventDefault();
  });
  blank.addEventListener('drop', (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const draggedItem = document.getElementById(id);
    const targetBlank = event.target.closest(".blank");
    if (!event.target) return;

    const existingPuzzle = targetBlank.querySelector('.drag-item');
    if (existingPuzzle) {
      parts.append(existingPuzzle)
    }

    targetBlank.append(draggedItem);
  })
})

checkButton.addEventListener('click', () => {
  const dragItemsCheck = Array.from(document.querySelectorAll('.drag-item')).map(item => item.id);
  const itemCorrect = ['item-1','item-2','item-3','item-4','item-5','item-6'];
  let isValid = JSON.stringify(dragItemsCheck) === JSON.stringify(itemCorrect);

  result.textContent = isValid ? 'Пройдено!' : 'Неверно, попробуйте еще раз';
  if (isValid) {
    window.location.href = 'site.html';
  }
})