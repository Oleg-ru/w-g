import React from 'react';
import './Button.css'

function Button(props) {

    const {
        label,
        name,
        handleClick
    } = props;

    return (
        <button className="button" onClick={handleClick}>{name}</button>
    );
}

export default Button;