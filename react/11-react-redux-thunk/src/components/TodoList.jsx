import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, toggleTodo} from "../store/actions.js";

function TodoList() {

    const {todos} = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleToggle = (id) => {
        dispatch(toggleTodo(id))
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id))
    };
    
    return (
        <div className='w-1/2'>
            {todos.map(todo => (
                <div key={todo.id} className="flex justify-between gap-3 mt-5 p-2 border border-orange-500 rounded">
                    <input type="checkbox" checked={todo.completed} onChange={() => handleToggle(todo.id)}/>
                    <span>{todo.text}</span>
                    <button onClick={() => handleDeleteTodo(todo.id)} className="hover:bg-red-300 delay-75 rounded">❌</button>
                </div>
            ))}
        </div>
    );
}

export default TodoList;