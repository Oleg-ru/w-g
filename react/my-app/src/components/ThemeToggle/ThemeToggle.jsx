import React from 'react';
import './ThemeToggle.css'

function ThemeToggle({isDarkMode, setIsDarkMode}) {

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div>
            <div className="themeContainer" style={
                {
                    backgroundColor: isDarkMode ? "black" : "white",
                    color: isDarkMode ? "white" : "black",
                }
            }>
                <button onClick={toggleTheme}>Включить {isDarkMode ? "светлую" : "тёмную"} тему</button>
            </div>
        </div>
    );
}

export default ThemeToggle;