import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../store/actions.js";

function AddTodo(props) {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-1/2'>
            <input type="text"
                   value={text}
                   onChange={(event) => setText(event.target.value)}
                   className='border border-white rounded p-1'
            />
            <button type='submit' className='p-2 px-2 bg-green-700 text-white cursor-pointer hover:bg-green-800 rounded'>
                Добавить
            </button>
        </form>
    );
}

export default AddTodo;