import {updateTaskOrderOnServer} from "../../api/index.js";
import {hideLoader, showLoader} from "../../utils/helpers.js";
import {showError} from "../../utils/notification.js";

export async function updateTaskOrder(container) {
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