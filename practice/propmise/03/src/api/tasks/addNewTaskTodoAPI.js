import {BASE_URL} from "../host.js";

export async function addTask(newTask) {
    try {
        const response = await fetch(`${BASE_URL}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask)
        });

        if (!response.ok) {
            throw new Error('Не удалось создать задачу. Статус ' + response.status);
        }
        return true;
    } catch (error) {
        console.error("Ошибка: " + error.message)
        throw error;
    }
}