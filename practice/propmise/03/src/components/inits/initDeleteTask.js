import {deleteTask} from "../../api/index.js";
import {loadData} from "../index.js";
import {showConfirmation, showError} from "../../utils/notification.js";

export function initDeleteTask(deleteButtonEl, task) {
    deleteButtonEl.addEventListener('click', async () => {
        const isConfirmed = await showConfirmation('Вы уверены, что хотите удалить эту задачу, без возможности восстановления?');
        if (!isConfirmed) {
            return
        }
        try {
            await deleteTask(task.id)
            await loadData();
        } catch (error) {
            console.error(error.message);
            showError('Не удалось удалить задачу');
        }
    });
}