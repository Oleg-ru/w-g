import {addTask} from "../../api/index.js";
import {showWarning} from "../../utils/notification.js";

export async function addNewTask(taskInput) {
    const newTextTask = taskInput.value.trim();

    if (!newTextTask) {
        showWarning('Для добавления новой задачи нужно указать текст!');
        return;
    }

    const newTask = {
        text: newTextTask,
        createdAt: Date.now(),
        completed: false,
    };


    try {
        await addTask(newTask);
    } catch (error) {
        throw error;
    }
    taskInput.value = '';
}