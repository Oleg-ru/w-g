/*
Быстрый минимальный старт:
1️⃣ Для зоны drop для события "dragover" вызвать preventDefault()
2️⃣ Для Drag элемента для события "drop" вызвать preventDefault(), далее в нужную зону append(элемент) элемент
 */

const dragItems =
    document.querySelectorAll("[id^=drag-]"); // выбор по атрибуту (атрибутный селектор) если есть Id с началом drag- берем их

//Выбираем зоны drop
const dropZones = document.querySelectorAll("[id^=drop-zone-]");
//----------------------------------------------------------------------------------------------------------------------

//Для каждого элемента добавляем слушатель событие на начало перетаскивания
dragItems.forEach(item => item.addEventListener('dragstart', dragStart))
function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    console.log(event.target.id)
}

//----------------------------------------------------------------------------------------------------------------------

//Для каждой drop зоны устанавливаем слушатели событий
//Для drop зон говорим, что они готовы принимать элементы (dragover дословно -> перетащить на себя) ❗без этого не будет работать drop❗

dropZones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop);
})

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const dragItem = document.getElementById(id);

    //event.target.append(dragItem); //БАГ📛 можно вложить элементы друг в друга с таким способом
    event.currentTarget.append(dragItem)
}

//----------------------------------------------------------------------------------------------------------------------

document.getElementById("check-answers").addEventListener("click", () => {

    let score = 0;

    const correctAnswers = {
        "drop-zone-1": "drag-1",
        "drop-zone-2": "drag-2",
    };

    dropZones.forEach(zone => {
        const zoneId = zone.id;
        const dropItem = zone.querySelector('[id^="drag-"]');
        console.log(zoneId)
        console.log(dropItem)
        if (dropItem && dropItem.id === correctAnswers[zoneId]) {
            score++;
        }
    });
    const resultText = score === 2 ? "Все ответы правильные" : `Правильных ответов: ${score}`;
    document.getElementById('result').textContent = resultText;
})