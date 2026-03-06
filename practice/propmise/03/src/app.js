import {
    getTodos,
} from "./api/index.js";
import {hideLoader, showError, showLoader} from "./utils/helpers.js";
import {initDeleteCompleted, initAddTask, initLoadData, renderData} from "./components/index.js";

const container = document.getElementById("posts-container");
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const downloadButton = document.querySelector(".button-download");
export const deleteCompletedButton = document.getElementById('delete-completed-button');

export async function loadData() {
    try {
        showLoader()
        const todos = await getTodos();
        renderData(todos, container, deleteCompletedButton, downloadButton);
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

initDeleteCompleted(container);
initAddTask(addButton, taskInput);
initLoadData(downloadButton);