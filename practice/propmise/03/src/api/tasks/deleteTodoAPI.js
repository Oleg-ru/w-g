import {BASE_URL} from "../host.js";

export async function deleteTask(taskId) {
    try {
        const response = await fetch(`${BASE_URL}${taskId}`,{
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error('Не удалось удалить задачу. Статус ' + response.status);
        }
        return true;
    } catch (error) {
        console.error("Ошибка: " + error.message)
        throw error
    }
}