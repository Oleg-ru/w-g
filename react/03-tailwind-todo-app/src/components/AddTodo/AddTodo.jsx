import React, {useState} from 'react';

function AddTodo({onAdd}) {
    const [text, setText] = useState('');
    const [deadline, setDeadline] = useState("");
    const [showDeadlineInput, setShowDeadlineInput] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        if (text.trim()) {
            onAdd(text, deadline);
            setText('');
            setDeadline('');
            setShowDeadlineInput(false)
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
                <button type="submit"
                        className="p-3 bg-btn-light hover:bg-btn-light-hv text-white dark:btn-dark hover:dark:btn-dark-hv transition-colors duration-300 cursor-pointer">➕
                </button>
            </div>
            {showDeadlineInput && (
                <div className=" mt-3 flex items-center gap-2">
                    <input
                        className="p-2 border rounded flex-1 text-gray-500"
                        type="datetime-local"
                        value={deadline}
                        onChange={(event) => {
                            setDeadline(event.target.value)
                        }}
                    />
                    <button
                        className="p-2 hover:text-gray-600"
                        type="button"
                        onClick={() => {
                            setDeadline("");
                            setShowDeadlineInput(false);
                        }}
                    >Отмена
                    </button>
                </div>
            )}
            {!showDeadlineInput && (
                <button
                    className="mt-3 self-start text-sm text-blue-500 hover:text-blue-700"
                    type="button"
                    onClick={() => {
                        setShowDeadlineInput(true);
                    }}
                >+ Добавить дедлайн</button>

            )}

        </form>
    );
}

export default AddTodo;