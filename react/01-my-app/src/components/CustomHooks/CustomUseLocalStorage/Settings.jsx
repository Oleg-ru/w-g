import React from 'react';
import {useLocalStorage} from "./useLocalStorage.js";

function Settings(props) {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');
    const [language, setLanguage] = useLocalStorage('language', 'ru');

    return (
        <div>
            <h1>Настройки</h1>
            <h2>Тема:</h2>
            <select style={{color: "black"}} value={theme} onChange={(event) => setTheme(event.target.value)}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
            </select>
            <h2>Язык:</h2>
            <select style={{color: "black"}} value={language} onChange={(event) => setLanguage(event.target.value)}>
                <option value="ru">RU</option>
                <option value="en">EN</option>
            </select>

            <p>Текущая тема: {theme}</p>
            <p>Текущий язык: {language}</p>
        </div>
    );
}

export default Settings;