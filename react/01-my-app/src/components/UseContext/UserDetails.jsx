import React, {useContext} from 'react';
import {UserContext} from "./context/UserContext.jsx";
import {PlayerContext} from "./context/PlayerContext.jsx";

function UserDetails(props) {
    const user =  useContext(UserContext);
    const player = useContext(PlayerContext);
    return (
        <>
            <div>
                <h3>Детали</h3>
                <p>Имя: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
            <div>
                <h3>Плеер</h3>
                <p>Состояние: {player.isPlaying ? 'Играет' : 'На паузе'}</p>
            </div>
        </>
    );
}

export default UserDetails;