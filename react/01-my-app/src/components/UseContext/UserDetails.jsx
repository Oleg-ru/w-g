import React, {useContext} from 'react';
import {UserContext} from "./context/UserContext.js";

function UserDetails(props) {
    const user = useContext(UserContext);
    return (
        <div>
            <h3>Детали</h3>
            <p>Имя: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default UserDetails;