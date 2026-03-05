import {BASE_URL} from "../host.js";

export async function deleteCompletedTodos(container) {
    try {
        const completedTasks = [...container.querySelectorAll('.todo')]
            .filter(task => {
                const checkbox = task.querySelector('input[type="checkbox"]');
                return checkbox.checked;
            });

        for (let task of completedTasks) {
            const taskId = task.getAttribute('data-id');
            const deleteResponse = await fetch(`${BASE_URL}${taskId}`,{
                method: "DELETE"
            });

            if (!deleteResponse.ok) {
                throw new Error('Не удалось удалить выполненные задачи. Статус ' + deleteResponse.status);
            }
        }
        return true;
    } catch (error) {
        console.error("Ошибка: " + error.message)
        throw error;
    }
}