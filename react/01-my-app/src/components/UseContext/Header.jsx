import React, {useContext} from 'react';
import UserInfo from "./UserInfo.jsx";
import {UserContext} from "./context/UserContext.jsx";
import {PlayerContext} from "./context/PlayerContext.jsx";

function Header(props) {
    const user = useContext(UserContext);
    const player = useContext(PlayerContext);
    return (
        <div>
            <h1>Добро пожаловать, {user.name}</h1>
            <button onClick={player.togglePlay}>{player.isPlaying ? 'Пауза' : 'Запустить'}</button>
            <UserInfo />
        </div>
    );
}

export default Header;