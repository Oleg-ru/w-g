import React from 'react';
import {Link} from "react-router";

function NotFoundPage(props) {
    return (
        <div>
            <h1>Страница не найдена</h1>
            <Link to={"/"}>На главную</Link>
        </div>
    );
}

export default NotFoundPage;