import React from 'react';
import UserInfo from "./UserInfo.jsx";
import {useUserContext} from "./context/UserContext.jsx";

function Header(props) {
    const {user, updateUser} = useUserContext();
    return (
        <div>
            <h1>Добро пожаловать, {user.name}</h1>
            <button onClick={() => {updateUser({name: 'Степан', email: 'hehe@google.ru'})}}>Сменить пользователя</button>
            <UserInfo />
        </div>
    );
}

export default Header;