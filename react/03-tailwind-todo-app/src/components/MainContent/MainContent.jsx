import React from 'react';
import TodoList from "../TodoList/TodoList.jsx";
import AddTodo from "../AddTodo/AddTodo.jsx";
import Header from "../Header/Header.jsx";

function MainContent({onAdd, todos, setDeletingId, toggleComplete, handleUpdate}) {
    return (
        <div className="mx-auto flex flex-col gap-3">
            <Header/>
            <AddTodo onAdd={onAdd}/>
            <TodoList todos={todos}
                      setDeletingId={setDeletingId}
                      toggleComplete={toggleComplete}
                      handleUpdate={handleUpdate}
            />
        </div>
    );
}

export default MainContent;