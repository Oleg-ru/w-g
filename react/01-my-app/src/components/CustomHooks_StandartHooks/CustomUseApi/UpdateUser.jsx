import React, {useEffect, useState} from 'react';
import {useApi} from "./useApi.js";
import './UserList.css'

function UpdateUser({userId = 1}) {
    const [hasCar, setHasCar] = useState(false);

    const {loading, error, put} = useApi(`https://69a8666b37caab4b8c61a5a9.mockapi.io/api/v1`);

    function handleSubmit(event) {
        event.preventDefault();

        const body = {
            hasCar,
        };

        put(`todos/${userId}`, body)
            .then(() => {
                alert('Данные пользователя изменены');
                setHasCar(false);
            })
            .catch(() => {
                alert('Не удалось изменить данные пользователя!')
            })
    }

    return (
        <div>
            <h2>Изменить статус наличия машины</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={hasCar}
                            onChange={(event) => setHasCar(event.target.checked)}
                            placeholder="Введите имя"
                        />
                    </label>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Идет загрузка...' : 'Изменить данные пользователя'}
                </button>
            </form>
            {error && <p>Ошибка {error.message}</p>}
        </div>
    );
}

export default UpdateUser;