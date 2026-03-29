import React from 'react';
import {Link} from "react-router";

function AuthLayout(props) {
    return (
        <div>
            <h2>Аутентификация</h2>
            <div>
                <Link to={"login"}>Вход</Link>
                <Link to={"register"}>Регистрация</Link>
            </div>
        </div>
    );
}

export default AuthLayout;