import {API_URL} from "../constants/todos.js";

export async function fetchTodos () {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed fetch todos');
    }
    return response.json()
}

export async function createTodo(todo) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    if (!response.ok) {
        throw new Error('Failed to create todo')
    }
}

export const updateTodo = async (id, todo) => {
    const response =  await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    if (!response.ok) {
        throw new Error('Failed to update todo')
    }
}