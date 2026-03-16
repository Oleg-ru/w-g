import React from 'react';
import UserInfo from "./UserInfo.jsx";
import {useUserContext} from "./context/UserContext.jsx";

function Header(props) {
    const user = useUserContext();
    return (
        <div>
            <h1>Добро пожаловать, {user.name}</h1>
            <UserInfo />
        </div>
    );
}

export default Header;