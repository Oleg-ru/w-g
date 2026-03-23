import React, {useCallback, useEffect, useRef, useState} from 'react';
import CheckboxButton from "../CheckboxButton/CheckboxButton.jsx";

function TodoItem({id, text, onDelete, onToggleComplete, completed, deadline, createdAt, onUpdate}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(text);
    const [editDeadline, setEditDeadline] = useState(deadline || "");
    const editFormRef = useRef(null);

    function handleToggle() {
        onToggleComplete(id)
    }

    const handleSave = useCallback(() => {
        if (editText.trim()) {
            onUpdate(id, editText, editDeadline)
        }
        setIsEditing(false);
    }, [editText, editDeadline, id, onUpdate]);

    useEffect(() => {

        const handleClickOutside = (e) => {
            if (editFormRef.current && !editFormRef.current.contains(e.target)) {
                handleSave();
            }
        };

        if (isEditing) {
            document.addEventListener('click', handleClickOutside)
        }

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [isEditing, handleSave]);

    return (
        <div
            className="flex items-center justify-between p-4 bg-white dark:bg-page-dark rounded-lg shadow-sm hover:shadow-md transform-shadow duration-300 border border-gray-100">
            <div className="flex items-center gap-5">
                <CheckboxButton handleToggle={handleToggle} completed={completed}/>
                {isEditing
                    ? (
                        <div className="flex flex-col w-full gap-2 items-stretch" ref={editFormRef}>
                            <input className="w-full px-2 py-1 border-2 border-blue-500 rounded text-sm text-gray-700 dark:text-gray-300"
                                   type="text"
                                   value={editText}
                                   onChange={(e) => setEditText(e.target.value)}
                                   onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                            />
                            <div className="flex flex-col xs:flex-row gap-2 w-full">
                                <input className="w-full sm:flex-1 px-2 py-1 border-2 border-blue-500 rounded text-sm text-gray-700 dark:text-gray-300"
                                       type="datetime-local"
                                       value={editDeadline}
                                       onChange={(e) => setEditDeadline(e.target.value)}
                                />
                                <button  className="flex items-center justify-center gap-1 px-2 py-1 sn:px-3 sm:py-1 cursor-pointer bg-white border-2 border-green-500 rounded hover:bg-green-50 transition-colors text-sm sm:text-base"
                                         onClick={handleSave}
                                >
                                    ✔
                                    <span className="sm:hidden">OK</span>
                                    <span className="hidden sm:inline">Готово</span>
                                </button>
                            </div>
                        </div>
                    )
                    : (
                        <div className="flex flex-col cursor-pointer"
                             onDoubleClick={() => {
                                 setIsEditing(true)
                             }}
                        >
                            <span>{text}</span>
                            <span className=" text-xs">Создана: {new Date(createdAt).toLocaleString("ru-RU", {
                                day: 'numeric',
                                month: 'long',
                                year: "numeric",
                                hour: '2-digit',
                                minute: '2-digit'
                            })}</span>
                            {deadline && (
                                <span className={`text-xs ${
                                    completed ? "text-gray-400" : new Date(deadline) < new Date() ? "text-red-500" : "text-gray-500"
                                }`}>
                        Сделать до: {new Date(deadline).toLocaleString("ru-RU", {
                                    day: 'numeric',
                                    month: 'long',
                                    year: "numeric",
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                    </span>
                            )}

                        </div>
                    )}

            </div>
            <button className={"cursor-pointer"} onClick={() => {
                onDelete(id)
            }}>
                🗑
            </button>
        </div>
    );
}

export default TodoItem;