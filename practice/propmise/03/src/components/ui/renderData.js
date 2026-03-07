import {initChangeCompleted, initChangeTextTask, initDeleteTask, initDragAndDrop} from "../index.js";

export function renderData(tasks, container, deleteCompletedButton) {
    container.innerHTML = '';

    //Если есть хоть 1 выполненная задача показываем кнопку удаления выполненных задач
    const hasCompletedTasks = tasks.some(task => task.completed);
    deleteCompletedButton.style.display = hasCompletedTasks ? 'block' : 'none';

    tasks.forEach(task => {
        const date = new Date(task.createdAt).toLocaleString("ru-RU", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });

        const todoEl = document.createElement('div');
        todoEl.className = 'todo';
        todoEl.setAttribute('data-id', task.id);

        //Чекбокс таска
        const inputEl = document.createElement('input');
        inputEl.type = 'checkbox';
        inputEl.checked = task.completed;
        initChangeCompleted(inputEl, task);

        //Текст таска
        const taskTextEl = document.createElement('p');
        taskTextEl.className = task.completed ? 'task-completed' : '';
        taskTextEl.textContent = task.text;

        //Дата таска
        const createdDateTaskEl = document.createElement('p');
        createdDateTaskEl.textContent = date;

        //Кнопка удаления
        const deleteButtonEl = document.createElement('button');
        deleteButtonEl.className = 'button-function';
        initDeleteTask(deleteButtonEl, task)
        const imgDeleteEl = document.createElement('img');
        imgDeleteEl.alt = 'Удалить';
        imgDeleteEl.title = 'Удалить';
        imgDeleteEl.src = './assets/icons/icon-delete.png';
        deleteButtonEl.appendChild(imgDeleteEl);

        //Кнопка изменить
        const setNewTextButtonEl = document.createElement('button');
        setNewTextButtonEl.className = 'button-function';
        initChangeTextTask(setNewTextButtonEl, task);
        const imgSetNewTextEl = document.createElement('img');
        imgSetNewTextEl.alt = 'Изменить';
        imgSetNewTextEl.title = 'Изменить';
        imgSetNewTextEl.src = './assets/icons/icon-update.png';
        setNewTextButtonEl.appendChild(imgSetNewTextEl);

        //drag&drop
        initDragAndDrop(todoEl, task, container);

        //Монтируем в контейнер таску
        todoEl.append(inputEl, taskTextEl, createdDateTaskEl, deleteButtonEl, setNewTextButtonEl);
        container.append(todoEl);
    });
}