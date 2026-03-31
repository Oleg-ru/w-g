import React from 'react';
import {useNavigate} from "react-router";

function NavControls(props) {

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(-1)}>Назад</button>
            <button onClick={() => navigate(1)}>Вперед</button>
            <button onClick={() => navigate(-2)}>Назад 2 шага</button>
            <button onClick={() => navigate(2)}>Вперед на 2 шага</button>
        </div>
    );
}

export default NavControls;