import React from 'react';

function DeleteButton({onDelete, id}) {
    return (
        <button className={"cursor-pointer"} onClick={() => {
            onDelete(id)
        }}>
            🗑
        </button>
    );
}

export default DeleteButton;