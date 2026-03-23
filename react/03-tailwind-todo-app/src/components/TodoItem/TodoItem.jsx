import React, {useCallback, useEffect, useRef, useState} from 'react';
import CheckboxButton from "../CheckboxButton/CheckboxButton.jsx";
import TodoEditForm from "../TodoEditForm/TodoEditForm.jsx";
import TodoTextDisplay from "../TodoTextDisplay/TodoTextDisplay.jsx";

function TodoItem({id, text, onDelete, onToggleComplete, completed, deadline, createdAt, onUpdate}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(text);
    const [editDeadline, setEditDeadline] = useState(deadline || "");
    const editFormRef = useRef(null);

    function handleToggle() {
        onToggleComplete(id)
    }

    const handleSave = useCallback(() => {
        if (editText.trim()) {
            onUpdate(id, editText, editDeadline)
        }
        setIsEditing(false);
    }, [editText, editDeadline, id, onUpdate]);

    useEffect(() => {

        const handleClickOutside = (e) => {
            if (editFormRef.current && !editFormRef.current.contains(e.target)) {
                handleSave();
            }
        };

        if (isEditing) {
            document.addEventListener('click', handleClickOutside)
        }

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [isEditing, handleSave]);

    return (
        <div
            className="flex items-center justify-between p-4 bg-white dark:bg-page-dark rounded-lg shadow-sm hover:shadow-md transform-shadow duration-300 border border-gray-100">
            <div className="flex items-center gap-5">
                <CheckboxButton handleToggle={handleToggle} completed={completed}/>
                {isEditing
                    ? (
                        <TodoEditForm editText={editText}
                                      setEditText={setEditText}
                                      editDeadline={editDeadline}
                                      setEditDeadline={setEditDeadline}
                                      innerRef={editFormRef}
                                      handleSave={handleSave}
                        />
                    )
                    : (
                        <TodoTextDisplay text={text}
                                         createdAt={createdAt}
                                         deadline={deadline}
                                         completed={completed}
                                         setIsEditing={setIsEditing}
                        />
                    )}

            </div>
            <button className={"cursor-pointer"} onClick={() => {
                onDelete(id)
            }}>
                🗑
            </button>
        </div>
    );
}

export default TodoItem;