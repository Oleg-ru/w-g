import {initDeleteCompleted, initAddTask, initLoadData} from "./components/index.js";

export const container = document.getElementById("posts-container");
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
export const downloadButton = document.querySelector(".button-download");
export const deleteCompletedButton = document.getElementById('delete-completed-button');

initDeleteCompleted(container);
initAddTask(addButton, taskInput);
initLoadData(downloadButton);