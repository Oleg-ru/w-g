const tasksListElement = document.querySelector(".list");
const taskElements = document.querySelectorAll(".item");
const checkBtn = document.getElementById("checkBtn");

for (const task of taskElements) {
  task.draggable = true;
}

tasksListElement.addEventListener('dragstart', (event) => {
  event.target.classList.add('selected')
});
tasksListElement.addEventListener('dragend', (event) => {
  event.target.classList.remove('selected')
});

tasksListElement.addEventListener('dragover', (event) => {
  event.preventDefault();
  
  const activeElement = document.querySelector('.selected');
  const currentElement = event.target;

  const isMoveable = activeElement !== currentElement && currentElement.classList.contains("item");
  if (!isMoveable) return;

  // const nextElement =
  //     currentElement === activeElement.nextElementSibling
  //         ? currentElement.nextElementSibling
  //         : currentElement;

  let nextElement;
  if (currentElement === activeElement.nextElementSibling) {
    nextElement = currentElement.nextElementSibling
  } else {
    nextElement = currentElement;
  }
  tasksListElement.insertBefore(activeElement, nextElement)
})

const checkOrder = () => {
  const checkArr = [
      'Встать', 'Умыться', 'Позавтракать', 'Одеться', 'Выйти из дома'
  ];

  const currentTaskElements = Array.from(document.querySelectorAll('.item')).map(task => task.textContent);
  console.log(currentTaskElements)
  const isEquals = JSON.stringify(checkArr) === JSON.stringify(currentTaskElements);
  alert(isEquals ? 'Все правильно!' : 'Хм... неверно, подумай еще раз')
};

document.getElementById('checkBtn').addEventListener('click', checkOrder);

