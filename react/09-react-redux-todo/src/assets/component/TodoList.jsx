import React from 'react';
import TodoItem from "./TodoItem.jsx";

function TodoList(props) {

    const {todos, toggleCompleted, deleteTodo} = props;

    return (
        <ul>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted}/>)}
        </ul>
    );
}

export default TodoList;