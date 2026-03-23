import React from 'react';

function DeleteCompletedButton({handeDeleteCompleted}) {
    return (
        <button onClick={handeDeleteCompleted} className="px-4 py-2 mt-4 bg-red-500 text-white rounded hover:bg-red-800 transition-colors cursor-pointer">
            Удалить все выполненные задачи
        </button>
    );
}

export default DeleteCompletedButton;