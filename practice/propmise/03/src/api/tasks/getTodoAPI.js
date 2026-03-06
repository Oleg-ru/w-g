import {BASE_URL} from "../host.js";

export async function getTodos() {
    try {
        const response = await fetch(`${BASE_URL}.json`, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('Задачи не получены. Статус ' + response.status);
        }
        const data = await response.json();

        if (!data) {
            throw Error("Задач нет");
        }

        const todosArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key]
        }));
        console.log(todosArray)

        todosArray.sort((a, b) => a.order - b.order);
        return todosArray
    } catch (error) {
        throw error; // проброс ошибки выше
    }
}