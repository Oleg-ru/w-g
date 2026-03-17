import React, {useState} from 'react';
import LoginForm from "./LoginForm.jsx";
import RegisterForm from "./RegisterForm.jsx";
import {useForm} from "./useForm.js";

function MainForm(props) {

    const loginData = useForm({});
    const registerData = useForm({});

    function handleRegisterSubmit(event) {
        event.preventDefault();
        console.log('Данные авторизации: ', registerData.formData)
    }

    function handleLoginSubmit(event) {
        event.preventDefault();
        console.log('Данные авторизации: ', loginData.formData)
    }

    return (
        <div>
            <h2>Авторизация</h2>
            <LoginForm formData={loginData.formData} handleChange={loginData.handleChange} handleSubmit={registerData.handleSubmit}/>
            <h2>Регистрация</h2>
            <RegisterForm formData={registerData.formData} handleChange={registerData.handleChange} handleSubmit={registerData.handleSubmit} />
        </div>
    );
}

export default MainForm;