import React, {useState} from 'react';
import {useApi} from "./useApi.js";

function DeleteUser(props) {
    const [userId, setUserId] = useState(null);
    const {loading, error, remove} = useApi(`https://69a8666b37caab4b8c61a5a9.mockapi.io/api/v1`);



    function handleDelete() {
        remove(`todos/${userId}`)
            .then(() => {
                alert(`Пользователь с id ${userId} удалён`);
                setUserId('');
            })
            .catch((e) => {
                alert('Ошибка удаления пользователя', e)
            })
    }

    return (
        <div>
            <h2>Удалить пользователя по id</h2>
            <input
                type="text"
                onChange={(event) => {setUserId(event.target.value)}}
                placeholder="Введите Id пользователя"
            />
            <button onClick={handleDelete} disabled={loading}>{loading ? 'Удаление...' : 'Удалить пользователя'}</button>
        </div>
    );
}

export default DeleteUser;