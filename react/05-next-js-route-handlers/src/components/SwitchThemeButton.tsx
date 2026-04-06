'use client'

import {useEffect, useState} from "react";

function SwitchThemeButton() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        fetch('/theme')
            .then(res => res.json())
            .then(data => {
                setTheme(data.theme);
                document.documentElement.setAttribute('data-theme', data.theme);
            });

    }, []);

    async function toggleTheme() {
        const newTheme = theme === 'light' ? 'dark' : 'light';

        try {
            await fetch('theme', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({theme: newTheme})
            });
            setTheme(newTheme);
            document.documentElement.setAttribute('data-theme', newTheme);
        } catch (e) {
            console.error('Failed to set theme', e)
        }
    }

    return (
        <div>
            <button onClick={toggleTheme}
                    className="p-4 rounded dark:bg-blue-800 dark:text-white dark:hover:bg-blue-600 border border-amber-200 cursor-pointer delay-75"
            >Переключить тему на {theme === 'light'? 'Тёмную' : 'Светлую'}</button>
        </div>
    );
}

export default SwitchThemeButton;