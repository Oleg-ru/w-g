import React from 'react';

function Greeting({isLoggedIn}) {
    return (
        <div>
            <h2>{isLoggedIn ? "Добро пожаловать мой друг" : "Кто ты воин?"}</h2>
        </div>
    );
}

export default Greeting;