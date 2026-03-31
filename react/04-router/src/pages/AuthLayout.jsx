import React from 'react';
import {Link, Outlet} from "react-router";

function AuthLayout(props) {
    return (
        <div>
            <h2>Аутентификация</h2>
            <div>
                <Link to={"login"}>Вход</Link>
                <Link to={"register"}>Регистрация</Link>
            </div>
            <Outlet/>
        </div>
    );
}

export default AuthLayout;