import React, {useState} from 'react';
import {Link, useNavigate} from "react-router";
import {AppRoutes} from "../App.jsx";

function LoginPage(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            console.log('Авторизация успешная');
            navigate('/about', {replace: true});
        } else {
            alert('Заполните все поля');
        }
    };

    return (
        <div>
            <h3>Вход</h3>
            <form onSubmit={handleSubmit}>
                <input type="email"
                       value={email}
                       onChange={(event) => setEmail(event.target.value)}
                       placeholder="Email"
                       required
                />
                <input type="password"
                       value={password}
                       onChange={(event) => setPassword(event.target.value)}
                       placeholder="Password"
                       required
                />
                <button type="submit">Войти</button>
            </form>
            <p>Нет аккаунта?</p>
            <Link to={`${AppRoutes.AUTH}/${AppRoutes.REG}`}>Зарегистрироваться</Link>
        </div>
    );
}

export default LoginPage;