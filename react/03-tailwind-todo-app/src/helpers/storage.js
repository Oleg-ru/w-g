import {LOCAL_STORAGE_KEY} from "../constants/todos.js";

export function loadFromLocalStorage() {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}