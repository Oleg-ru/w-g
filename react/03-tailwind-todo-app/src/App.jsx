import './App.css'
import {useState} from "react";
import TodoItem from "./components/TodoItem/TodoItem.jsx";
import AddTodo from "./components/AddTodo/AddTodo.jsx";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme.jsx";
import {getInitialTheme} from "./helpers/getInitialTheme.js";


function App() {
    const initialTodos = [
        {id: 1, text: 'Погладить Пушка'},
        {id: 2, text: 'Поиграть с Пушком'},
        {id: 3, text: 'Пройти модуль по Tailwind'},
    ];
    const [todos, setTodos] = useState(initialTodos);
    const [theme, setTheme] = useState(getInitialTheme());

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
