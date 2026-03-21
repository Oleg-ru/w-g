import React, {useState} from 'react';

function TodoItem({id, text, onDelete, onToggleComplete, completed, deadline, createdAt}) {

    function handleToggle() {
        onToggleComplete(id)
    }

    return (
        <div
            className="flex items-center justify-between p-4 bg-white dark:bg-page-dark rounded-lg h-12 shadow-sm hover:shadow-md transform-shadow duration-300 border border-gray-100">
            <div className="flex items-center gap-5">
                <button
                    onClick={handleToggle}
                    className={`rounded-full border-2 p-3 cursor-pointer ${
                        completed
                            ? "border-green-500 bg-green-500"
                            : "border-gray-300 hover:border-gray-400"} transition-colors duration-300 `}
                ></button>
                <span>{text}</span>
                <div className="flex flex-col">
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
            </div>
            <button className={"cursor-pointer"} onClick={() => {
                onDelete(id)
            }}>❌
            </button>
        </div>
    );
}

export default TodoItem;