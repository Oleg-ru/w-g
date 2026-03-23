import './App.css'
import {useState} from "react";
import AddTodo from "./components/AddTodo/AddTodo.jsx";
import ToggleTheme from "./components/ToggleTheme/ToggleTheme.jsx";
import {getInitialTheme} from "./helpers/getInitialTheme.js";
import DeleteConfirmModal from "./components/DeleteConfirmModal/DeleteConfirmModal.jsx";
import {useTodoManagement} from "./Hooks/useTodoManagement.js";
import Header from "./components/Header/Header.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";
import DeleteCompletedButton from "./components/DeleteCompletedButton/DeleteCompletedButton.jsx";

function App() {
    const [theme, setTheme] = useState(getInitialTheme());

    const {
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
    } = useTodoManagement();

    return (
        <>
            <div
                data-theme={theme}
                className="flex flex-col min-h-screen justify-center items-center bg-page-light dark:bg-page-dark p6"
            >
                <ToggleTheme theme={theme} setTheme={setTheme}/>
                <div className="mx-auto flex flex-col gap-3">
                    <Header/>
                    <AddTodo onAdd={onAdd}/>
                    <TodoList todos={todos}
                              setDeletingId={setDeletingId}
                              toggleComplete={toggleComplete}
                              handleUpdate={handleUpdate}
                    />
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
                <DeleteCompletedButton onClick={handeDeleteCompleted}
                                       hasCompletedTodos={hasCompletedTodos}
                />
            </div>
        </>
    )
}

export default App
