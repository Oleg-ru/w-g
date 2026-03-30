import React from 'react';
import {NavLink} from "react-router";

function NavbarNavlink(props) {
    return (
        <nav>
            <NavLink to={"/"} style={({isActive}) => ({
                color: isActive ? 'green' : 'blue'
            })}>Главная</NavLink>
            <NavLink to={"/about"} style={({isActive}) => ({
                color: isActive ? 'red' : 'blue'
            })}>О нас</NavLink>
            <NavLink to={"/auth"} style={({isActive}) => ({
                color: isActive ? 'tomato' : 'blue'
            })}>Войти</NavLink>
            <NavLink to={""}>На главную</NavLink>
            <NavLink to={""}>О нас</NavLink>
        </nav>
    );
}

export default NavbarNavlink;