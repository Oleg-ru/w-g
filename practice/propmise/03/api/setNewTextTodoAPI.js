import {BASE_URL} from "./getTodoAPI.js";

export async function updateTaskText(taskId, newText) {
    try {
        const response = await fetch(`${BASE_URL}${taskId}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({text: newText})
        });

        if (!response.ok) {
            throw new Error('Не удалось обновить текст задачи. Статус ' + response.status);
        }

        return true
    } catch (error) {
        console.error("Ошибка: " + error.message);
        throw error;
    }
}