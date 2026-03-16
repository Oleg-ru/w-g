import React from 'react';
import { useUserContext} from "./context/UserContext.jsx";

function UserDetails(props) {
    const {user} =  useUserContext();
    return (
        <div>
            <h3>Детали</h3>
            <p>Имя: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default UserDetails;