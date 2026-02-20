// 1. Получаем все элементы с классом "answer"
const answers = document.querySelectorAll(".answer");

// 2. Добавляем обработчик события на каждый элемента с классом "answer"
answers.forEach((answer, index) => {
  // 3. Порядковый номер элемента с классом "answer" - это index
  answer.addEventListener("click", (e) => {

    // 11. Вариант hard: снимаем выделение с других ответов

    // 4. Выделяем выбранный ответ, меняя стили 
    answer.classList.add("selected")

    answers.forEach((el) => {
      if (el.className.includes('selected')) {
        el.classList.remove('selected')
      }
    })

    let isCorrectByIndex; // 7. Объявляем переменную, которая будет менять значение с false на true при правильном ответе

    // 5. Проверяем порядковый номер ответа
    isCorrectByIndex = index === 1;

    // 9. Получаем элемент для отображения результата
    const resultElement = document.querySelector(".result");

    // 10. Отображаем результат
    if (isCorrectByIndex) {
      resultElement.innerText = 'Верно :-)'
      answer.style.backgroundColor = "#105910"
    } else {
      resultElement.innerText = 'Не верно :-('
      setTimeout(() => {
        resultElement.innerText = '';
      }, 1000)
    }

    answer.classList.add("selected")


  });
});
