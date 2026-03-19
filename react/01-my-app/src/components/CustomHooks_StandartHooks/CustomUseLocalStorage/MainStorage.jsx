import React from 'react';
import {useLocalStorage} from "./useLocalStorage.js";
import Settings from "./Settings.jsx";

function MainStorage(props) {

    const [name, handleSetName, handleRemoveName] = useLocalStorage('name', 'Петушок');

    return (
        <div>
            <h1>Привет {name}!</h1>
            <input
                type="text"
                value={name}
                onChange={(event) => handleSetName(event.target.value)}
                placeholder="Введите ваше имя"
            />
            <button onClick={handleRemoveName}>Очистить мое имя</button>
            <Settings />
        </div>
    );
}

export default MainStorage;