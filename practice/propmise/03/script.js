import {getTodos} from "./api/getTodoAPI.js";
import {toggleTodoStatus} from "./api/changeStatusTodoAPI.js";
import {deleteTask} from "./api/deleteTodoAPI.js";
import {updateTaskText} from "./api/setNewTextTodoAPI.js";
import {addTask} from "./api/addNewTaskTodoAPI.js";

const container = document.getElementById("posts-container");
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const downloadButton = document.querySelector(".button-download");
const overlay = document.getElementById("overlay");

export async function loadData() {
    try {
        showLoader()
        const todos = await getTodos();
        renderData(todos)
    } catch (error) {
        console.error("Ошибка: " + error.message)
    } finally {
        hideLoader();
    }
}

function renderData(tasks) {
    container.innerHTML = '';
    tasks.forEach(task => {
        const date = new Date(task.createdAt).toLocaleString("ru-RU", {year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit"});

        const todoEl = document.createElement('div');
        todoEl.className = 'todo';

        //Чекбокс таска
        const inputEl = document.createElement('input');
        inputEl.type = 'checkbox';
        inputEl.checked = task.completed;
        inputEl.addEventListener('change', async () => {
            try {
                await toggleTodoStatus(task.id, task.completed);
                await loadData();
            } catch (error) {
                console.error(error.message)
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
                console.error(error.message)
            }
        });
        const imgDeleteEl = document.createElement('img');
        imgDeleteEl.alt = 'Удалить';
        imgDeleteEl.title = 'Удалить';
        imgDeleteEl.src = './images/icon-delete.png';
        deleteButtonEl.appendChild(imgDeleteEl);

        //Кнопка изменить
        const setNewTextButtonEl = document.createElement('button');
        setNewTextButtonEl.className = 'button-function';
        setNewTextButtonEl.addEventListener('click', async () => {
            try {
                await setNewTextTask(task.id, task.text)
                await loadData();
            } catch (error) {
                console.error(error.message)
            }
        });
        const imgSetNewTextEl = document.createElement('img');
        imgSetNewTextEl.alt = 'Изменить';
        imgSetNewTextEl.title = 'Изменить';
        imgSetNewTextEl.src = './images/icon-update.png';
        setNewTextButtonEl.appendChild(imgSetNewTextEl);

        //Монтируем в контейнер таску
        todoEl.append(inputEl, taskTextEl, createdDateTaskEl, deleteButtonEl, setNewTextButtonEl);
        container.append(todoEl);
    });
    downloadButton.hidden = true;
}

async function setNewTextTask(taskId, taskText) {
    const newText = prompt('Введите новый текст задачи', taskText);
    if (newText) {
        try {
            await updateTaskText(taskId, newText);
            await loadData();
        } catch (error) {
            console.error(error.message)
        }
    }
}

async function addNewTask() {
    const newTextTask = taskInput.value.trim();

    if (!newTextTask) {
        alert('Для добавления новой задачи нужно указать текст!');
        return;
    }

    const newTask = {
        text: newTextTask,
        createdAt: Date.now(),
        completed: false,
    };

    await addTask(newTask);
    taskInput.value = '';
}

function showLoader() {
    overlay.style.display = 'flex'
}

 function hideLoader() {
    overlay.style.display = 'none'
}

addButton.addEventListener('click', async () => {
    try {
        await addNewTask();
        await loadData();
    } catch (error) {
        console.error(error.message)
    }
});
taskInput.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        try {
            await addNewTask();
            await loadData();
        } catch (error) {
            console.error(error.message)
        }
    }
})

downloadButton.addEventListener('click', loadData)