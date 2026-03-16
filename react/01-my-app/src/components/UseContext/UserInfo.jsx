import React from 'react';
import UserDetails from "./UserDetails.jsx";

function UserInfo(props) {
    return (
        <div>
            <h2>Информация о вас:</h2>
            <UserDetails/>
        </div>
    );
}

export default UserInfo;