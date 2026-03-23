import React from 'react';

function Header(props) {
    return (
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white md-8">
            <span className="bg-clip-text text-transparent bg-linear-to-l from-blue-500 to-green-600">
                To Do app
            </span>
        </h1>
    );
}

export default Header;