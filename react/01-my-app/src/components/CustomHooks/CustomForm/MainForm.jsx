import React, {useState} from 'react';
import LoginForm from "./LoginForm.jsx";
import RegisterForm from "./RegisterForm.jsx";

function MainForm(props) {

    const [loginData, setLoginData] = useState({});
    const [registerData, setRegisterData] = useState({});

    function handleLoginChange(key, value) {
        setLoginData({
            ...loginData,
            [key]: value,
        })
    }
    
    function handleLoginSubmit(event) {
        event.preventDefault();
        console.log('Данные авторизации: ', loginData)
    }

    function handleRegisterChange(key, value) {
        setRegisterData({
            ...registerData,
            [key]: value,
        })
    }

    function handleRegisterSubmit(event) {
        event.preventDefault();
        console.log('Данные авторизации: ', registerData)
    }

    return (
        <div>
            <h2>Авторизация</h2>
            <LoginForm formData={loginData} handleChange={handleLoginChange} handleSubmit={handleLoginSubmit}/>
            <h2>Регистрация</h2>
            <RegisterForm formData={registerData} handleChange={handleRegisterChange} handleSubmit={handleRegisterSubmit} />
        </div>
    );
}

export default MainForm;