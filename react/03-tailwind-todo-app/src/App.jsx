import './App.css'
import {useEffect, useState} from "react";
import TodoItem from "./components/TodoItem/TodoItem.jsx";
import AddTodo from "./components/AddTodo/AddTodo.jsx";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme.jsx";
import {getInitialTheme} from "./helpers/getInitialTheme.js";

const LOCAL_STORAGE_KEY = 'todos';
const API_URL = 'https://69bfd62572ca04f3bcb9bc14.mockapi.io/api/v1/todos';

function App() {
    const [todos, setTodos] = useState([]);
    const [theme, setTheme] = useState(getInitialTheme());

    useEffect(() => {
        const loadInitialData = async () => {
            const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
            setTodos(savedTodos);
        };
        loadInitialData();
    }, []);
    
    function toggleComplete(id) {
        const todoToUpdate = todos.find(todo => todo.id === id);

        if (!todoToUpdate) return;
        const updatedTodo = {
            ...todoToUpdate,
            completed: !todoToUpdate.completed
        };
        
        const updatedTodos = todos.map(todo => todo.id === id ? updatedTodo : todo);
        setTodos(updatedTodos);
    }

    function onDelete(id) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    const onAdd = async (text, deadline) => {
        const newTodo = {
            id: crypto.randomUUID(),
            text,
            completed: false,
            createdAt: new Date().toISOString(),
            deadline: deadline || null,
            order: todos.length + 1,
        };
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));

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
            console.error('Ошибка добавления: ', e)
        }
    }

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
                                onDelete={onDelete}
                                onToggleComplete={toggleComplete}
                                {...todo}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
