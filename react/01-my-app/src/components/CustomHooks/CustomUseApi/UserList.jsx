import React, {useEffect} from 'react';
import {useApi} from "./useApi.js";
import './UserList.css'

function UserList(props) {

    const {data, loading, error, get} = useApi(`https://jsonplaceholder.typicode.com`);

    useEffect(() => {
        get('/users')
    }, []);

    if (loading) {
        return <div>
            <span className="loader"></span>
        </div>
    }

    if (error) {
        return <p>Ошибка: {error.message}</p>
    }

    return (
        <div>
            <h2>Пользователи приложения:</h2>
            <ul>
                {data && data.map(user =>
                    <li key={user.id}>
                    {user.name}
                </li>)}
            </ul>
        </div>
    );
}

export default UserList;