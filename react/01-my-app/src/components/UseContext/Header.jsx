import React, {useContext} from 'react';
import UserInfo from "./UserInfo.jsx";
import {UserContext} from "./context/UserContext.js";

function Header(props) {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Добро пожаловать, {user.name}</h1>
            <UserInfo />
        </div>
    );
}

export default Header;