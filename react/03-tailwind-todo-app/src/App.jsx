import './App.css'
import {useEffect, useState} from "react";
import TodoItem from "./components/TodoItem/TodoItem.jsx";
import AddTodo from "./components/AddTodo/AddTodo.jsx";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme.jsx";
import {getInitialTheme} from "./helpers/getInitialTheme.js";
import DeleteConfirmModal from "./components/DeleteConfirmModal/DeleteConfirmModal.jsx";

const LOCAL_STORAGE_KEY = 'todos';
const API_URL = 'https://69bfd62572ca04f3bcb9bc14.mockapi.io/api/v1/todos';

function App() {
    const [todos, setTodos] = useState([]);
    const [theme, setTheme] = useState(getInitialTheme());
    const [deletingId, setDeletingId] = useState(null);
    const [isDeletingCompleted, setIsDeletingCompleted] = useState(false)

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

    return (
        <>
            <div
                data-theme={theme}
                className="flex flex-col min-h-screen justify-center items-center bg-page-light dark:bg-page-dark p6"
            >
                <ToggleTheme theme={theme} setTheme={setTheme}/>
                <div className="mx-auto flex flex-col gap-3">
                    <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white md-8">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-600">To Do app</span>
                    </h1>
                    <AddTodo onAdd={onAdd}/>
                    <div className="flex flex-col gap-3">
                        {todos.map((todo) =>
                            <TodoItem
                                key={todo.id}
                                onDelete={() => setDeletingId(todo.id)}
                                onToggleComplete={toggleComplete}
                                {...todo}
                            />
                        )}
                    </div>
                </div>
                {deletingId && <DeleteConfirmModal
                    message="Вы уверены что хотите удалить эту задачу?"
                    onCancel={() => {
                        setDeletingId(null)
                    }}
                    onConfirm={() => {
                        handleDelete(deletingId);
                        setDeletingId(null);
                    }}
                />}
                {isDeletingCompleted && <DeleteConfirmModal
                    message={`Вы уверены что хотите удалить все выполненные задачи ${(todos.filter(todo => todo.completed) || []).length}?`}
                    onCancel={() => {
                        setIsDeletingCompleted(false);
                    }}
                    onConfirm={confirmDeleteCompleted}
                />}
                {hasCompletedTodos && (
                    <button onClick={handeDeleteCompleted} className="px-4 py-2 mt-4 bg-red-500 text-white rounded hover:bg-red-800 transition-colors cursor-pointer">Удалить все выполненные задачи</button>
                )}
            </div>
        </>
    )
}

export default App
