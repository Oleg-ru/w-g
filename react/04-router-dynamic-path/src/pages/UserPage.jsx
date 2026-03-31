import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router";

const users = [
    {id: 1, name: 'Петя Антонов', bio: 'Люблю JS'},
    {id: 2, name: 'Евгений Зарипов', bio: 'Не люблю Java'},
    {id: 3, name: 'Влада Марганова', bio: 'Не люблю SQL'},
];

const defaultUser = {name: 'Неизвестный пользователь', bio: 'Информация отсутствует'};

function UserPage(props) {

    const {userId} = useParams();
    const [inputId, setInputId] = useState("");
    const navigate = useNavigate();

    const user = users.find(user => user.id === +userId) || defaultUser;

    const handleSubmitFind = (e) => {
        e.preventDefault();
        navigate(`/user/${inputId}`)

    };

    return (
        <>
            <div>
                <h2>Страница пользователя</h2>
                <h3>ID: {userId}</h3>
                <p>Имя: {user.name}</p>
                <p>Биография: {user.bio}</p>
            </div>
            <form onSubmit={handleSubmitFind}>
                <p>Поиск пользователя:</p>
                <input type="number"
                       placeholder="Введите ID пользователя"
                       min={1}
                       value={inputId}
                       onChange={(event) => {setInputId(event.target.value)}}/>
                <button type="submit">Найти</button>
            </form>
        </>
    );
}

export default UserPage;