import {toggleTodoStatus} from "../../api/index.js";
import {loadData} from "../index.js";
import {showError} from "../../utils/helpers.js";

export function initChangeCompleted(inputEl, task) {
    inputEl.addEventListener('change', async () => {
        try {
            await toggleTodoStatus(task.id, task.completed);
            await loadData();
        } catch (error) {
            console.error(error.message);
            showError('Не удалось изменить статус задачи');
        }
    });
}