import {
    getTodos,
    toggleTodoStatus,
    deleteTask,
} from "./api/index.js";
import {hideLoader, showError, showLoader} from "./utils/helpers.js";
import {initDragAndDrop, initDeleteCompleted, initAddTask, setNewTextTask, initLoadData} from "./components/index.js";

const container = document.getElementById("posts-container");
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const downloadButton = document.querySelector(".button-download");
export const deleteCompletedButton = document.getElementById('delete-completed-button');

export async function loadData() {
    try {
        showLoader()
        const todos = await getTodos();
        renderData(todos)
    } catch (error) {
        console.error("Ошибка: " + error.message);

        if (error.message === 'Задач нет') {
            showError('Задач нет');
        } else {
            showError('Не удалось получить данные');
        }
    } finally {
        hideLoader();
    }
}

function renderData(tasks) {
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
        inputEl.addEventListener('change', async () => {
            try {
                await toggleTodoStatus(task.id, task.completed);
                await loadData();
            } catch (error) {
                console.error(error.message);
                showError('Не удалось изменить статус задачи');
            }
        });

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
        deleteButtonEl.addEventListener('click', async () => {
            try {
                await deleteTask(task.id)
                await loadData();
            } catch (error) {
                console.error(error.message);
                showError('Не удалось удалить задачу');
            }
        });
        const imgDeleteEl = document.createElement('img');
        imgDeleteEl.alt = 'Удалить';
        imgDeleteEl.title = 'Удалить';
        imgDeleteEl.src = './assets/icons/icon-delete.png';
        deleteButtonEl.appendChild(imgDeleteEl);

        //Кнопка изменить
        const setNewTextButtonEl = document.createElement('button');
        setNewTextButtonEl.className = 'button-function';
        setNewTextButtonEl.addEventListener('click', async () => {
            try {
                await setNewTextTask(task.id, task.text)
                await loadData();
            } catch (error) {
                console.error(error.message);
                showError('Не удалось изменить текст задачи');
            }
        });
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
    downloadButton.hidden = true;
}

initDeleteCompleted(container);
initAddTask(addButton, taskInput);
initLoadData(downloadButton);