import React from 'react';
import TodoItem from "./TodoItem.jsx";
import {useSelector} from "react-redux";

function TodoList() {
    const todos = useSelector(state => state.todos.todos);

    return (
        <ul>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
        </ul>
    );
}

export default TodoList;