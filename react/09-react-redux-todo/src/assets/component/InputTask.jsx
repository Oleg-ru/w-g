import React from 'react';

function InputTask({handleInput, addTodo, text}) {
    return (
        <label>
            <input type="text"
                   className="border border-blue-500 p-2"
                   value={text}
                   onChange={(e) => handleInput(e.target.value)}
            />
            <button onClick={addTodo}>Добавить задачу</button>
        </label>
    );
}

export default InputTask;