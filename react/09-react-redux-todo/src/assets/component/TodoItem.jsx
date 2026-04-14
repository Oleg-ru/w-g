import React from 'react';
import {removeTodo, toggleTodoCompleted} from "../../store/todoSlice.js";
import {useDispatch} from "react-redux";

function TodoItem({todo, toggleCompleted}) {

    const dispatch = useDispatch();

    return (
        <li>
            <input type="checkbox"
                   checked={todo.completed}
                   onChange={() => dispatch(toggleTodoCompleted(todo.id))}
            />
            <span className={`${todo.completed ? 'line-through' : ''}`}>
            {todo.text}
          </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
        </li>
    );
}

export default TodoItem;