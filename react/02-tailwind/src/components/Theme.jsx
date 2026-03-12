import React, {useState} from 'react';

function Theme(props) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
    };
    
    return (
        <div data-theme={theme} className="flex justify-center items-center h-screen dark:bg-gray-800">
            <button className='bg-gray-600 text-blue-50 p-2 rounded-lg shadow-2xs cursor-pointer dark:text-blue-600 dark:bg-amber-200' onClick={toggleTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light' } theme.</button>
        </div>
    );
}

export default Theme;