import React from 'react';
import './Header.css'
import Button from "../Button/Button.jsx";

function Header(props) {
    return (
        <header className='container'>
            <h1 className='title'>Header</h1>
            <Button name="Регистрация" />
            <Button name="Авторизация" />
        </header>
    );
}

export default Header;