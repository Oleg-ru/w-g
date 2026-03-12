import './App.css'
import {useState} from "react";
import TodoItem from "./components/TodoItem/TodoItem.jsx";
import AddTodo from "./components/AddTodo/AddTodo.jsx";


function App() {
    const initialTodos = [
        {id: 1, text: 'Погладить Пушка'},
        {id: 2, text: 'Поиграть с Пушком'},
        {id: 3, text: 'Пройти модуль по Tailwind'},
    ];
    const [todos, setTodos] = useState(initialTodos);
    const [theme, setTheme] = useState(getInitialTheme());

    function getInitialTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme) {
            return savedTheme;
        } else if (prefersDark) {
            return 'dark';
        } else {
            const hours = new Date().getHours();
            return hours < 6 || hours >= 21 ? "dark" : "light";
        }
    }

    function toggleTheme() {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        })
    }

    function onDelete(id) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    }

    function onAdd(text) {
        const newTodo = {
            id: crypto.randomUUID(),
            text,
        };
        setTodos([...todos, newTodo]);
    }

    return (
        <>
            <div
                data-theme={theme}
                className="flex flex-col min-h-screen justify-center items-center bg-page-light dark:bg-page-dark p6"
            >
                <div className='mb-6 '>
                    <div className="flex items-center cursor-pointer">
                        <button className="relative" onClick={toggleTheme}>
                            <div
                                className="w-14 h-7 rounded-full shadow-inner transition-colors duration-300 bg-gray-300 dark:bg-btn-dark"></div>
                            <div className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 translate-x-0 dark:translate-x-7"></div>
                        </button>
                        <span className="ml-3 text-gray-700 dark:text-gray-300 font-medium">{theme === 'light' ? 'Светлая' : 'Тёмная'}</span>
                    </div>
                </div>
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
