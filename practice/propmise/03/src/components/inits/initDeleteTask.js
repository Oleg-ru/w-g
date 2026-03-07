import {deleteTask} from "../../api/index.js";
import {loadData} from "../index.js";
import {showError} from "../../utils/notification.js";

export function initDeleteTask(deleteButtonEl, task) {
    deleteButtonEl.addEventListener('click', async () => {
        try {
            await deleteTask(task.id)
            await loadData();
        } catch (error) {
            console.error(error.message);
            showError('Не удалось удалить задачу');
        }
    });
}