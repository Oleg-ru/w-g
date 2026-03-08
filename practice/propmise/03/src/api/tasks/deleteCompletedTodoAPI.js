import {BASE_URL} from "../host.js";
import {getUserInfo} from "../../utils/authHelper.js";

export async function deleteCompletedTodos(container) {
    try {
        const {uid, token} = await getUserInfo();
        const completedTasks = [...container.querySelectorAll('.todo')]
            .filter(task => {
                const checkbox = task.querySelector('input[type="checkbox"]');
                return checkbox.checked;
            });

        for (let task of completedTasks) {
            const taskId = task.getAttribute('data-id');
            const deleteResponse = await fetch(`${BASE_URL}/${uid}/${taskId}.json?auth=${token}`,{
                method: "DELETE"
            });

            if (!deleteResponse.ok) {
                throw new Error('Не удалось удалить выполненные задачи. Статус ' + deleteResponse.status);
            }
        }
        return true;
    } catch (error) {
        throw error;
    }
}