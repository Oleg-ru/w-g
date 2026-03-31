import React from 'react';
import {Link, useLocation} from "react-router";

function Breadcrumbs(props) {

    const location = useLocation();
    const pathNames = location.pathname.split("/").filter(path => path);

    const pathNamesMap = {
        auth: "Авторизация",
        login: 'Вход',
        register: 'Регистрация',
        about: 'О нас',
        contacts: 'Контакты',
    };


    return (
        <div className="bg-blue-400 border mt-1 p-2">
            <Link to={"/"}>Главная</Link>
            {pathNames.map((segment, index) => {
                const path = `/${pathNames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathNames.length - 1;
                const displayName = pathNamesMap[segment] || segment;

                return isLast ? (
                    <span key={path}> ▶ {displayName}</span>
                ) : (
                    <span key={path}> ▶ <Link to={path}>{displayName}</Link> </span>
                )
            })}
        </div>
    );
}

export default Breadcrumbs;