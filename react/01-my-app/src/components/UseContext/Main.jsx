import React, {useState} from 'react';
import Header from "./Header.jsx";
import {UserContext} from "./context/UserContext.jsx";

function Main(props) {

    const [user, setUser] = useState({
        name: 'Вальдемар',
        email: "example@email.ru"
    });

    function updateUser(newUser) {
        setUser(newUser)
    }

    return (
        <>
            <UserContext.Provider value={{user, updateUser}}>
                <Header/>
            </UserContext.Provider>
        </>
    );
}

export default Main;