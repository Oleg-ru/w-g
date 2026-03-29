import React from 'react';
import {Link} from "react-router";
import {AppRoutes} from "../App.jsx";

function RegPage(props) {
    return (
        <div>
            <h3>Регистрация</h3>
            <form action="">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Войти</button>
            </form>
            <p>Уже есть аккаунт?</p>
            <Link to={`${AppRoutes.AUTH}/${AppRoutes.LOGIN}`}>Войти</Link>
        </div>
    );
}

export default RegPage;