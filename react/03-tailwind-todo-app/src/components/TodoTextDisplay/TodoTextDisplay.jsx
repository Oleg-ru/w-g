import React from 'react';

function TodoTextDisplay({text, createdAt, deadline, completed, setIsEditing}) {
    return (
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
    );
}

export default TodoTextDisplay;