import {BASE_URL} from "../host.js";

export async function updateTaskOrderOnServer(taskId, taskOrder) {
    try {
        const response = await fetch(`${BASE_URL}${taskId}.json`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({order: taskOrder})
        });

        if (!response.ok) {
            throw new Error('Не удалось обновить порядок задач. Статус ' + response.status);
        }

        return true;
    } catch (error) {
        console.error("Ошибка: " + error.message);
        throw error;
    }
}