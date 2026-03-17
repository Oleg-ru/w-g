import React, {useEffect, useState} from 'react';
import {useApi} from "./useApi.js";
import './UserList.css'

function AddUser(props) {

    const [name, setName] = useState('')
    const [hasCar, setHasCar] = useState(false);

    const {loading, error, post} = useApi(`https://69a8666b37caab4b8c61a5a9.mockapi.io/api/v1`);

    function handleSubmit(event) {
        event.preventDefault();

        const body = {
            name,
            hasCar,
        };

        post('todos', body)//TODO поменять на users т.к моксревер в процессе обновления
            .then(() => {
            alert('Добавлен пользователь');
            setName('');
            setHasCar(false);
        })
            .catch(() => {
                alert('Не удалось добавить пользователя!')
            })
    }

    return (
        <div>
            <h2>Добавить пользователя</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Введите имя"
                            required
                        />
                    </label>
                </div>
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
                    {loading ? 'Идет загрузка...' : 'Добавить пользователя'}
                </button>
            </form>
            {error && <p>Ошибка {error.message}</p>}
        </div>
    );
}

export default AddUser;