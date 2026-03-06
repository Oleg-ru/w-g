import {deleteTask} from "../../api/index.js";
import {loadData} from "../../app.js";
import {showError} from "../../utils/helpers.js";

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