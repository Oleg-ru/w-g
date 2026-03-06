import {BASE_URL} from "../host.js";

export async function toggleTodoStatus(taskId, completed) {
    try {
        const response = await fetch(`${BASE_URL}${taskId}.json`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({completed: !completed})
        });

        if (!response.ok) {
            throw new Error('Не удалось обновить статус задачи. Статус ' + response.status);
        }
        return true;
    } catch (error) {
        console.error("Ошибка: " + error.message)
        throw error
    }
}