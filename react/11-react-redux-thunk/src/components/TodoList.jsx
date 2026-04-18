import React from 'react';

function TodoList(props) {
    return (
        <div className='w-1/2'>
            <div className="flex justify-between gap-3 mt-5 p-2 border border-orange-500 rounded">
                <input type="checkbox"/>
                <span>Задача</span>
                <button className="hover:bg-red-300 delay-75 rounded">❌</button>
            </div>
        </div>
    );
}

export default TodoList;