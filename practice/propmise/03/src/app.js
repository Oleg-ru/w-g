import {
    getTodos,
    toggleTodoStatus,
    deleteTask,
    updateTaskText,
    addTask,
    updateTaskOrderOnServer,
    deleteCompletedTodos
} from "./api/index.js";
import {hideLoader, showError, showLoader} from "./utils/helpers.js";

const container = document.getElementById("posts-container");
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const downloadButton = document.querySelector(".button-download");
const overlay = document.getElementById("overlay");
const deleteCompletedButton = document.getElementById('delete-completed-button');

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
        addDragAndDropListener(todoEl, task);

        //Монтируем в контейнер таску
        todoEl.append(inputEl, taskTextEl, createdDateTaskEl, deleteButtonEl, setNewTextButtonEl);
        container.append(todoEl);
    });
    downloadButton.hidden = true;
}

async function setNewTextTask(taskId, taskText) {

    const {value: newText} = await Swal.fire({
        title: 'Редактирование задачи',
        input: 'text',
        inputLabel: 'ВВедите текст новой задачи',
        inputValue: taskText,
        showCancelButton: true,
        confirmButtonText: 'Сохранить',
        cancelButtonText: 'Отменить',
        inputValidator: (value) => {
            if (!value) {
                return 'Поле не может быть пустым'
            }
        }
    });

    if (newText) {
        try {
            await updateTaskText(taskId, newText);
            await loadData();
        } catch (error) {
            console.error(error.message);
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

deleteCompletedButton.addEventListener('click', async () => {
    const {isConfirmed} = await Swal.fire({
        title: "Вы уверены?",
        text: "Удалим все выполненные задача",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Да, удалить их",
        cancelButtonText: "Отменить"
    });

    if (!isConfirmed) return;

    try {
        await deleteCompletedTodos(container);
        await loadData();
    } catch (error) {
        console.error(error.message);
        showError('Не удалось удалить выполненные задачи');
    }
})

addButton.addEventListener('click', async () => {
    try {
        showLoader()
        await addNewTask();
        await loadData();
    } catch (error) {
        console.error(error.message);
        showError('Не удалось добавить новую задачу');
    } finally {
        hideLoader();
    }
});
taskInput.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        try {
            showLoader()
            await addNewTask();
            await loadData();
        } catch (error) {
            console.error(error.message);
            showError('Не удалось добавить новую задачу');
        } finally {
            hideLoader();
        }
    }
});
downloadButton.addEventListener('click', loadData);

//Drag&Drop
function addDragAndDropListener(todoElement, todo) {
    todoElement.draggable = true;

    todoElement.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', todo.id);
        event.currentTarget.classList.add('dragging');
    });

    todoElement.addEventListener('dragover', (event) => {
        event.preventDefault();
        const draggable = document.querySelector('.dragging');
        const overElement = event.currentTarget;
        if (overElement !== draggable) {
            const rect = overElement.getBoundingClientRect();
            const offset = event.clientY - rect.top;
            if (offset < rect.height / 2) {
                container.insertBefore(draggable, overElement)
            } else {
                container.insertBefore(draggable, overElement.nextSibling)
            }
        }
    });

    todoElement.addEventListener('dragend', (event) => {
        event.currentTarget.classList.remove('dragging');
        updateTaskOrder()
    });
}

async function updateTaskOrder() {
    const tasks = [...container.querySelectorAll('.todo')];
    const updatedOrder = tasks.map((task, index) => {
        return {
            id: task.getAttribute('data-id'),
            order: index + 1,
        }
    });

    try {
        showLoader();
        for (const task of updatedOrder) {
            await updateTaskOrderOnServer(task.id, task.order);
        }
        return true;
    } catch (error) {
        console.error(error.message);
        showError('Не удалось поменять порядок задач');
    } finally {
        hideLoader();
    }
}