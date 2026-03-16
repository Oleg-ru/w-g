import React from 'react';
import Header from "./Header.jsx";
import {UserContext} from "./context/UserContext.jsx";

function Main(props) {

    const user = {
        name: 'Вальдемар',
        email: "example@email.ru"
    };

    return (
        <>
            <UserContext.Provider value={user}>
                <Header/>
            </UserContext.Provider>
        </>
    );
}

export default Main;