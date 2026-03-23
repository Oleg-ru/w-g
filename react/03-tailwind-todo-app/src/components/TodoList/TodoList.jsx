import React from 'react';
import TodoItem from "../TodoItem/TodoItem.jsx";

function TodoList({todos, setDeletingId, toggleComplete, handleUpdate}) {
    return (
        <div className="flex flex-col gap-3">
            {todos.map((todo) =>
                <TodoItem
                    key={todo.id}
                    onDelete={() => setDeletingId(todo.id)}
                    onToggleComplete={toggleComplete}
                    onUpdate={handleUpdate}
                    {...todo}
                />
            )}
        </div>
    );
}

export default TodoList;