import {API_URL} from "../constants/todos.js";

export async function fetchTodos () {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed fetch todos');
    }
    return response.json()
}