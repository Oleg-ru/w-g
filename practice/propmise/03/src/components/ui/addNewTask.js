import {addTask} from "../../api/index.js";

export async function addNewTask(taskInput) {
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