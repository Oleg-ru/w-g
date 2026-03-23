import {useEffect, useState} from "react";

const LOCAL_STORAGE_KEY = 'todos';
const API_URL = 'https://69bfd62572ca04f3bcb9bc14.mockapi.io/api/v1/todos';

export function useTodoManagement() {
    const [todos, setTodos] = useState([]);
    const [deletingId, setDeletingId] = useState(null);
    const [isDeletingCompleted, setIsDeletingCompleted] = useState(false);

    useEffect(() => {
        const loadInitialData = async () => {
            const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
            setTodos(savedTodos);
            try {
                const response = await fetch(API_URL);
                if (response.ok) {
                    const serverTodos = await response.json();
                    setTodos(serverTodos);
                    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(serverTodos));
                }
            } catch (e) {
                console.error('Ошибка загрузки данных с сервера: ', e)
            }
        };
        loadInitialData();
    }, []);

    const onAdd = async (text, deadline) => {
        const newTodo = {
            id: `temp_${crypto.randomUUID()}`,
            text,
            completed: false,
            createdAt: new Date().toISOString(),
            deadline: deadline || null,
            order: todos.length + 1,
        };
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTodo),
            });
            const createdTodo = await response.json();
            const syncedTodos = updatedTodos.map(todo => todo.id === newTodo.id ? createdTodo : todo);
            setTodos(syncedTodos);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(syncedTodos));
        } catch (e) {
            console.error('Ошибка добавления: ', e);
            setTodos(todos);
        }
    }

    const handleUpdate = async (id, newText, neDeadline) => {
        const todoToUpdate = todos.find(todo => todo.id === id);

        if (!todoToUpdate) return;
        const updatedTodo = {
            ...todoToUpdate,
            text: newText,
            deadline: neDeadline,
        }
        const updatedTodos = todos.map(todo => todo.id === id ? updatedTodo : todo);

        setTodos(updatedTodos);

        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTodo),
            });
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
        } catch (e) {
            console.error('Ошибка Обновления: ', e);
            setTodos(todos);
        }

    };

    const toggleComplete = async (id) => {
        const todoToUpdate = todos.find(todo => todo.id === id);

        if (!todoToUpdate) return;
        const updatedTodo = {
            ...todoToUpdate,
            completed: !todoToUpdate.completed
        };

        const updatedTodos = todos.map(todo => todo.id === id ? updatedTodo : todo);
        setTodos(updatedTodos);
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTodo),
            });
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
        } catch (e) {
            console.error('Ошибка Обновления: ', e);
            setTodos(todos)
        }
    }

    const handleDelete = async (id) => {
        const prevTodos = todos;
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);


        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
        } catch (e) {
            console.error('Ошибка удаления: ', e);
            setTodos(prevTodos);
        }
    }

    const hasCompletedTodos = todos.some(todo => todo.completed);

    const handeDeleteCompleted = () => {
        if (!hasCompletedTodos) {
            return
        }
        setIsDeletingCompleted(true);
    };

    const confirmDeleteCompleted = async () => {
        const originalTodos = [...todos];
        const completedIds = originalTodos.filter(todo => todo.completed).map(todo => todo.id);

        setTodos(originalTodos.filter(todo => !todo.completed));
        const failedIds = [];

        for (const id of completedIds) {
            try {
                await fetch(`${API_URL}/${id}`, {
                    method: 'DELETE'
                });
            } catch (e) {
                console.error(`Ошибка удаления задачи ${id}: `, e);
                failedIds.push(id);
            }
        }

        if (failedIds.length > 0) {
            setTodos(originalTodos.filter(todo => !todo.completed || failedIds.includes(todo.id)))
        }

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
        setIsDeletingCompleted(false)
    };

    return {
        todos,
        deletingId,
        setDeletingId,
        isDeletingCompleted,
        setIsDeletingCompleted,
        onAdd,
        handleUpdate,
        toggleComplete,
        handleDelete,
        hasCompletedTodos,
        handeDeleteCompleted,
        confirmDeleteCompleted
    }
}