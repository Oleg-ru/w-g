export const BASE_URL = "https://69a8666b37caab4b8c61a5a9.mockapi.io/api/v1/todos/";

export async function getTodos() {
    try {
        const response = await fetch(BASE_URL, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('Задачи не получены. Статус ' + response.status);
        }
        return await response.json();
    } catch (error) {
        throw error; // проброс ошибки выше
    }
}