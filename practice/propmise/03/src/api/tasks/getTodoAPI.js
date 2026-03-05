import {BASE_URL} from "../host.js";

export async function getTodos() {
    try {
        const response = await fetch(BASE_URL, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('Задачи не получены. Статус ' + response.status);
        }
        const data = await response.json();

        if (data.length === 0) {
            throw new Error('Задач нет')
        }

        data.sort((a, b) => a.order - b.order);
        return data
    } catch (error) {
        throw error; // проброс ошибки выше
    }
}