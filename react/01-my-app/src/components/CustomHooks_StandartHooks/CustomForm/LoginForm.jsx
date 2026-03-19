import React from 'react';

function LoginForm({formData, handleSubmit, handleChange}) {
    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Авторизация</button>
        </form>
    );
}

export default LoginForm;