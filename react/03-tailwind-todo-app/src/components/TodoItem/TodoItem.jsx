import React, {useState} from 'react';

function TodoItem({id, text, onDelete}) {
    const [isCompleted, setIsCompleted] = useState(false);

    return (
        <div className="flex items-center justify-between p-4 bg-white dark:bg-page-dark rounded-lg h-12 shadow-sm hover:shadow-md transform-shadow duration-300 border border-gray-100">
            <div className="flex items-center gap-5">
                <button
                    onClick={() => {setIsCompleted(!isCompleted)}}
                    className={`rounded-full border-2 p-3 cursor-pointer ${
                        isCompleted 
                            ? "border-green-500 bg-green-500" 
                            : "border-gray-300 hover:border-gray-400"} transition-colors duration-300 `}
                ></button>
                <span>{text}</span>
            </div>
            <button className={"cursor-pointer"} onClick={() => {onDelete(id)}}>❌</button>
        </div>
    );
}

export default TodoItem;