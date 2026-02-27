import React from 'react';

function Email(props) {
    const email = "test@mail.ru";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const checkEmail = emailRegex.test(email);
    
    return (
        <div>
            <p>Email: {checkEmail ? email : 'Неккоректный email'}</p>
        </div>
    );
}

export default Email;