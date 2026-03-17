import React from 'react';
import UserList from "./UserList.jsx";
import AddUser from "./AddUser.jsx";

function MainApi(props) {
    return (
        <>
            <UserList />
            <AddUser />
        </>
    );
}

export default MainApi;