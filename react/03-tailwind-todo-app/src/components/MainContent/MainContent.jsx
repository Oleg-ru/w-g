import React, {useState} from 'react';
import TodoList from "../TodoList/TodoList.jsx";
import AddTodo from "../AddTodo/AddTodo.jsx";
import Header from "../Header/Header.jsx";
import TodoFilter from "../TodoFilter/TodoFilter.jsx";

function MainContent({onAdd, todos, setDeletingId, toggleComplete, handleUpdate, setTodos, onReorder}) {

    const [filter, setFilter] = useState('all');

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') {
            return todo.completed
        }
        if (filter === 'active') {
            return !todo.completed
        }
        return true;
    })

    return (
        <div className="mx-auto flex flex-col gap-3">
            <Header/>
            <AddTodo onAdd={onAdd}/>
            <TodoFilter filter={filter} setFilter={setFilter}/>
            <TodoList todos={filteredTodos}
                      setDeletingId={setDeletingId}
                      toggleComplete={toggleComplete}
                      handleUpdate={handleUpdate}
                      setTodos={setTodos}
                      onReorder={onReorder}
            />
        </div>
    );
}

export default MainContent;