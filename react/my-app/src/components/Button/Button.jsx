import React from 'react';
import './Button.css'

function Button(props) {
    function handleClick(e) {
        alert(`Кнопка с текстом "${e.target.textContent}" была нажата`)
    }

    return (
        <button className="button" onClick={handleClick}>{props.name}</button>
    );
}

export default Button;