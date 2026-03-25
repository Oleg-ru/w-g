import React from 'react';
import TodoItem from "../TodoItem/TodoItem.jsx";
import {DragDropProvider} from "@dnd-kit/react";
import {RestrictToVerticalAxis} from '@dnd-kit/abstract/modifiers';
import {Debug} from '@dnd-kit/dom/plugins/debug';

function TodoList({todos, setDeletingId, toggleComplete, handleUpdate}) {

    function handleDragEnd(event) {
        console.log(event)
        const {operation: {source, target}} = event;
        if (event.operation.target) {
            console.log(`Dropped ${source.id} onto ${target.id}`);
        }
    }

    return (
        <DragDropProvider onDragEnd={handleDragEnd} modifiers={[RestrictToVerticalAxis]} plugins={[Debug]}>
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