import React from 'react';

function RegisterForm({formData, handleChange, handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Имя:
                <input
                    type="text"
                    value={formData.username || ""}
                    onChange={(event) => {
                        handleChange('username', event.target.value)
                    }}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    value={formData.email || ""}
                    onChange={(event) => {
                        handleChange('email', event.target.value)
                    }}
                />
            </label>
            <label>
                Пароль:
                <input
                    type="password"
                    value={formData.password || ""}
                    onChange={(event) => {
                        handleChange('password', event.target.value)
                    }}
                />
            </label>
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
}

export default RegisterForm;