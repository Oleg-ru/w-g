// Получаем элементы
const dropArea = document.getElementById("drop");
const dragElement = document.getElementById("drag");
const dragImg = document.getElementById("drag-img");

//Событие начала перетаскивания
dragElement.addEventListener('dragstart', dragStartHandler);

dragImg.addEventListener('dragstart', dragStartHandler);

function dragStartHandler(event) {
  //console.log("drag-Start: Начало перетаскивания");
  event.dataTransfer.setData("text/plain", event.target.id);
  //console.log(event.target.id);
  dragElement.classList.add('dragging')
  dragImg.classList.add('dragging')
}

//Событие окончания перетаскивания
dragElement.addEventListener('dragend', dragEndHandler);

function dragEndHandler(event) {
  //console.log("drag-End: Окончание перетаскивания");
  dragElement.classList.remove('dragging')
  dragImg.classList.remove('dragging')
}

//События для drop элемента при входе в зону сброса
dropArea.addEventListener('dragenter', dragEnterHandler);

function dragEnterHandler(event) {
  event.preventDefault();
  //console.log("Элемент зашел в зону Drop");
  dropArea.classList.add('dragover')
}

//События для drop элемента при выходе из зоны сброса
dropArea.addEventListener('dragleave', dragLeaveHandler);

function dragLeaveHandler(event) {
  event.preventDefault();
  //console.log("Элемент вышел из зоны Drop");
  dropArea.classList.remove('dragover')
}

//Элемент находится в зоне сброса - постоянно летит событие
dropArea.addEventListener('dragover', dragOverHandler);

function dragOverHandler(event) {
  event.preventDefault();
  //console.log("Элемент находится над зоной Drop");
}

//Элемент сброшен в зону Drop
dropArea.addEventListener('drop', dropHandler);

function dropHandler(event) {
  event.preventDefault();
  //console.log("Элемент упал в зону Drop");
  const id = event.dataTransfer.getData('text/plain');
  console.log(id);
  dragElement.style.backgroundColor = 'tomato';
  dropArea.append(dragElement)
}