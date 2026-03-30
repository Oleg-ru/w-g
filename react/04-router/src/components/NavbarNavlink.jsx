import React from 'react';
import {NavLink} from "react-router";

function NavbarNavlink(props) {
    return (
        <nav className="flex justify-between gap-1 w-1/3">
            <NavLink to={"/"} style={({isActive}) => ({
                color: isActive ? 'green' : 'blue'
            })}>Главная</NavLink>
            <NavLink to={"/about"} style={({isActive}) => ({
                color: isActive ? 'red' : 'blue'
            })}>О нас</NavLink>
            <NavLink to={"/auth"} style={({isActive}) => ({
                color: isActive ? 'tomato' : 'blue'
            })}>Войти</NavLink>
            <NavLink to={"/"}>На главную</NavLink>
            <NavLink to={"/about"} className={({isActive}) => (
                isActive ? "text-green-800" : "text-shadow-green-200"
            )}>О нас</NavLink>
        </nav>
    );
}

export default NavbarNavlink;