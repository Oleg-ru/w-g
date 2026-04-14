import React from 'react';

function TodoItem({todo, deleteTodo, toggleCompleted}) {
    return (
        <li>
            <input type="checkbox"
                   checked={todo.completed}
                   onChange={() => toggleCompleted(todo.id)}
            />
            <span className={`${todo.completed ? 'line-through' : ''}`}>
            {todo.text}
          </span>
            <button onClick={() => {deleteTodo(todo.id)}}>❌</button>
        </li>
    );
}

export default TodoItem;