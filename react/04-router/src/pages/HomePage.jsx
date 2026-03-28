import React from 'react';
import {Link} from "react-router";

function HomePage(props) {
    return (
        <div>
            <h1>Главная страница</h1>
            <Link to={"/about"}>О нас</Link>
            <Link to={"/auth"}>Войти</Link>
        </div>
    );
}

export default HomePage;