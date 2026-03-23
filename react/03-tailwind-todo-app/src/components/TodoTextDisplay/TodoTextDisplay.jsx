import React from 'react';
import {formatDateTime} from "../../helpers/dateUtils.js";

function TodoTextDisplay({text, createdAt, deadline, completed, setIsEditing}) {
    return (
        <div className="flex flex-col cursor-pointer"
             onDoubleClick={() => {
                 setIsEditing(true)
             }}
        >
            <span>{text}</span>
            <span className=" text-xs">Создана: {formatDateTime(createdAt)}</span>
            {deadline && (
                <span className={`text-xs ${
                    completed ? "text-gray-400" : new Date(deadline) < new Date() ? "text-red-500" : "text-gray-500"
                }`}>
                        Сделать до: {formatDateTime(deadline)}
                    </span>
            )}

        </div>
    );
}

export default TodoTextDisplay;