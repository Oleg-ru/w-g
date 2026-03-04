const container = document.getElementById("posts-container");
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const downloadButton = document.querySelector(".button-download");
const overlay = document.getElementById("overlay");
const BASE_URL = "https://69a8666b37caab4b8c61a5a9.mockapi.io/api/v1/todos/";

async function getData() {
    try {
        showLoader();
        const response = await fetch(BASE_URL, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('Задачи не получены. Статус ' + response.status);
        }

        const data = await response.json();
        console.log(data)
        renderData(data)
    } catch (error) {
        console.error("Ошибка: " + error.message)
    } finally {
        hideLoader();
    }
}

function renderData(tasks) {
    const app = tasks.map(task => {
        const date = new Date(task.createdAt).toLocaleString("ru-RU", {year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit"});

        return `
    <div class="todo">
        <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTodoStatus('${task.id}', '${task.completed}')">
        <p class="${task.completed ? 'task-completed' : ''}">${task.text}</p>
        <p>${date}</p>
        <button class="button-function" onclick="deleteTask('${task.id}')"><img src="./images/icon-delete.png" alt="Удалить" title="Удалить"></button>
        <button class="button-function" onclick="setNewTextTask('${task.id}','${task.text}')"><img src="./images/icon-update.png" alt="Обновить" title="Изменить"></button>
    </div>
    
    `}).join("");
    container.innerHTML = ``;
    container.innerHTML = app;
    downloadButton.hidden = true;
}

async function deleteTask(taskId) {
    try {
        const response = await fetch(`${BASE_URL}${taskId}`,{
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error('Не удалось удалить задачу. Статус ' + response.status);
        }
        await getData();
    } catch (error) {
        console.error("Ошибка: " + error.message)
    }
}

async function toggleTodoStatus(taskId, completed) {
    try {
        const response = await fetch(`${BASE_URL}${taskId}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({completed: completed !== 'true'})
        });

        if (!response.ok) {
            throw new Error('Не удалось обновить статус задачи. Статус ' + response.status);
        }
        await getData();
    } catch (error) {
        console.error("Ошибка: " + error.message)
    }
}

async function addTask() {
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

    try {
        const response = await fetch(`${BASE_URL}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask)
        });

        if (!response.ok) {
            throw new Error('Не удалось создать задачу. Статус ' + response.status);
        }
        await getData();
    } catch (error) {
        console.error("Ошибка: " + error.message)
    }
}

async function updateTaskText(taskId, newText) {
    try {
        const response = await fetch(`${BASE_URL}${taskId}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({text: newText})
        });

        if (!response.ok) {
            throw new Error('Не удалось обновить текст задачи. Статус ' + response.status);
        }
        await getData();
    } catch (error) {
        console.error("Ошибка: " + error.message)
    }
}

async function setNewTextTask(taskId, taskText) {
    const newText = prompt('Введите новый текст задачи', taskText);
    if (newText) {
        updateTaskText(taskId, newText)
    }
}

function showLoader() {
    overlay.style.display = 'flex'
}

function hideLoader() {
    overlay.style.display = 'none'
}

addButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask()
    }
})

downloadButton.addEventListener('click', getData)