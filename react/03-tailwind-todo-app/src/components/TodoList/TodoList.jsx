import React from 'react';
import TodoItem from "../TodoItem/TodoItem.jsx";
import {DragDropProvider} from "@dnd-kit/react";
import {RestrictToVerticalAxis} from '@dnd-kit/abstract/modifiers';

function TodoList({todos, setDeletingId, toggleComplete, handleUpdate}) {

    function handleDragEnd(e) {
        console.log(e)
    }

    return (
        <DragDropProvider onDragEnd={handleDragEnd} modifiers={[RestrictToVerticalAxis]}>
            <div className="flex flex-col gap-3">
                {todos.map((todo, index) => <TodoItem
                        key={todo.id}
                        index={index}
                        onDelete={() => setDeletingId(todo.id)}
                        onToggleComplete={toggleComplete}
                        onUpdate={handleUpdate}
                        {...todo}
                    />
                )}
            </div>
        </DragDropProvider>
    );
}

export default TodoList;