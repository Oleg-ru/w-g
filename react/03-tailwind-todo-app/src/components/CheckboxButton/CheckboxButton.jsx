import React from 'react';

function CheckboxButton({handleToggle, completed}) {
    return (
        <button
            onClick={handleToggle}
            className={`rounded-full border-2 p-3 cursor-pointer ${
                completed
                    ? "border-green-500 bg-green-500"
                    : "border-gray-300 hover:border-gray-400"} transition-colors duration-300 `}
        ></button>
    );
}

export default CheckboxButton;