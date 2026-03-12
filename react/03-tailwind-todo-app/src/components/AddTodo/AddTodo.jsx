import React, {useState} from 'react';

function AddTodo({onAdd}) {
    const [text, setText] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <div
                className="flex items-center
                bg-white rounded-lg shadow-sm overflow-hidden
                border border-gray-100 focus-within:ring-2 focus-within:ring-blue-500">
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    placeholder="Добавить задачу..."
                    className="flex-1 p-3 text-gray-700 dark:bg-page-dark dark:text-txt-dark outline-none placeholder-gray-400"
                />
                <button type="submit" className="p-3 bg-btn-light hover:bg-btn-light-hv text-white dark:btn-dark hover:dark:btn-dark-hv transition-colors duration-300 cursor-pointer">➕</button>
            </div>
        </form>
    );
}

export default AddTodo;