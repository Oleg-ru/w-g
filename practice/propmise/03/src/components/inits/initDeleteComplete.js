import {deleteCompletedTodos} from "../../api/index.js";
import {deleteCompletedButton} from "../../app.js";
import {loadData} from "../index.js";
import {showConfirmation, showError} from "../../utils/notification.js";

export function initDeleteCompleted(container) {
    deleteCompletedButton.addEventListener('click', async () => {
        const isConfirmed = await showConfirmation('Все выполненные задачи будут удалены. Уверены?');

        if (!isConfirmed) return;

        try {
            await deleteCompletedTodos(container);
            await loadData();
        } catch (error) {
            console.error(error.message);
            showError('Не удалось удалить выполненные задачи');
        }
    })
}
