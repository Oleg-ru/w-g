import React from 'react';
import TodoItem from "../TodoItem/TodoItem.jsx";
import {DragDropProvider} from "@dnd-kit/react";
import {RestrictToVerticalAxis} from '@dnd-kit/abstract/modifiers';
import {isSortable} from "@dnd-kit/dom/sortable";

function TodoList({todos, setDeletingId, toggleComplete, handleUpdate, onReorder}) {

    function handleDragEnd(event) {
        const {source} = event.operation;

        if (isSortable(source)) {
            const {initialIndex, index} = source;

            if (initialIndex !== index) {
                onReorder(initialIndex, index)
            }
        }
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