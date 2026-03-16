import React from 'react';
import Header from "./Header.jsx";
import {UserProvider} from "./context/UserContext.jsx";
import {PlayerProvider} from "./context/PlayerContext.jsx";

function Main(props) {

    return (
        <>
            <UserProvider>
                <PlayerProvider>
                    <Header/>
                </PlayerProvider>
            </UserProvider>
        </>
    );
}

export default Main;