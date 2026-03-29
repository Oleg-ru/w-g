import React from 'react';
import {Link} from "react-router";
import {AppRoutes} from "../App.jsx";

function LoginPage(props) {
    return (
        <div>
            <h3>Вход</h3>
            <form action="">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Войти</button>
            </form>
            <p>Нет аккаунта?</p>
            <Link to={`${AppRoutes.AUTH}/${AppRoutes.REG}`}>Зарегистрироваться</Link>
        </div>
    );
}

export default LoginPage;