import React from 'react';

function TodoList(props) {
    return (
        <div>
            <input type="checkbox"/>
            <span>Задача</span>
            <button>❌</button>
        </div>
    );
}

export default TodoList;