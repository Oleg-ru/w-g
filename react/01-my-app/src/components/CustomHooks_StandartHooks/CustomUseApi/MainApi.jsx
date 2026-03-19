import React from 'react';
import UserList from "./UserList.jsx";
import AddUser from "./AddUser.jsx";
import UpdateUser from "./UpdateUser.jsx";
import DeleteUser from "./DeleteUser.jsx";

function MainApi(props) {
    return (
        <>
            <UserList />
            <AddUser />
            <h3>Изменить данные:</h3>
            <UpdateUser />
            <DeleteUser />
        </>
    );
}

export default MainApi;