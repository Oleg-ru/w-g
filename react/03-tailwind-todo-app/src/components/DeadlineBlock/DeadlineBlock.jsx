import React from 'react';

function DeadlineBlock({showDeadlineInput, setDeadline, setShowDeadlineInput, deadline}) {
    return (
        <>
            {showDeadlineInput && (
                <div className=" mt-3 flex items-center gap-2">
                    <input
                        className="p-2 border border-blue-700 rounded flex-1 text-gray-500"
                        type="datetime-local"
                        value={deadline}
                        onChange={(event) => {
                            setDeadline(event.target.value)
                        }}
                    />
                    <button
                        className="p-2 hover:text-gray-600 cursor-pointer"
                        type="button"
                        onClick={() => {
                            setDeadline("");
                            setShowDeadlineInput(false);
                        }}
                    >Отмена
                    </button>
                </div>
            )}
            {!showDeadlineInput && (
                <button
                    className="mt-3 self-start text-sm text-blue-500 hover:text-blue-700"
                    type="button"
                    onClick={() => {
                        setShowDeadlineInput(true);
                    }}
                >+ Добавить дедлайн</button>
            )}
        </>
    );
}

export default DeadlineBlock;